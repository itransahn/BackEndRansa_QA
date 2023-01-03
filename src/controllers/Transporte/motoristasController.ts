import { Router, Request, Response } from 'express';
const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class motoristas{

        /* Ver Motoristas */ 
async verMotoristas( parametros ?: any){
            try{
                let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = [  ]
            }
    
            let respuesta : any = await conexionSql.Ejecutar('sp_verMotoristas')
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
        /* Insertar motorista*/ 
async insertarMotorista( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'nombre',
                valor     : parametros.nombre 
            },
            {
                parametro : 'celular',
                valor     : parametros.celular 
            },
            {
                parametro : 'licencia',
                valor     : parametros.licencia 
            },
            {
                parametro : 'vencimientoLicencia',
                valor     : parametros.vencimientoLicencia 
            },
            {
                parametro : 'identidad',
                valor     : parametros.identidad 
            },
            {
                parametro : 'transportista',
                valor     : parametros.transportista 
            },
            {
                parametro : 'usuario',
                valor     : parametros.usuario 
            }
         ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_insertMotorista')
    if( !respuesta.hasError  ){
        return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError :  respuesta.hasError
            }
    }else{
        return respuesta
    }

    }catch( error){
        errorMensaje(error)
    }
 }
         /* Actualizar motorista*/ 
async actualizarMotorista( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'idMotorista',
                valor     : parametros.idMotorista 
            },
            {
                parametro : 'nombre',
                valor     : parametros.nombre 
            },
            {
                parametro : 'celular',
                valor     : parametros.celular 
            },
            {
                parametro : 'licencia',
                valor     : parametros.licencia 
            },
            {
                parametro : 'vencimientoLicencia',
                valor     : parametros.vencimientoLicencia 
            },
            {
                parametro : 'identidad',
                valor     : parametros.identidad 
            },
            {
                parametro : 'transportista',
                valor     : parametros.transportista 
            },
            {
                parametro : 'usuario',
                valor     : parametros.usuario 
            }
         ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_updateMotorista')
    if( !respuesta.hasError  ){
        return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError :  respuesta.hasError
            }
    }else{
        return respuesta
    }

    }catch( error){
        errorMensaje(error)
    }
 }

         /* Actualizar estado motorista*/ 
async cambiarEstadoMotorista( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'idMotorista',
                valor     : parametros.idMotorista 
            },
            {
                parametro : 'estado',
                valor     : parametros.estado 
            },
            {
                parametro : 'usuario',
                valor     : parametros.usuario 
            },
           
         ]
    }
    let respuesta : any = await conexionSql.Ejecutar('sp_updateEstadoMotorista')
    if( !respuesta.hasError  ){
        return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError :  respuesta.hasError
            }
    }else{
        return respuesta
    }

    }catch( error){
        errorMensaje(error)
    }
}
         /* Motorista Especifico */ 
 async TransporteEspecifico( parametros ?: any){
        try{
            let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro: 'idMotorista',
                    valor    : parametros.idMotorista
                }
            ]
        }
    let respuesta : any = await conexionSql.Ejecutar('sp_cargarMotoristaEspecifico')
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

              /* Documentos Motoristas  */ 
 async cargarDocumentos( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro: 'idMotorista',
                valor    : parametros.idMotorista
            }
        ]
    }
let respuesta : any = await conexionSql.Ejecutar('sp_CargarDocumentos')
    if( !respuesta.hasError  ){
        return {
            // data   : respuesta.data,
            // errors : respuesta.errors,
            // hasError : respuesta.hasError
            antecedentesPenales    : respuesta.data.Table0,
            antecedentesPoliciales : respuesta.data.Table1,
            tarjetaSalud           : respuesta.data.Table2
        }
    }else{
        return respuesta
    }

    }catch( error){
        errorMensaje(error)
    }
 }


              /* Insertar Antecedente  */ 
async InsertarAntecedente( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor    : parametros.idMotorista
                        },
                        {
                            parametro: 'tipoD',
                            valor    : parametros.tipoD
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor    : parametros.fechaEntrega
                        },
                        {
                            parametro: 'fechaVencimiento',
                            valor    : parametros.fechaVencimiento
                        },
                        {
                            parametro: 'detalleAnt',
                            valor    : parametros.detalleAnt
                        }
                    ]
                }
            let respuesta : any = await conexionSql.Ejecutar('sp_insertAntecedentesMot')
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

              /* Actualizar Antecedente  */ 
async actualizarAntecedente( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor    : parametros.idMotorista
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor    : parametros.fechaEntrega
                        },
                        {
                            parametro: 'fechaVencimiento',
                            valor    : parametros.fechaVencimiento
                        },
                        {
                            parametro: 'detalleAntecedentes',
                            valor    : parametros.detalleAntecedentes
                        },
                        {
                            parametro: 'tipoD',
                            valor    : parametros.tipoD
                        },
                    ]
                }
            let respuesta : any = await conexionSql.Ejecutar('sp_update_Antecedentes')
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

              /* Insertar Tarjeta De Salud  */ 
async InsertarTarjeta( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor    : parametros.idMotorista
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor    : parametros.fechaEntrega
                        },
                        {
                            parametro: 'tipoSangre',
                            valor    : parametros.tipoSangre
                        },
                        {
                            parametro: 'reactivo',
                            valor    : parametros.reactivo
                        }
                    ]
                }
            let respuesta : any = await conexionSql.Ejecutar('sp_insertTarjetaSalud')
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

                           /* Actualizar Tarjeta De Salud  */ 
async actualizarTarjeta( parametros ?: any){
    try{
        let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro: 'idMotorista',
                valor    : parametros.idMotorista
            },
            {
                parametro: 'fechaEntrega',
                valor    : parametros.fechaEntrega
            },
            {
                parametro: 'tipoSangre',
                valor    : parametros.tipoSangre
            },
            {
                parametro: 'reactivo',
                valor    : parametros.reactivo
            }
        ]
    }
let respuesta : any = await conexionSql.Ejecutar('sp_updateTarjetaSalud')
    if( !respuesta.hasError  ){
        return {
            // data   : respuesta.data,
            // errors : respuesta.errors,
            // hasError : respuesta.hasError
            antecedentesPenales    : respuesta.data.Table0,
            antecedentesPoliciales : respuesta.data.Table1,
            tarjetaSalud           : respuesta.data.Table2
        }
    }else{
        return respuesta
    }

    }catch( error){
        errorMensaje(error)
    }
 }

}