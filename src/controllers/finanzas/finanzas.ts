import { Router, Request, Response } from 'express';

const app: Router = Router();
import { errorMensaje } from '../../classes/classes';
import DbHelper from '../../helpers/DbHelper';

export default class finanzas{


    /* Insertar CAI */
    async insertarCAI( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'cai',
                     valor : parametros.cai
                   }, 
                   {
                    parametro : 'desde',
                    valor : parametros.desde
                  }, 
                  {
                    parametro : 'hasta',
                    valor : parametros.hasta
                  }, 
                  {
                    parametro : 'fechalimite',
                    valor : parametros.fechalimite
                  }, 
                  {
                    parametro : 'sede',
                    valor : parametros.sede
                  }, 
                  {
                    parametro : 'usuario',
                    valor : parametros.usuario
                  }, 
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insCAI`);
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
    
    /* Actualizar CAI*/
    async actualizarCAI( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                      {
                        parametro : 'id',
                        valor : parametros.id
                      }, 
                      {
                        parametro : 'cai',
                        valor : parametros.cai
                      }, 
                      {
                       parametro : 'desde',
                       valor : parametros.desde
                     }, 
                     {
                       parametro : 'hasta',
                       valor : parametros.hasta
                     }, 
                     {
                       parametro : 'fechalimite',
                       valor : parametros.fechalimite
                     }, 
                     {
                       parametro : 'sede',
                       valor : parametros.sede
                     }, 
                     {
                       parametro : 'usuario',
                       valor : parametros.usuario
                     }, 
                 ]
         }

       let respuesta: any = await conexionSql.Ejecutar(`sp_modificarCAI`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError : respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

        /* Actualizar CAI*/
        async CaiActual( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
                     conexionSql.parametros = [
                          {
                            parametro : 'idSede',
                            valor : parametros.idSede
                          }, 
                     ]
             }
           let respuesta: any = await conexionSql.Ejecutar(`spVerCaiActual`);
            if (!respuesta.hasError ){
                    return { 
                      data :      respuesta.data,
                      errors :    respuesta.errors,
                      hasError : respuesta.hasError
                      }
            }else{
              return respuesta;
            }
         } catch ( error ) {
                 errorMensaje(error)
         }
         }

/* UTILITARIOS */
  }
  
 





