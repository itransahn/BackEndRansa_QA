import { Router, Request, Response } from 'express';
const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';
import { dataApi } from '../../interfaces/dataApi';
export default class mantenimientoT{

         /* Cambiar de estado a transporte */ 
         async catalogoTransporte( parametros ?: any){
            try{
                let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = [ ]
            }
            let respuesta : any = await conexionSql.Ejecutar('sp_CargarCatalogoTransporte')
            if( !respuesta.hasError  ){
                return {
                        transportes : respuesta.data.Table0,
                        camiones    : respuesta.data.Table1,
                        motoristas  : respuesta.data.Table2,
                        tunidad     : respuesta.data.Table3,
                        dimensiones : respuesta.data.Table4
                }
            }else{
                return respuesta
            }

            }catch( error){
                errorMensaje(error)
            }
         }

            /* Insertar Tipos de Unidad */ 
            async insertarTipoUnidad( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ 
                        {
                            parametro : 'unidad',
                            valor     : parametros.usuario
                        }
                    ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_insertTipoUni')
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

              /* Insertar Dimensiones */ 
            async insertarDimensiones( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ 
                        {
                            parametro : 'alto',
                            valor     : parametros.alto
                        },
                        {
                            parametro : 'ancho',
                            valor     : parametros.ancho
                        },
                        {
                            parametro : 'largo',
                            valor     : parametros.largo
                        },
                        {
                            parametro : 'usuario',
                            valor     : parametros.usuario
                        },
                    ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_insertDimensiones')
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

            /* Catalogo detallado de Transporte */ 
            async catalogoTransporteDetallado( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_CargarCatalogoTransporteDetalle')
                if( !respuesta.hasError  ){
                    return {
                            transportes : respuesta.data.Table0,
                            camiones    : respuesta.data.Table1,
                            motoristas  : respuesta.data.Table2,
                    }
                }else{
                    return respuesta
                }
    
                }catch( error){
                    errorMensaje(error)
                }
             }


               /* Insertar Clientes para transportes */ 
            async insertarClientesTransportes( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ 
                        {
                            parametro : 'nombreCliente',
                            valor     : parametros.nombreCliente
                        },
                        {
                            parametro : 'direccion',
                            valor     : parametros.direccion
                        },
                        {
                            parametro : 'rtnCliente',
                            valor     : parametros.rtnCliente
                        },
                        {
                            parametro : 'nombreCorto',
                            valor     : parametros.nombreCorto
                        },
                        {
                            parametro : 'sede',
                            valor     : parametros.sede
                        }
                    ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_insertClienteTrans')
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

                  /* Actualizar Clientes para transportes */ 
            async actualizarClientesTransportes( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ 
                        {
                            parametro : 'idCliente',
                            valor     : parametros.idCliente
                        },
                        {
                            parametro : 'nombreCliente',
                            valor     : parametros.nombreCliente
                        },
                        {
                            parametro : 'direccion',
                            valor     : parametros.direccion
                        },
                        {
                            parametro : 'rtnCliente',
                            valor     : parametros.rtnCliente
                        },
                        {
                            parametro : 'nombreCorto',
                            valor     : parametros.nombreCorto
                        },
                        {
                            parametro : 'sede',
                            valor     : parametros.sede
                        }
                    ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_actualizarClienteTrans')
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

                  /* Insertar Proveedores para transportes */ 
            async insertarProveedoresTransportes( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ 
                        {
                            parametro : 'nombreProveedor',
                            valor     : parametros.nombreProveedor
                        },
                        {
                            parametro : 'direccion',
                            valor     : parametros.direccion
                        },
                        {
                            parametro : 'rtnProveedor',
                            valor     : parametros.rtnProveedor
                        },
                        {
                            parametro : 'nombreCorto',
                            valor     : parametros.nombreCorto
                        },
                        {
                            parametro : 'sede',
                            valor     : parametros.sede
                        }
                    ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_insertProveedorTrans')
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

                     /* Actualizar Proveedores para transportes */ 
            async actualizarProveedoresTransportes( parametros ?: any){
                try{
                    let conexionSql = new DbHelper();
                if ( parametros ){
                    conexionSql.parametros = [ 
                        {
                            parametro : 'idProveedor',
                            valor     : parametros.idProveedor
                        },
                        {
                            parametro : 'nombreProveedor',
                            valor     : parametros.nombreProveedor
                        },
                        {
                            parametro : 'direccion',
                            valor     : parametros.direccion
                        },
                        {
                            parametro : 'rtnProveedor',
                            valor     : parametros.rtnProveedor
                        },
                        {
                            parametro : 'nombreCorto',
                            valor     : parametros.nombreCorto
                        },
                        {
                            parametro : 'sede',
                            valor     : parametros.sede
                        }
                    ]
                }
                let respuesta : any = await conexionSql.Ejecutar('sp_actualizarProveedorTrans')
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
