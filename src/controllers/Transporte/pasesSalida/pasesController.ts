import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../../helpers/DbHelper';
import { errorMensaje } from '../../../classes/classes';

export default class pasesSalida{

 /* verPasesSalida para aprobar */ 
 async PasesSalida( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [ ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_verPasesSalida')
    if( !respuesta.hasError  ){
        return {
            data     : respuesta.data,
            errors   : respuesta.errors,
            hasError : respuesta.hasError
              }
    }else{
        return respuesta
    }
    }catch( error){
        errorMensaje(error)
    }
 }

 /* INSERTAR PASE DE SALIDA */
 async CrearPaseSalida( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'idTransportista',
                valor     : parametros.idTransportista
            },
            {
                parametro : 'idCamion',
                valor     : parametros.idCamion
            },
            {
                parametro : 'idMotorista',
                valor     : parametros.idMotorista
            },
            {
                parametro : 'usuario',
                valor     : parametros.usuario
            },
            {
                parametro : 'fechaSalida',
                valor     : parametros.fechaSalida
            },
            {
                parametro : 'horaSalida',
                valor     : parametros.horaSalida
            },
            {
                parametro : 'tipo',
                valor     : parametros.tipo
            },
            {
                parametro : 'idDestino',
                valor     : parametros.idDestino
            },
            {
                parametro : 'contenido',
                valor     : parametros.contenido
            },

         ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_insertPasesSalida')
    if( !respuesta.hasError  ){
        return {
            data     : respuesta.data,
            errors   : respuesta.errors,
            hasError : respuesta.hasError
              }
    }else{
        return respuesta
    }
    }catch( error){
        errorMensaje(error)
    }
 }

  /* Aprobar PASE DE SALIDA */
  async AprobarPaseSalida( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'usuario',
                valor     : parametros.usuario
            },
            {
                parametro : 'idPase',
                valor     : parametros.idPase
            },

         ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_aprobarPaseSalida')
    if( !respuesta.hasError  ){
        return {
            data     : respuesta.data,
            errors   : respuesta.errors,
            hasError : respuesta.hasError
              }
    }else{
        return respuesta
    }
    }catch( error){
        errorMensaje(error)
    }
 }
 /* Eliminar PASE DE SALIDA */
 async EliminarPaseSalida( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'idPase',
                valor     : parametros.idPase
            },
         ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_eliminarPaseSalida')
    if( !respuesta.hasError  ){
        return {
            data     : respuesta.data,
            errors   : respuesta.errors,
            hasError : respuesta.hasError
              }
    }else{
        return respuesta
    }
    }catch( error){
        errorMensaje(error)
    }
 }

 /* Cataglogo */ 
 async catalogoEspecifico( parametros ?: any){
     try{
                 let conexionSql = new DbHelper();
             if ( parametros ){
                 conexionSql.parametros = [
                     {
                         parametro: 'sede',
                         valor    : parametros.sede
                     },
                     {
                        parametro: 'rol',
                        valor    : parametros.rol
                    },
                    {
                        parametro: 'tipo',
                        valor    : parametros.tipo
                    },
                    
                 ]
             }
         let respuesta : any = await conexionSql.Ejecutar('sp_CatalogoTransClientes')
             if( !respuesta.hasError  ){
                 return {
                    Transportes : respuesta.data.Table0,
                    Camiones    : respuesta.data.Table1,
                    Motorista   : respuesta.data.Table2,
                    data        : respuesta.data.Table3,
                 }
             }else{
                 return respuesta
             }
             }catch( error){
                 errorMensaje(error)
             }
          }

 /* Pases salida Historico */ 
 async PasesSalidaHistorico( parametros ?: any){
    try{
                let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = [ ]
            }
        let respuesta : any = await conexionSql.Ejecutar('sp_verPasesSalidaHistorico')
            if( !respuesta.hasError  ){
                return {
                    data     : respuesta.data,
                    errors   : respuesta.errors,
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