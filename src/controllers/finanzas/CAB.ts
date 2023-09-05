import { Router, Request, Response } from 'express';

const app: Router = Router();
import { errorMensaje } from '../../classes/classes';
import DbHelper from '../../helpers/DbHelper';

export default class CAB{

async empleadosCAB( parametros ?: any ){
        try{
            let conexionSql = new DbHelper();
            if ( parametros ){
                conexionSql.parametros = []
            let respuesta : any = await conexionSql.Ejecutar("sp_verEmpleadosCAB");
                if( !respuesta.hasError ){
                    return { 
                        data :      respuesta.data,
                        errors :    respuesta.errors,
                        hasError :  respuesta.hasError
                        }
                }else{
                    return respuesta
                }
            }
        }catch( error ){
            errorMensaje(error)
        }
        }

async CrearempleadoCAB( parametros ?: any ){
try{
    let conexionSql = new DbHelper();
    if ( parametros ){
        conexionSql.parametros = [
            {
                parametro : 'cod_empleado',
                valor     : parametros.cod_empleado
            },
            {
                parametro : 'nombre',
                valor     : parametros.nombre
            },
            {
                parametro : 'area',
                valor     : parametros.area
            },
            {
                parametro : 'cco',
                valor     : parametros.cco
            },
            {
                parametro : 'sede',
                valor     : parametros.sede
            }
        ]
    let respuesta : any = await conexionSql.Ejecutar("sp_insertEmpleadoCAB");
        if( !respuesta.hasError ){
            return { 
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError :  respuesta.hasError
                }
        }else{
            return respuesta
        }
    }
}catch( error ){
    errorMensaje(error)
}
}  

async ActualizarempleadoCAB( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'id',
                    valor     : parametros.id
                },
                {
                    parametro : 'cod_empleado',
                    valor     : parametros.cod_empleado
                },
                {
                    parametro : 'nombre',
                    valor     : parametros.nombre
                },
                {
                    parametro : 'area',
                    valor     : parametros.area
                },
                {
                    parametro : 'cco',
                    valor     : parametros.cco
                },
                {
                    parametro : 'sede',
                    valor     : parametros.sede
                }
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_updateEmpleadoCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   

async VerAprobadorCAB( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [  ]
        let respuesta : any = await conexionSql.Ejecutar("sp_verAprobadorCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}

async CrearAprobadorCAB( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'idUsuario',
                    valor     : parametros.idUsuario
                },
                {
                    parametro : 'area',
                    valor     : parametros.area
                },
                {
                    parametro : 'sede',
                    valor     : parametros.sede
                },
                {
                    parametro : 'tipo',
                    valor     : parametros.tipo
                }
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_insertAprobadorCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   

async AprobacionViaje( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                 parametro : 'idViaje',
                 valor     : parametros.idViaje
                },
                {
                    parametro : 'aprobacion',
                    valor     : parametros.aprobacion 
                },
                {
                    parametro : 'usuario',
                    valor     : parametros.usuario 
                }
              ]
        let respuesta : any = await conexionSql.Ejecutar("sp_aprobacionViaje");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
} 

async AprobarViaje( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                 parametro : 'id_usuario',
                 valor     : parametros.id_usuario
                }
              ]
        let respuesta : any = await conexionSql.Ejecutar("sp_ViajesToAprobar");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
} 

async ActualizarAprobadorCAB( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'idAprobador',
                    valor     : parametros.idAprobador
                },
                {
                    parametro : 'idUsuario',
                    valor     : parametros.idUsuario
                },
                {
                    parametro : 'area',
                    valor     : parametros.area
                },
                {
                    parametro : 'sede',
                    valor     : parametros.sede
                },
                {
                    parametro : 'tipo',
                    valor     : parametros.tipo
                }
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_updateAprobadorCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   

async CargarTarifaMasivoCAB( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'idTarifa',
                    valor     : parametros.idTarifa
                },
                {
                    parametro : 'sede',
                    valor     : parametros.sede
                },
                {
                    parametro : 'origen',
                    valor     : parametros.origen
                },
                {
                    parametro : 'destino',
                    valor     : parametros.destino
                },
                {
                    parametro : 'valor',
                    valor     : parametros.valor
                }
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_tarifaMasivoCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   

async CargarTarifa( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                 parametro : 'cod_empleado',
                 valor     : parametros.cod_empleado
                }
              ]
        let respuesta : any = await conexionSql.Ejecutar("sp_cargarTarifas");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}  

async VerViajeCab2( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                 parametro : 'tipo',
                 valor     : parametros.tipo
                },
                {
                    parametro : 'sede',
                    valor     : parametros.sede
                   }
              ]
        let respuesta : any = await conexionSql.Ejecutar("sp_viajesCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}  

async cancelacionViaje( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                 parametro : 'usuario',
                 valor     : parametros.usuario
                },
                {
                    parametro : 'idViaje',
                    valor     : parametros.idViaje
                },
                {
                    parametro : 'cancelado',
                    valor     : parametros.cancelado
                }
              ]
        let respuesta : any = await conexionSql.Ejecutar("sp_cancelacionViaje");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}  

async VerViajeCab( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                 parametro : 'codEmpleado',
                 valor     : parametros.codEmpleado
                }
              ]
        let respuesta : any = await conexionSql.Ejecutar("sp_verviajesCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}  

async CrearViajeCab( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'tipoViaje',
                    valor     : parametros.tipoViaje
                },
                {
                    parametro : 'origen',
                    valor     : parametros.origen
                },
                {
                    parametro : 'destino',
                    valor     : parametros.destino
                },
                {
                    parametro : 'fecha',
                    valor     : parametros.fecha
                },
                {
                    parametro : 'hora',
                    valor     : parametros.hora
                },
                {
                    parametro : 'multipleDestino',
                    valor     : parametros.multipleDestino
                },
                {
                    parametro : 'solicitante',
                    valor     : parametros.solicitante
                },
                {
                    parametro : 'cantidadPersonas',
                    valor     : parametros.cantidadPersonas
                },
                {
                    parametro : 'metodoPago',
                    valor     : parametros.metodoPago
                },
                {
                    parametro : 'motivo',
                    valor     : parametros.motivo
                }
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_crearViajeCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   
;
async viajeEspecifico( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'idViaje',
                    valor     : parametros.idViaje
                }
               
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_cargarviajeEspecifico");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}  

async IncidenciaViajeCab( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'idViaje',
                    valor     : parametros.idViaje
                },
                {
                    parametro : 'incidencia',
                    valor     : parametros.incidencia
                },
                {
                    parametro : 'ValorIncidencia',
                    valor     : parametros.ValorIncidencia
                },
               
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_incidenciasViajeCAB");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   

async estadoEmpleadoCab( parametros ?: any ){
    try{
        let conexionSql = new DbHelper();
        if ( parametros ){
            conexionSql.parametros = [
                {
                    parametro : 'id',
                    valor     : parametros.id
                },
                {
                    parametro : 'estado',
                    valor     : parametros.estado
                },
               
            ]
        let respuesta : any = await conexionSql.Ejecutar("sp_cambiarEstadoEmpCab");
            if( !respuesta.hasError ){
                return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                    }
            }else{
                return respuesta
            }
        }
    }catch( error ){
        errorMensaje(error)
    }
}   





}