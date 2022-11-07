import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class moduloPadre{

  async modulos( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
             conexionSql.parametros = [

             ]
     }

     let respuesta : any = await conexionSql.Ejecutar(`dbo.sp_cargarModulosPadres`);
    if (!respuesta.hasError ){
            let menus = await this.descomponerModulos( respuesta.data.Table0, respuesta.data.Table1  )
            // this.armadoCompletoMenus(this.menusOficiales, respuestaLogin.data.Table3 )
            return ( {
                data : {
                    menu: this.modulosOficiales
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


 public modulosOficiales : any[] = [];
 descomponerModulos(  modulos : any, padres: any){



   let i = 0;

   for( let modulo of modulos){

     this.modulosOficiales.push({
       id_modulo : modulo?.id_modulo,
       modulo    : modulo?.modulo,
       imagen    : modulo?.imagen,
       icono     : modulo?.icon,
       estado    : modulo?.estado,
         padres : [],
     })


     for ( let padre of padres ){  
         if( modulo.id_modulo === padre.id_modulo  ){
        //    console.log( hijo.id_menuPadre, padre.id_menuPadre)
           this.modulosOficiales[i].padres.push({
            id_menuPadre : padre.id_menuPadre,
            id_modulo :    padre.id_modulo,
            menuPadre :    padre.menuPadre,
            icon      :    padre.icon,
            estado    :    padre.estado
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





