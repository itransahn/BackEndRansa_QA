import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class menu{

  async menus( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
             conexionSql.parametros = [

               {
                 parametro : 'rol',
                 valor : parametros.rol
               },

               {
                parametro : 'modulo',
                valor : parametros.modulo
               }

             ]
     }

     let respuesta : any = await conexionSql.Ejecutar(`dbo.sp_cargarMenusModulo`);
    if (!respuesta.hasError ){
            let menus = await this.descomponerRespuesta( respuesta.data.Table0, respuesta.data.Table1  )
            // this.armadoCompletoMenus(this.menusOficiales, respuestaLogin.data.Table3 )
            return ( {
                data : {
                    menu: this.menusOficiales
                    },
                    errors :  respuesta.errors ,
                    hasError : respuesta.hasError
            })
    }else{
      return respuesta;
    }
 } catch ( error ) {
         errorMensaje(error)
 }
 }


 public menusOficiales : any[] = [];
 descomponerRespuesta(  padres : any, hijos: any){

   let i = 0;

   for( let padre of padres){

     this.menusOficiales.push({
       id_menuPadre : padre.id_menuPadre,
       menuPadre : padre.menuPadre,
       icon : padre.icon,
       id_modulo : padre.id_modulo,
         hijos : [],
     })


     for ( let hijo of hijos ){  
         if( padre.id_menuPadre === hijo.id_menuPadre  ){
        //    console.log( hijo.id_menuPadre, padre.id_menuPadre)
           this.menusOficiales[i].hijos.push({
            idmenuPadre : hijo.id_menuPadre,
            idMenuHijo : hijo.id_menuHijo,
            menuHijo: hijo.menuHijo, 
            icon:  hijo.icon,
            url :  hijo.urlM,
            insertar: hijo.insertar,
            actualizar: hijo.actualizar,
            eliminar:  hijo.eliminar
           })

          } 
        }
        i++;
     } 
   }

 }





 
export interface menuInterface {
  id_modulo ?: number,
  modulo    ?: string,
  imagen    ?: string,
  MenuPrincipal ?: {
      id_menuPadre ?: number,
      menuPadre    ?: string,
      icon ?: string,
      MenusHijos ?: {
          menuHijo   ?: string,
          icon       ?: string,
          urlM       ?: string,
          insertar   ?: number,
          actualizar ?: number,
          eliminar   ?: number
        }[]
  }[]
}[]



