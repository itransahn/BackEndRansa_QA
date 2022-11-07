import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class permisos{

/* Controladores Permisos Menu Hijo */

   /* Ver Permisos Menú Hijo */
   async verPermisosHijo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [   ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verPermisosMenuHijo`);
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


   /* Insertar Permisos Menú Hijo */
 async insertarPermisosHijo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'idRol',
                valor : parametros.idRol
              } ,
              {
                parametro : 'id_menuHijo',
                valor : parametros.id_menuHijo
              },
              {
                parametro : 'insertar',
                valor : parametros.insertar
              },
              {
                parametro : 'actualizar',
                valor : parametros.actualizar
              },
              {
                parametro : 'eliminar',
                valor : parametros.eliminar
              } 
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insPermisosMenuHijo`);
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

    /* Insertar Permisos Menú Hijo */
 async actualizarPermisosHijo ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'idRol',
              valor : parametros.idRol
            } ,
            {
              parametro : 'id_menuHijo',
              valor : parametros.id_menuHijo
            },
            {
              parametro : 'insertar',
              valor : parametros.insertar
            },
            {
              parametro : 'actualizar',
              valor : parametros.actualizar
            },
            {
              parametro : 'eliminar',
              valor : parametros.eliminar
            } 
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_actualizarPermisosMenu`);
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

   /* Insertar Permisos Menú Hijo */
   async quitarPermisosMenuHijo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'idRol',
                valor : parametros.idRol
              } ,
              {
                parametro : 'id_menuHijo',
                valor : parametros.id_menuHijo
              },
              {
                parametro : 'idPermiso',
                valor : parametros.idPermiso
              }
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_updatePermisosMenuHijo`);
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

        /* eliminar Permisos Menú */
        async eliminarPermisosMenu  ( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) { 
                   conexionSql.parametros = [
                    {
                    parametro : 'idRol',
                    valor     : parametros?.idRol
                    },
                    {
                      parametro : 'idMenu',
                      valor     : parametros?.idMenu
                      }
                      ]
           }
           let respuesta: any = await conexionSql.Ejecutar(`sp_bajaPermisosMenu`);
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

/* Controladores Permisos Módulos */
  
  /* Ver Permisos Modulo */
  async verPermisosModulo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [   ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verPermisosModulo`);
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

    /* Ver Permisos Modulo Especifico */
    async verPermisosModuloEsp  ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [
              {
                parametro : 'idModulo',
                valor     : parametros?.idModulo
               }
                  ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_verPermisosModuloEsp`);
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
        /* eliminar Permisos Módulo */
        async eliminarPermisosModulo  ( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) { 
                   conexionSql.parametros = [
                    {
                    parametro : 'idRol',
                    valor     : parametros?.idRol
                    },
                    {
                      parametro : 'idModulo',
                      valor     : parametros?.idModulo
                      }
                      ]
           }
           let respuesta: any = await conexionSql.Ejecutar(`sp_bajaPermisosModulo`);
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

   /* Insertar Permisos Módulos */
   async insertarPermisosModulo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'rol',
                valor : parametros.rol
              } ,
              {
                parametro : 'modulo',
                valor : parametros.modulo
              }
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insPermisoMod`);
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

   /* Quitar permisos Módulo */
   async quitarPermisosModulo  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
              {
                parametro : 'id_permisoMod',
                valor : parametros.id_permisoMod
              } ,
              {
                parametro : 'idRol',
                valor : parametros.idRol
              } ,
              {
                parametro : 'idModulo',
                valor : parametros.idModulo
              }
              ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_updatePermisoMod`);
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


  /* Permisos Hijo */
  /* Ver Permisos Modulo Especifico */
  async verPermisosMenuEsp  ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [
            {
              parametro : 'idMenu',
              valor     : parametros?.idMenu
             }
                ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verPermisosMenuEsp`);
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
  /* Ver Permisos Modulo Especifico */

}
