import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../../helpers/DbHelper';
import { errorMensaje } from '../../../classes/classes';
export default class fleje {

     /* Movimientos de Fleje */
     async movimientoFleje( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [
                    {
                        parametro : 'columna',
                        valor     : parametros.columna
                    },
                    {
                        parametro : 'cajas',
                        valor     : parametros.cajas
                    },
                    {
                        parametro : 'usuario',
                        valor     : parametros.usuario
                    },
                    {
                        parametro : 'Observaciones',
                        valor     : parametros.Observaciones
                    },
                    {
                        parametro : 'proveedor',
                        valor     : parametros.proveedor
                    },
                    {
                        parametro : 'movimiento',
                        valor     : parametros.movimiento
                    }
                  ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_movimientosFleje`);
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

          /* Stock de Fleje */
          async stockFleje( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
                     conexionSql.parametros = [  ]
             }
        
             let respuesta: any = await conexionSql.Ejecutar(`sp_verStockFleje`);
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

  /* Stock de Fleje por Columna*/
  async columnasStock( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) {
                   conexionSql.parametros = [  ]
           }
      
           let respuesta: any = await conexionSql.Ejecutar(`sp_columnasStock`);
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

         /* Stock de Columna Especifica*/
  async dispColumna( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
             conexionSql.parametros = [ 
              {
                parametro : 'columna',
                valor     : parametros.columna
              }
              ]
     }

     let respuesta: any = await conexionSql.Ejecutar(`sp_dispColStock`);
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
  
 





