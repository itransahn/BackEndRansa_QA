import { Router, Request, Response } from 'express';

const app: Router = Router();
import { errorMensaje } from '../../classes/classes';
import DbHelper from '../../helpers/DbHelper';

export default class cargarArchivos{


    /* CargarFicheros */
    async cargarArchivo( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'idIncidencia',
                     valor : parametros.idIncidencia
                   }, 
                   {
                    parametro : 'fichero',
                    valor : parametros.fichero
                  }, 
                  {
                    parametro : 'tipo',
                    valor : parametros.tipo
                  }, 
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_cargarIncidenciasFichero`);
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
/* UTILITARIOS */
  }
  
 





