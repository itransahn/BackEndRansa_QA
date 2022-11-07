import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class seguridad{

/* Controladores Modulos */

   /* Ver Modulos Información Corta */
 async modulosCorto  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_vermodulosCorto`);
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

     /* Ver Modulos Información Detallada */
 async modulosDetalle  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_vermodulosDetalle`);
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

   /* Insertar Modulos */
   async insertarModulo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [
              {
                parametro : 'modulo',
                valor : parametros.modulo
              },
              {
                parametro : 'icon',
                valor : parametros.icon
              },
              {
                parametro : 'imagen',
                valor : parametros.imagen
              }
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insertModulo`);
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

     /* Actualizar Modulos */
     async updateModulo  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [
                {
                  parametro : 'idModulo',
                  valor     : parametros.idModulo
                },
                {
                  parametro : 'modulo',
                  valor     : parametros.modulo
                },
                {
                  parametro : 'icon',
                  valor     : parametros.icon
                },
                {
                  parametro : 'imagen',
                  valor     : parametros.imagen
                },
                {
                  parametro : 'estado',
                  valor     : parametros.estado
                }
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_updateModulo`);
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

         /* Eliminar Modulo */
 async eliminarModulo  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
            {
              parametro : 'idModulo',
              valor     : parametros.idModulo
            }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_deleteModulo`);
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

/* Controladores Modulos */

/* Controladores Menu Padre */
     /* Ver Menús Padres */
     async verMenusPadre  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_verMenusPadre`);
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


        /* Insertar Menús Padres */
        async insertarMenusPadre  ( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) { 
                   conexionSql.parametros = [
                    {
                      parametro : 'menuPadre',
                      valor : parametros.menuPadre
                    },
                    {
                      parametro : 'icon',
                      valor : parametros.icon
                    },
                    {
                      parametro : 'modulo',
                      valor : parametros.modulo
                    },

                    ]
           }
           let respuesta: any = await conexionSql.Ejecutar(`sp_insertMenuPadre`);
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

        /* Actualizar Menús Padres */
          async updateMenusPadre  ( parametros ?: any  ) {  
                  try {
                   let conexionSql = new DbHelper();
                   if ( parametros ) { 
                           conexionSql.parametros = [
                            {
                              parametro : 'idMenuPadre',
                              valor : parametros.idMenuPadre
                            },
                            {
                              parametro : 'menuPadre',
                              valor : parametros.menuPadre
                            },
                            {
                              parametro : 'icon',
                              valor : parametros.icon
                            },
                            {
                              parametro : 'estado',
                              valor : parametros.estado
                            },
                            {
                              parametro : 'idmodulo',
                              valor : parametros.idmodulo
                            },
        
                            ]
                   }
                   let respuesta: any = await conexionSql.Ejecutar(`sp_updateMenuPadre`);
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
                
                         /* Eliminar Menú Padre */
 async eliminarMenuPadre  ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
            {
              parametro : 'idMenuPadre',
              valor     : parametros.idMenuPadre
            }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_deleteMenuPadre`);
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

  /* Controladores Menu Padre */


  /* Controladores Menu Hijos */
    
     /* Ver Menús Hijos */
     async verMenusHijos  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_verMenusHijos`);
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

      /* Ver Menús Hijos Especificos por Padre */
      async verMenusHijosEsp  ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [
                  {
                    parametro : 'idMenuPadre',
                    valor     : parametros.idMenuPadre
                  }
                  ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_verMenusHijosEsp`);
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

     /* Insertar Menús Hijos */
     async insertarMenusHijos  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [
                {
                  parametro : 'menu',
                  valor : parametros.menu
                },
                {
                  parametro : 'icon',
                  valor : parametros.icon
                },
                {
                  parametro : 'urlM',
                  valor : parametros.urlM
                },
                {
                  parametro : 'menuPadre',
                  valor : parametros.menuPadre
                }
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_insertMenuHijo`);
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


     /* Actualizar Menús Hijos */
     async updateMenusHijos  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [
                {
                  parametro : 'idMenuHijo',
                  valor : parametros.idMenuHijo
                },
                {
                  parametro : 'menu',
                  valor : parametros.menu
                },
                {
                  parametro : 'icon',
                  valor : parametros.icon
                },
                {
                  parametro : 'urlM',
                  valor : parametros.urlM
                },
                {
                  parametro : 'menuPadre',
                  valor : parametros.menuPadre
                },
                {
                  parametro : 'estado',
                  valor : parametros.estado
                }
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_updateMenuHijo`);
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

    async eliminarMenuHijo  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [
                {
                  parametro : 'idMenuHijo',
                  valor     : parametros.idMenuHijo
                }
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_deleteMenuHijo`);
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

    async validarRol  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [
                {
                  parametro : 'idUsuario',
                  valor     : parametros.idUsuario 
                },
                {
                  parametro : 'rol',
                  valor     : parametros.rol 
                }
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_validacionRol`);
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


/* Controladores Menu Hijos */

}

