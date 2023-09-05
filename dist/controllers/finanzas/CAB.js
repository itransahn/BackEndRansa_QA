"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
const classes_1 = require("../../classes/classes");
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
class CAB {
    empleadosCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                    let respuesta = yield conexionSql.Ejecutar("sp_verEmpleadosCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    CrearempleadoCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'cod_empleado',
                            valor: parametros.cod_empleado
                        },
                        {
                            parametro: 'nombre',
                            valor: parametros.nombre
                        },
                        {
                            parametro: 'area',
                            valor: parametros.area
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_insertEmpleadoCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    ActualizarempleadoCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'id',
                            valor: parametros.id
                        },
                        {
                            parametro: 'cod_empleado',
                            valor: parametros.cod_empleado
                        },
                        {
                            parametro: 'nombre',
                            valor: parametros.nombre
                        },
                        {
                            parametro: 'area',
                            valor: parametros.area
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_updateEmpleadoCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    VerAprobadorCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                    let respuesta = yield conexionSql.Ejecutar("sp_verAprobadorCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    CrearAprobadorCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                        {
                            parametro: 'area',
                            valor: parametros.area
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_insertAprobadorCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    AprobacionViaje(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idViaje',
                            valor: parametros.idViaje
                        },
                        {
                            parametro: 'aprobacion',
                            valor: parametros.aprobacion
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_aprobacionViaje");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    AprobarViaje(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'id_usuario',
                            valor: parametros.id_usuario
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_ViajesToAprobar");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    ActualizarAprobadorCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idAprobador',
                            valor: parametros.idAprobador
                        },
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                        {
                            parametro: 'area',
                            valor: parametros.area
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_updateAprobadorCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    CargarTarifaMasivoCAB(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idTarifa',
                            valor: parametros.idTarifa
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'origen',
                            valor: parametros.origen
                        },
                        {
                            parametro: 'destino',
                            valor: parametros.destino
                        },
                        {
                            parametro: 'valor',
                            valor: parametros.valor
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_tarifaMasivoCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    CargarTarifa(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'cod_empleado',
                            valor: parametros.cod_empleado
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_cargarTarifas");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    VerViajeCab2(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_viajesCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    cancelacionViaje(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'idViaje',
                            valor: parametros.idViaje
                        },
                        {
                            parametro: 'cancelado',
                            valor: parametros.cancelado
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_cancelacionViaje");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    VerViajeCab(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'codEmpleado',
                            valor: parametros.codEmpleado
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_verviajesCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    CrearViajeCab(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoViaje',
                            valor: parametros.tipoViaje
                        },
                        {
                            parametro: 'origen',
                            valor: parametros.origen
                        },
                        {
                            parametro: 'destino',
                            valor: parametros.destino
                        },
                        {
                            parametro: 'fecha',
                            valor: parametros.fecha
                        },
                        {
                            parametro: 'hora',
                            valor: parametros.hora
                        },
                        {
                            parametro: 'multipleDestino',
                            valor: parametros.multipleDestino
                        },
                        {
                            parametro: 'solicitante',
                            valor: parametros.solicitante
                        },
                        {
                            parametro: 'cantidadPersonas',
                            valor: parametros.cantidadPersonas
                        },
                        {
                            parametro: 'metodoPago',
                            valor: parametros.metodoPago
                        },
                        {
                            parametro: 'motivo',
                            valor: parametros.motivo
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_crearViajeCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    ;
    viajeEspecifico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idViaje',
                            valor: parametros.idViaje
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_cargarviajeEspecifico");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    IncidenciaViajeCab(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idViaje',
                            valor: parametros.idViaje
                        },
                        {
                            parametro: 'incidencia',
                            valor: parametros.incidencia
                        },
                        {
                            parametro: 'ValorIncidencia',
                            valor: parametros.ValorIncidencia
                        },
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_incidenciasViajeCAB");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    estadoEmpleadoCab(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'id',
                            valor: parametros.id
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        },
                    ];
                    let respuesta = yield conexionSql.Ejecutar("sp_cambiarEstadoEmpCab");
                    if (!respuesta.hasError) {
                        return {
                            data: respuesta.data,
                            errors: respuesta.errors,
                            hasError: respuesta.hasError
                        };
                    }
                    else {
                        return respuesta;
                    }
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
}
exports.default = CAB;
