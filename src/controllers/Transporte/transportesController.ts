import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class transportes{


       /* Cambiar de estado a transporte */ 
       async verTransportes( parametros ?: any){
        try{
            let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [  ]
        }

        let respuesta : any = await conexionSql.Ejecutar('sp_verTransportes')
        if( !respuesta.hasError  ){
            return {
                data   : respuesta.data,
                errors : respuesta.errors,
                hasError : respuesta.hasError
            }
        }else{
            return respuesta
        }

        }catch( error){
            errorMensaje(error)
        }
     }
        /*  Insertar Transportes */
        async insertarTransporte( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
               // console.log( parametros.usuario )
                     conexionSql.parametros = [
                       {
                         parametro : 'nombreEmpresa',
                         valor : parametros.nombreEmpresa
                       }, 
                       {
                        parametro : 'rtnEmpresa',
                        valor : parametros.rtnEmpresa
                       },
                       {
                        parametro : 'direccion',
                        valor : parametros.direccion
                       },  
                       {
                        parametro : 'telefono',
                        valor : parametros.telefono
                       },  
                       {
                        parametro : 'nombrePropietario',
                        valor : parametros.nombrePropietario
                       },  
                       {
                        parametro : 'celularPropietario',
                        valor : parametros.celularPropietario
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
        
             let respuesta: any = await conexionSql.Ejecutar(`sp_inserTransporte`);
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
         
        /*  Actualizar Transportes */
        async actualizarTransporte( parametros ?: any  ) {  
            try {
             let conexionSql = new DbHelper();
             if ( parametros ) {
                     conexionSql.parametros = [
                        {
                            parametro : 'idTransporte',
                            valor : parametros.idTransporte
                        },
                       {
                         parametro : 'nombreEmpresa',
                         valor : parametros.nombreEmpresa
                       }, 
                       {
                        parametro : 'rtnEmpresa',
                        valor : parametros.rtnEmpresa
                       },
                       {
                        parametro : 'direccion',
                        valor : parametros.direccion
                       },  
                       {
                        parametro : 'telefono',
                        valor : parametros.telefono
                       },  
                       {
                        parametro : 'nombrePropietario',
                        valor : parametros.nombrePropietario
                       },  
                       {
                        parametro : 'celularPropietario',
                        valor : parametros.celularPropietario
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
        
             let respuesta: any = await conexionSql.Ejecutar(`sp_UpdateTransporte`);
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

         /* Cambiar de estado a transporte */ 
         async CambiarEstadoTransporte( parametros ?: any){
            try{
                let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = [
                    {
                        parametro: 'idtransporte',
                        valor    : parametros.idtransporte
                    },
                    {
                        parametro: 'estado',
                        valor    : parametros.estado
                    },
                    {
                        parametro: 'usuario',
                        valor    : parametros.usuario
                    },
                ]
            }

            let respuesta : any = await conexionSql.Ejecutar('sp_updateEstadoTrans')
            if( !respuesta.hasError  ){
                return {
                    data   : respuesta.data,
                    errors : respuesta.errors,
                    hasError : respuesta.hasError
                }
            }else{
                return respuesta
            }

            }catch( error){
                errorMensaje(error)
            }
         }

           /* Transporte Especifico */ 
           async TransporteEspecifico( parametros ?: any){
            try{
                let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = [
                    {
                        parametro: 'idTransporte',
                        valor    : parametros.idTransporte
                    }
                ]
            }
        let respuesta : any = await conexionSql.Ejecutar('sp_cargarTransporteEspecifico')
            if( !respuesta.hasError  ){
                return {
                    data   : respuesta.data,
                    errors : respuesta.errors,
                    hasError : respuesta.hasError
                }
            }else{
                return respuesta
            }

            }catch( error){
                errorMensaje(error)
            }
         }

          /* Transporte Especifico */ 
          async elminarTransporte( parametros ?: any){
            try{
                let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = [
                    {
                        parametro: 'idTransporte',
                        valor    : parametros.idTransporte
                    }
                ]
            }
        let respuesta : any = await conexionSql.Ejecutar('sp_bajaTransportistas')
            if( !respuesta.hasError  ){
                return {
                    data   : respuesta.data,
                    errors : respuesta.errors,
                    hasError : respuesta.hasError
                }
            }else{
                return respuesta
            }

            }catch( error){
                errorMensaje(error)
            }
         }



}