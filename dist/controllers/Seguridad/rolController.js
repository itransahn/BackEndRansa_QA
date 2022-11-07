"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
class rol {
}
exports.default = rol;
// /* Controladores Permisos Menu Hijo */
//    /* Ver Permisos Menú Hijo */
//    async verPermisosHijo  ( parametros ?: any  ) {  
//     try {
//      let conexionSql = new DbHelper();
//      if ( parametros ) { 
//              conexionSql.parametros = [   ]
//      }
//      let respuesta: any = await conexionSql.Ejecutar(`sp_verPermisosMenuHijo`);
//     if (!respuesta.hasError ){
//             return { 
//               data :      respuesta.data,
//               errors :    respuesta.errors,
//               hasError : respuesta.hasError
//               }
//     }else{
//       return respuesta;
//     }
//   } catch ( error ) {
//          errorMensaje(error)
//   }
//   }
//    /* Insertar Permisos Menú Hijo */
//  async insertarPermisosHijo  ( parametros ?: any  ) {  
//     try {
//      let conexionSql = new DbHelper();
//      if ( parametros ) { 
//              conexionSql.parametros = [ 
//               {
//                 parametro : 'idRol',
//                 valor : parametros.idRol
//               } ,
//               {
//                 parametro : 'id_menuHijo',
//                 valor : parametros.id_menuHijo
//               },
//               {
//                 parametro : 'insertar',
//                 valor : parametros.insertar
//               },
//               {
//                 parametro : 'actualizar',
//                 valor : parametros.actualizar
//               },
//               {
//                 parametro : 'eliminar',
//                 valor : parametros.eliminar
//               } 
//               ]
//      }
//      let respuesta: any = await conexionSql.Ejecutar(`sp_insPermisosMenuHijo`);
//     if (!respuesta.hasError ){
//             return { 
//               data :      respuesta.data,
//               errors :    respuesta.errors,
//               hasError : respuesta.hasError
//               }
//     }else{
//       return respuesta;
//     }
//   } catch ( error ) {
//          errorMensaje(error)
//   }
//   }
//    /* Insertar Permisos Menú Hijo */
//    async quitarPermisosMenuHijo  ( parametros ?: any  ) {  
//     try {
//      let conexionSql = new DbHelper();
//      if ( parametros ) { 
//              conexionSql.parametros = [ 
//               {
//                 parametro : 'idRol',
//                 valor : parametros.idRol
//               } ,
//               {
//                 parametro : 'id_menuHijo',
//                 valor : parametros.id_menuHijo
//               },
//               {
//                 parametro : 'idPermiso',
//                 valor : parametros.idPermiso
//               }
//               ]
//      }
//      let respuesta: any = await conexionSql.Ejecutar(`sp_updatePermisosMenuHijo`);
//     if (!respuesta.hasError ){
//             return { 
//               data :      respuesta.data,
//               errors :    respuesta.errors,
//               hasError : respuesta.hasError
//               }
//     }else{
//       return respuesta;
//     }
//   } catch ( error ) {
//          errorMensaje(error)
//   }
//   }
// /* Controladores Permisos Módulos */
//   /* Ver Permisos Modulo */
//   async verPermisosModulo  ( parametros ?: any  ) {  
//     try {
//      let conexionSql = new DbHelper();
//      if ( parametros ) { 
//              conexionSql.parametros = [   ]
//      }
//      let respuesta: any = await conexionSql.Ejecutar(`sp_verPermisosModulo`);
//     if (!respuesta.hasError ){
//             return { 
//               data :      respuesta.data,
//               errors :    respuesta.errors,
//               hasError : respuesta.hasError
//               }
//     }else{
//       return respuesta;
//     }
//   } catch ( error ) {
//          errorMensaje(error)
//   }
//   }
//    /* Insertar Permisos Módulos */
//    async insertarPermisosModulo  ( parametros ?: any  ) {  
//     try {
//      let conexionSql = new DbHelper();
//      if ( parametros ) { 
//              conexionSql.parametros = [ 
//               {
//                 parametro : 'rol',
//                 valor : parametros.rol
//               } ,
//               {
//                 parametro : 'modulo',
//                 valor : parametros.modulo
//               }
//               ]
//      }
//      let respuesta: any = await conexionSql.Ejecutar(`sp_insPermisoMod`);
//     if (!respuesta.hasError ){
//             return { 
//               data :      respuesta.data,
//               errors :    respuesta.errors,
//               hasError : respuesta.hasError
//               }
//     }else{
//       return respuesta;
//     }
//   } catch ( error ) {
//          errorMensaje(error)
//   }
//   }
//    /* Insertar Permisos Módulos */
//    async quitarPermisosModulo  ( parametros ?: any  ) {  
//     try {
//      let conexionSql = new DbHelper();
//      if ( parametros ) { 
//              conexionSql.parametros = [ 
//               {
//                 parametro : 'id_permisoMod',
//                 valor : parametros.id_permisoMod
//               } ,
//               {
//                 parametro : 'idRol',
//                 valor : parametros.idRol
//               } ,
//               {
//                 parametro : 'idModulo',
//                 valor : parametros.idModulo
//               }
//               ]
//      }
//      let respuesta: any = await conexionSql.Ejecutar(`sp_updatePermisoMod`);
//     if (!respuesta.hasError ){
//             return { 
//               data :      respuesta.data,
//               errors :    respuesta.errors,
//               hasError : respuesta.hasError
//               }
//     }else{
//       return respuesta;
//     }
//   } catch ( error ) {
//          errorMensaje(error)
//   }
//   }
