import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';
export default class asignacionMaquinas{



     /* VER ROLES    */
     async sp_verRoles( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verRoles`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

         /* VER ROL ESPECIFICO */
         async sp_verRolEspecifico( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
    
                     conexionSql.parametros = [ 
                        {
                           parametro : 'idRol',
                           valor     : parametros.idRol
                        }
                     ]
             }
        
             let respuesta: any = await conexionSql.Ejecutar(`sp_verRolesEspecifico`);
            if (!respuesta.hasError ){
                    return { 
                      data :      respuesta.data,
                      errors :    respuesta.errors,
                      hasError :  respuesta.hasError
                      }
            }else{
              return respuesta;
            }
         } catch ( error ) {
                 errorMensaje(error)
         }
         }


    /* CREAR ROL */
    async crearRol( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [

                   {
                     parametro : 'rol',
                     valor : parametros.rol
                   }

                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insRol`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }


     /* ACTUALIZAR ROL */
     async actualizarRol( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [
                   {
                     parametro : 'idRol',
                     valor : parametros.idRol
                   }, 
                   {
                    parametro : 'rol',
                    valor : parametros.rol
                   },
                   {
                    parametro : 'estado',
                    valor : parametros.estado
                   }

                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_updateRol`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }



        /* ACTUALIZAR ROL */
     async eliminarRol( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) {
  
                   conexionSql.parametros = [
                     {
                       parametro : 'idRol',
                       valor : parametros.idRol
                     }
                   ]
           } 
           let respuesta: any = await conexionSql.Ejecutar(`sp_deleteRol`);
          if (!respuesta.hasError ){
                  return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
          }else{
            return respuesta;
          }
       } catch ( error ) {
               errorMensaje(error)
       }
       }

  }
  
 





