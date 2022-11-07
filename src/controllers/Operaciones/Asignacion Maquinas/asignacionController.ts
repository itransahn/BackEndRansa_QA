import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../../helpers/DbHelper';
import { errorMensaje } from '../../../classes/classes';
export default class asignacionMaquinas{



     /* VER MAQUINAS EN USO */
     async verMaquinasEnUso( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [ ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verMaquinasEnUso`);
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


    /* ASIGNAR MAQUINA */
    async asignarMaquina( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'tipoMaquina',
                     valor : parametros.tipoMaquina
                   }, 
                   {
                    parametro : 'area',
                    valor : parametros.area
                  }, 
                  {
                    parametro : 'maquina',
                    valor : parametros.maquina
                  }, 
                  {
                    parametro : 'supervisor',
                    valor : parametros.supervisor
                  },
                  {
                    parametro : 'empleado',
                    valor : parametros.empleado
                  }, 
                  {
                    parametro : 'observaciones',
                    valor : parametros.observaciones
                  }, 
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertAsignacionMaquinas`);
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


     /* ACTUALIAR ASIGNACION */
    async actalizarAsignacion( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {

                 conexionSql.parametros = [
                   {
                     parametro : 'observaciones',
                     valor : parametros.observaciones
                   }, 
                   {
                    parametro : 'usuario',
                    valor : parametros.usuario
                  }, 
                  {
                    parametro : 'idAsignacion',
                    valor : parametros.idAsignacion
                  }, 
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_updateAsignacionMaq`);
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


          /* Ver historial de asignaciones */
          async historialAsignaciones( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
    
                     conexionSql.parametros = [ 
                      {
                        parametro : 'desde',
                        valor     : parametros.desde
                      },
                      {
                        parametro : 'hasta',
                        valor     : parametros.hasta
                      }
                     ]
             }
        
             let respuesta: any = await conexionSql.Ejecutar(`sp_verAsignacionesMaqH`);
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
  
 





