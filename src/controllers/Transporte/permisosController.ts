import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class permisosT{

    /* Ver roles que tiene asignado el supervisor Transporte */
    async rolesSupervisor ( parametros ?: any ){
        try {
            let conexionSql = new DbHelper();
            if ( parametros ) {
                    conexionSql.parametros = [ ]
            }
       
            let respuesta: any = await conexionSql.Ejecutar(`sp_rolesSupervisor`);
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

    /* Insertar rol a supervisor Transporte */
    async InsertarRolSupervisor ( parametros ?: any ){
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
            let respuesta: any = await conexionSql.Ejecutar(`sp_insertRolSupervisorT`);
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

    /* Eliminar rol a supervisor Transporte */
    async eliminarRolSupervisor ( parametros ?: any ){
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
                let respuesta: any = await conexionSql.Ejecutar(`sp_deleteRolSupervisorT`);
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
 
    /* Relación Transportes - Clientes */
    async relacionTranClien ( parametros ?: any ){
        try {
            let conexionSql = new DbHelper();
            if ( parametros ) {
                    conexionSql.parametros = [
                       { 
                        parametro : 'transporte',
                        valor : parametros.transporte
                      },
                      { 
                        parametro : 'cliente',
                        valor : parametros.cliente
                      }
                     ]
            }
            let respuesta: any = await conexionSql.Ejecutar(`sp_inserTranClient`);
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

    /* Eliminar Relación Transportes - Clientes */
    async EliminarrelacionTranClien ( parametros ?: any ){
        try {
            let conexionSql = new DbHelper();
            if ( parametros ) {
                    conexionSql.parametros = [
                       { 
                        parametro : 'transporte',
                        valor : parametros.transporte
                      },
                      { 
                        parametro : 'cliente',
                        valor : parametros.cliente
                      }
                     ]
            }
            let respuesta: any = await conexionSql.Ejecutar(`sp_eliminarTransCliente`);
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
    /* Relación Transportes - Proveedor */
    async relacionTranProvee ( parametros ?: any ){
            try {
                let conexionSql = new DbHelper();
                if ( parametros ) {
                        conexionSql.parametros = [
                           { 
                            parametro : 'transporte',
                            valor : parametros.transporte
                          },
                          { 
                            parametro : 'proveedor',
                            valor : parametros.proveedor
                          }
                         ]
                }
                let respuesta: any = await conexionSql.Ejecutar(`sp_inserTranProveedor`);
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

    /* Eliminar Relación Transportes - Proveedor */
    async EliminarrelacionTranProvee ( parametros ?: any ){
            try {
                let conexionSql = new DbHelper();
                if ( parametros ) {
                        conexionSql.parametros = [
                           { 
                            parametro : 'transporte',
                            valor : parametros.transporte
                          },
                          { 
                            parametro : 'proveedor',
                            valor : parametros.proveedor
                          }
                         ]
                }
                let respuesta: any = await conexionSql.Ejecutar(`sp_eliminarTransProveedor`);
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

    /* Relación rol con Cliente */
    async relacionRolCliente ( parametros ?: any ){
                try {
                    let conexionSql = new DbHelper();
                    if ( parametros ) {
                            conexionSql.parametros = [
                               { 
                                parametro : 'rol',
                                valor : parametros.rol
                              },
                              { 
                                parametro : 'cliente',
                                valor : parametros.cliente
                              }
                             ]
                    }
                    let respuesta: any = await conexionSql.Ejecutar(`sp_insertarPerClieRol`);
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
         
    /* Eliminar Relación rol con Cliente */
    async EliminarRelacionRolCliente ( parametros ?: any ){
            try {
                let conexionSql = new DbHelper();
                if ( parametros ) {
                        conexionSql.parametros = [
                           { 
                            parametro : 'rol',
                            valor : parametros.rol
                          },
                          { 
                            parametro : 'cliente',
                            valor : parametros.cliente
                          }
                         ]
                }
                let respuesta: any = await conexionSql.Ejecutar(`sp_deletePerCliRol`);
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

    /* Relación rol con Proveedor */
    async relacionRolProveedor ( parametros ?: any ){
            try {
                let conexionSql = new DbHelper();
                if ( parametros ) {
                        conexionSql.parametros = [
                           { 
                            parametro : 'rol',
                            valor : parametros.rol
                          },
                          { 
                            parametro : 'proveedor',
                            valor : parametros.proveedor
                          }
                         ]
                }
                let respuesta: any = await conexionSql.Ejecutar(`sp_insertarPerProvRol`);
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

    /* Eliminar Relación rol con Proveedor */
    async EliminarRelacionRolProveedor ( parametros ?: any ){
            try {
                let conexionSql = new DbHelper();
                if ( parametros ) {
                        conexionSql.parametros = [
                           { 
                            parametro : 'rol',
                            valor : parametros.rol
                          },
                          { 
                            parametro : 'proveedor',
                            valor : parametros.proveedor
                          }
                         ]
                }
                let respuesta: any = await conexionSql.Ejecutar(`sp_deletePerProvRol`);
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