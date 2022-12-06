import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class camiones{
    /*  Insertar Camión */
    async insertarCamion( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'descripcionCamion',
                     valor : parametros.descripcionCamion
                   }, 
                   {
                    parametro : 'tipoUnidad',
                    valor : parametros.tipoUnidad
                   },
                   {
                    parametro : 'placa',
                    valor : parametros.placa
                   },  
                   {
                    parametro : 'idTransportista',
                    valor : parametros.idTransportista
                   },  
                   {
                    parametro : 'dimenciones',
                    valor : parametros.dimenciones
                   },  
                   {
                    parametro : 'gps',
                    valor : parametros.gps
                   },  
                   {
                    parametro : 'refrigerado',
                    valor : parametros.refrigerado
                   },  
                   {
                    parametro : 'sede',
                    valor : parametros.sede
                   },  
                   {
                    parametro : 'usuario',
                    valor : parametros.usuario
                   },  
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertCamion`);
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
  /*  Actualizar Camión */
    async actualizarCamion( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
             conexionSql.parametros = [
               {
                    parametro : 'idCamion',
                    valor : parametros.idCamion
               }, 
               {
                 parametro : 'descripcionCamion',
                 valor : parametros.descripcionCamion
               }, 
               {
                parametro : 'tipoUnidad',
                valor : parametros.tipoUnidad
               },
               {
                parametro : 'placa',
                valor : parametros.placa
               },  
               {
                parametro : 'idTransportista',
                valor : parametros.idTransportista
               },  
               {
                parametro : 'dimenciones',
                valor : parametros.dimenciones
               },  
               {
                parametro : 'gps',
                valor : parametros.gps
               },  
               {
                parametro : 'refrigerado',
                valor : parametros.refrigerado
               },  
               {
                parametro : 'sede',
                valor : parametros.sede
               },  
               {
                parametro : 'usuario',
                valor : parametros.usuario
               },  
             ]
     }

     let respuesta: any = await conexionSql.Ejecutar(`sp_updateCamion`);
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

      /*  Cambiar Estado de Camión */
    async cambiarEstadoCamion( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
             conexionSql.parametros = [
               {
                    parametro : 'idCamion',
                    valor : parametros.idCamion
               }, 
               {
                 parametro : 'estado',
                 valor : parametros.estado
               }, 
               {
                parametro : 'usuario',
                valor : parametros.usuario
               }
             ]
     }

     let respuesta: any = await conexionSql.Ejecutar(`sp_updateEstadoCamion`);
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

       /*  Camión Especifico */
    async camionEspecifico( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                        parametro : 'idCamion',
                        valor : parametros.idCamion
                   }
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_camionEspecifico`);
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