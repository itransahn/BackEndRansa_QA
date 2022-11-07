import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';
export default class mantenimientos{

/* CENTRO DE COSTOS */ 
      /* Ver CCO */
      async cco( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [  ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verCco`);
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


     /* Insertar CCO */
     async nuevoCco( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'cco',
                        valor : parametros.cco
                    },
                    {
                        parametro : 'codigoCco',
                        valor : parametros.codigoCco
                    }
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insCco`);
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

       /* Actualizar CCO */
       async actualizarCco( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idCco',
                        valor : parametros.idCco
                    },
                    {
                        parametro : 'cco',
                        valor : parametros.cco
                    },
                    {
                        parametro : 'codigoCco',
                        valor : parametros.codigoCco
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_updateCco`);
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


       /* Eliminar CCO */
       async eliminarCco( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idCco',
                        valor : parametros.idCco
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_deleteCco`);
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
/* CENTRO DE COSTOS */ 

         


     /* AREAS DE RANSA */
   /* Ver AREA */
   async area( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [  ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verAreas`);
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


     /* Insertar AREA */
     async nuevoArea( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'area',
                        valor : parametros.area
                    }
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertArea`);
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

       /* Actualizar AREA */
       async actualizarArea( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idArea',
                        valor : parametros.idArea
                    },
                    {
                        parametro : 'area',
                        valor : parametros.area
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_updateArea`);
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


       /* Eliminar AREA */
       async eliminarArea( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idArea',
                        valor : parametros.idArea
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_deleteArea`);
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
     /* AREAS DE RANSA */


     /* SEDES */

   /* Ver SEDE */
   async sede( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [  ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verSedes`);
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


     /* Insertar Sede */
     async nuevaSede( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'sede',
                        valor : parametros.sede
                    }
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_crearSedes`);
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

       /* Actualizar Sede */
       async actualizarSede( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idSede',
                        valor : parametros.idSede
                    },
                    {
                        parametro : 'sede',
                        valor : parametros.sede
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_updateSedes`);
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


       /* Eliminar Sede */
       async eliminarSede( parametros ?: any  ) {  
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
         let respuesta: any = await conexionSql.Ejecutar(`sp_deleteSedes`);
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
     /* SEDES */


         /* SEDES */

   /* Ver SEDE */
   async tipoSangre( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [  ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verTipoSangre`);
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


     /* Insertar Sede */
     async nuevoTipoSangre( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'tipoSangre',
                        valor : parametros.tipoSangre
                    }
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insTipoSangre`);
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

       /* Actualizar Sede */
       async actualizarTipoSangre( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idtipo',
                        valor : parametros.idtipo
                    },
                    {
                        parametro : 'tipoSangre',
                        valor : parametros.tipoSangre
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_updTipoSangre`);
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


       /* Eliminar Sede */
       async eliminarTipoSangre( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idtipo',
                        valor : parametros.idtipo
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_deleteTipoSangre`);
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
        /* SEDES */


            /* PUESTOS */

   /* Ver puesto */
    async VerPuestos( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [  ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verPuestos`);
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


     /* Insertar puesto */
     async InsertarPuesto( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'puesto',
                        valor     : parametros.puesto
                    }
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_inserPuestos`);
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

       /* Actualizar puesto */
     async ActualizarPuesto( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idPuesto',
                        valor : parametros.idPuesto
                    },
                    {
                        parametro : 'puesto',
                        valor : parametros.puesto
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_updatePuestos`);
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


       /* Eliminar puesto */
     async eliminarPuesto( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ 
                    {
                        parametro : 'idPuesto',
                        valor : parametros.idPuesto
                    },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_deletePuesto`);
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
        /* PUESTOS */


  }
  
 





