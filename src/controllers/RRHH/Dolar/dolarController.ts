import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../../helpers/DbHelper';
import { errorMensaje } from '../../../classes/classes';

export default class dolar{


    /* Ver Canjeo de Dolar TIEMPO REAL */
 async cargarUsuario  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
            {
              parametro : 'usuario',
              valor : parametros.usuario
            } ,
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_validarUsuario`);
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

/* VISTAS */
   /* ver dolar agrupado */
   async dolarCCO  ( parametros ?: any  ) {  
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
     let respuesta: any = await conexionSql.Ejecutar(`sp_verPorCco`);
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

   /* ver dolar agrupado */
 async dolarAgrupado  ( parametros ?: any  ) {  
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
     let respuesta: any = await conexionSql.Ejecutar(`sp_verControlDolarAgrupado`);
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

     /* ver dolar Detalle */
 async dolarDetalle  ( parametros ?: any  ) {  
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
     let respuesta: any = await conexionSql.Ejecutar(`sp_verControlDolarDetalle`);
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

/* Dolar Diario */
  async dolarDiario  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'fecha',
                valor : parametros.fecha
              } 
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verControlDolarDiario`);
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


   /* Dolar Agrupado por empleado */
 async dolarAgrupadoEmp  ( parametros ?: any  ) {  
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
     let respuesta: any = await conexionSql.Ejecutar(`sp_verDolarAgrupadoEmp`);
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


  
   /* Ver Canjeo de Dolar TIEMPO REAL */
 async canjeoDolar  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verControlCafeteria`);
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

     /* Ver Canjeo de Dolar TIEMPO REAL SPS*/
 async canjeoDolar_sps  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verControlCafeteria_sps`);
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

   /* Ver usuarios permididos canjeo dolar */
   async usuariosPermitidosC  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verUPermitidosC`);
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

     /* Cambiar Estado de Permiso  */
     async estadoUsuarioPermiso  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ 
                {
                  parametro : 'idPermiso',
                  valor     : parametros.idPermiso
                },
                {
                  parametro : 'estado',
                  valor     : parametros.estado
                }
               ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_updateEstPermC`);
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



     /* Insertar nuevo usuario, permiso cafeteria */
 async insertarPermisoDolar  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [
                  {
                    parametro : 'usuario',
                    valor : parametros.usuario
                  } ,
                  {
                    parametro : 'nombre',
                    valor : parametros.nombre
                  } ,
                  {
                    parametro : 'cco',
                    valor : parametros.cco
                  } ,
                  {
                    parametro : 'sede',
                    valor : parametros.sede
                  } ,
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insCafeteriaPermisos`);
    if (!respuesta.hasError ){
            return { 
              data :      respuesta.data,
              errors :    respuesta.errors.descripcion,
              hasError : respuesta.hasError
              }
    }else{
      return { 
        data :      respuesta.data,
        errors :    respuesta.errors,
        hasError : respuesta.hasError
        }
    }
  } catch ( error ) {
         errorMensaje(error)
  }
  }

       /* Actualizar permisos cafeteria */
 async actualizarPermisoDolar  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
                {
                  parametro : 'idPermiso',
                  valor : parametros.idPermiso
                } ,
                {
                  parametro : 'usuario',
                  valor : parametros.usuario
                } ,
                {
                  parametro : 'nombre',
                  valor : parametros.nombre
                } ,
                {
                  parametro : 'cco',
                  valor : parametros.cco
                } ,
                {
                  parametro : 'sede',
                  valor : parametros.sede
                } ,
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_updCafeteriaPermisos`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors.descripcion,
            hasError : respuesta.hasError
            }
  }else{
    return { 
      data :      respuesta.data,
      errors :    respuesta.errors,
      hasError : respuesta.hasError
      }
  }
} catch ( error ) {
       errorMensaje(error)
}
}


       /* Insertar nuevo usuario, permiso cafeteria */
 async insertarDolar  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [
                  {
                    parametro : 'usuario',
                    valor : parametros.usuario
                  } 
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insDolar`);
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

  /* MANTENIMIENTOS de dolar */

       /* Ver canjeos actuales */
       async verCanejosG  ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [
                      {
                        parametro : 'tipo',
                        valor : parametros.tipo
                      },
                      {
                        parametro : 'fecha',
                        valor : parametros.fecha
                      } 
                  ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_verCafeteriaRrhh`);
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

                /* Ver canjeos con filtro */
          async verCanejosP  ( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) { 
                     conexionSql.parametros = [
                          {
                            parametro : 'tipo',
                            valor : parametros.tipo
                          },
                          {
                            parametro : 'fecha',
                            valor     : parametros.fecha
                          } 
                      ]
             }
             let respuesta: any = await conexionSql.Ejecutar(`sp_verCafeteriaRrhh`);
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

                          /* Ver canjeos con filtro */
 async UpdateCanjeo  ( parametros ?: any  ) {  
                            try {
                             let conexionSql = new DbHelper();
                             if ( parametros ) { 
                                     conexionSql.parametros = [
                                          {
                                            parametro : 'idControl',
                                            valor : parametros.idControl
                                          },
                                          {
                                            parametro : 'Uanterior',
                                            valor     : parametros.Uanterior
                                          } ,
                                          {
                                            parametro : 'Unuevo',
                                            valor     : parametros.Unuevo
                                          } ,
                                          {
                                            parametro : 'fechaCanjeo',
                                            valor     : parametros.fechaCanjeo
                                          } 
                                      ]
                             }
                             let respuesta: any = await conexionSql.Ejecutar(`sp_updateCanjeoDolar`);
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

  
                          /* Eliminar Canjeo */
 async DeleteCanjeo  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
                {
                  parametro : 'idControl',
                  valor : parametros.idControl
                },
                {
                  parametro : 'usuario',
                  valor     : parametros.usuario
                }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_deleteRegistroCafeteria`);
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


  
 /* Dolar Empleado */
 async dolarEmpleado  ( parametros ?: any  ) {  
   try {
    let conexionSql = new DbHelper();
    if ( parametros ) { 
            conexionSql.parametros = [
                 {
                   parametro : 'usuario',
                   valor : parametros.usuario
                 }
             ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_verControlEmpleado`);
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
