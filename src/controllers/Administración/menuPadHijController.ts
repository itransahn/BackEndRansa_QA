import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class Padrehijos{

  async padres( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
             conexionSql.parametros = [

             ]
     }

     let respuesta : any = await conexionSql.Ejecutar(`dbo.sp_cargarMenusPadHij`);
    if (!respuesta.hasError ){
            let menus = await this.descomponerMenus( respuesta.data.Table0, respuesta.data.Table1  )
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
 descomponerMenus(  padres : any, hijos: any){



   let i = 0;

   for( let padre of padres){

     this.menusOficiales.push({
       id_menuPadre : padre?.id_menuPadre,
       menuPadre    : padre?.menuPadre,
       icon         : padre?.icon,
       id_modulo    : padre?.id_modulo,
       modulo       : padre?.modulo,
       estado       : padre?.estado,
         hijos : [],
     })


     for ( let hijo of hijos ){  
         if( padre.id_menuPadre === hijo.id_menuPadre  ){
        //    console.log( hijo.id_menuPadre, padre.id_menuPadre)
           this.menusOficiales[i].hijos.push({
            id_menuHijo  :      hijo?.id_menuHijo,
            id_menuPadre :      hijo?.id_modulo,
            menuHijo     :      hijo?.menuHijo,
            icon         :      hijo?.icon,
            url          :      hijo?.urlM,
            estado       :      hijo?.estado
           })

          } 
        }
        i++;
     } 
   }

 }




