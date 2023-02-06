import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class recibos{

    /* Insertar Recibo */ 
      async InsRecibo( parametros ?: any){
        try{
            let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [ 
                {
                    parametro : 'tipoRecibo',
                    valor     : parametros.tipoRecibo
                },
                {
                    parametro : 'sede',
                    valor     : parametros.sede
                },
                {
                    parametro : 'cco',
                    valor     : parametros.cco
                },
                {
                    parametro : 'reciboC',
                    valor     : parametros.reciboC
                },
                {
                    parametro : 'fechaR',
                    valor     : parametros.fechaR
                },
                {
                    parametro : 'proveedorC',
                    valor     : parametros.proveedorC
                },
                {
                    parametro : 'tipoCombustible',
                    valor     : parametros.tipoCombustible
                },
                {
                    parametro : 'servidoA',
                    valor     : parametros.servidoA
                },
                {
                    parametro : 'placa',
                    valor     : parametros.placa
                },
                {
                    parametro : 'valorRecibo',
                    valor     : parametros.valorRecibo
                },
                {
                    parametro : 'observaciones',
                    valor     : parametros.observaciones
                },
                {
                    parametro : 'usuarioCreador',
                    valor     : parametros.usuarioCreador
                },
                {
                    parametro : 'cliente',
                    valor     : parametros.cliente
                }
             ]
        }

        let respuesta : any = await conexionSql.Ejecutar('sp_crearRecibo')
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
     
 /* Actualizar Recibo */ 
      async UpdRecibo( parametros ?: any){
        try{
            let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [ 
                {
                    parametro : 'idRecibo',
                    valor     : parametros.idRecibo
                },
                {
                    parametro : 'idSede',
                    valor     : parametros.idSede
                },
                {
                    parametro : 'cco',
                    valor     : parametros.cco
                },
                {
                    parametro : 'fechaR',
                    valor     : parametros.fechaR
                },
                {
                    parametro : 'proveedorC',
                    valor     : parametros.proveedorC
                },
                {
                    parametro : 'tipoCombustible',
                    valor     : parametros.tipoCombustible
                },
                {
                    parametro : 'servidoA',
                    valor     : parametros.servidoA
                },
                {
                    parametro : 'placa',
                    valor     : parametros.placa
                },
                {
                    parametro : 'valorR',
                    valor     : parametros.valorR
                },
                {
                    parametro : 'obs',
                    valor     : parametros.obs
                },
                {
                    parametro : 'usuarioM',
                    valor     : parametros.usuarioM
                }
             ]
        }

        let respuesta : any = await conexionSql.Ejecutar('sp_crearRecibo')
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

 /* Cerrar Recibo */ 
      async CerrarRecibo( parametros ?: any){
        try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [ 
            {
                parametro : 'idRecibo',
                valor     : parametros.idRecibo
            },
            {
                parametro : 'Nfactura',
                valor     : parametros.Nfactura
            },
            {
                parametro : 'fechaFactura',
                valor     : parametros.fechaFactura
            },
            {
                parametro : 'valorFactura',
                valor     : parametros.valorFactura
            },
            {
                parametro : 'usuarioM',
                valor     : parametros.usuarioM
            }
         ]
    }

    let respuesta : any = await conexionSql.Ejecutar('sp_crearRecibo')
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
     
    /* Ver recibos no cerrados  */
     async sp_verRecibos( parametros ?: any){
        try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [  ]
    }

    let respuesta : any = await conexionSql.Ejecutar('sp_verRecibos')
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

     /* Ver recibos por Fecha  */
     async sp_verRecibosfecha( parametros ?: any){
        try{
        let conexionSql = new DbHelper();
    if ( parametros ){
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

    let respuesta : any = await conexionSql.Ejecutar('sp_verRecibosfecha')
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