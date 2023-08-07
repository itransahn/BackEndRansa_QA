import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../../helpers/DbHelper';
import { errorMensaje } from '../../../classes/classes';

export default class credito{

/* VISTAS */

/* Crédito Acumulado */
async creditoAcumulado  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'desde',
              valor : parametros.desde
            } ,
            {
              parametro : 'hasta',
              valor : parametros.hasta
            } 
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_acumuladoCreCaf`);
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

   /* ver crédito agrupado por Empleado */
 async creditoAgrupadoEmp  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'desde',
                valor : parametros.desde
              } ,
              {
                parametro : 'hasta',
                valor : parametros.hasta
              } 
              ]
     }

     let respuesta: any = await conexionSql.Ejecutar(`sp_vercreditoAgrupadoEmp`);
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

     /* ver crédito por Empleado */
 async creditoEmpleado  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'desde',
                valor : parametros.desde
              } ,
              {
                parametro : 'hasta',
                valor : parametros.hasta
              } ,
              {
                parametro : 'codEmpleado',
                valor : parametros.codEmpleado
              } 
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_empleadoCreCaf`);
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
  
  async creditoPorFecha  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'desde',
                valor : parametros.desde
              } ,
              {
                parametro : 'hasta',
                valor : parametros.hasta
              } 
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_fechasCreCaf`);
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

   /* Insertar Crédito */
 async insertarCredito  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'idEmpleado',
                valor : parametros.idEmpleado
              } ,
              {
                parametro : 'monto',
                valor : parametros.monto
              } 
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insCredito`);
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

   /* ver Crédito Tiempo real */
 async Credito  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [  ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_vercreditoshoy`);
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


   /* ver Crédito Tiempo real */
   async CreditoSps  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [  ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_vercreditoshoy_sps`);
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
  
       /* Ver creditos */
       async verCreditosP  ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [
                      {
                        parametro : 'tipo',
                        valor : parametros.tipo
                      },
                      {
                        parametro : 'date',
                        valor : parametros.date
                      } 
                  ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_vercreditoshoyMant`);
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

        /* Ver creditos */
      async verCreditosG  ( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) { 
                   conexionSql.parametros = [   ]
           }
           let respuesta: any = await conexionSql.Ejecutar(`sp_vercreditoshoyMantGet`);
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

            /* Actualizar Crédito */
      async updateCredito  ( parametros ?: any  ) {  
              try {
               let conexionSql = new DbHelper();
               if ( parametros ) { 
                       conexionSql.parametros = [  
                        {
                          parametro : 'idCredito',
                          valor     : parametros.idCredito
                        },
                        {
                          parametro : 'Uanterior',
                          valor     : parametros.Uanterior
                        },
                        {
                          parametro : 'Unuevo',
                          valor     : parametros.Unuevo
                        },
                        {
                          parametro : 'fechaCanjeo',
                          valor     : parametros.fechaCanjeo
                        },
                        {
                          parametro : 'montoC',
                          valor     : parametros.montoC
                        }
                        ]
               }
               let respuesta: any = await conexionSql.Ejecutar(`sp_updateCredito`);
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

               /* Ver creditos */
      async eliminarCredito  ( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) { 
                   conexionSql.parametros = [  
                    {
                      parametro : 'idCredito',
                      valor     : parametros.idCredito
                    },
                    {
                      parametro : 'usuario',
                      valor     : parametros.usuario
                    }
                    ]
           }
           let respuesta: any = await conexionSql.Ejecutar(`sp_deleteCredito`);
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
}
