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
const DbHelper_1 = __importDefault(require("../../../helpers/DbHelper"));
const classes_1 = require("../../../classes/classes");
class pasesSalida {
    /* verPasesSalida para aprobar */
    PasesSalida(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verPasesSalida');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* INSERTAR PASE DE SALIDA */
    CrearPaseSalida(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idTransportista',
                            valor: parametros.idTransportista
                        },
                        {
                            parametro: 'idCamion',
                            valor: parametros.idCamion
                        },
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'fechaSalida',
                            valor: parametros.fechaSalida
                        },
                        {
                            parametro: 'horaSalida',
                            valor: parametros.horaSalida
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        },
                        {
                            parametro: 'idDestino',
                            valor: parametros.idDestino
                        },
                        {
                            parametro: 'contenido',
                            valor: parametros.contenido
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertPasesSalida');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Aprobar PASE DE SALIDA */
    AprobarPaseSalida(parametros) {
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
                            parametro: 'idPase',
                            valor: parametros.idPase
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        },
                        {
                            parametro: 'motivo',
                            valor: parametros.motivo
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_aprobarPaseSalida');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Eliminar PASE DE SALIDA */
    EliminarPaseSalida(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idPase',
                            valor: parametros.idPase
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_eliminarPaseSalida');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Cataglogo */
    catalogoEspecifico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'rol',
                            valor: parametros.rol
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_CatalogoTransClientes');
                if (!respuesta.hasError) {
                    return {
                        Transportes: respuesta.data.Table0,
                        Camiones: respuesta.data.Table1,
                        Motorista: respuesta.data.Table2,
                        data: respuesta.data.Table3,
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Pases salida Historico */
    PasesSalidaHistorico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verPasesSalidaHistorico');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Pases salida Estandar */
    cargarPasesSalidaEstandar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('SP_cargarPasesEstandar');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Pases salida  */
    insertarPasesSalidaEstandar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'fechaSalida',
                            valor: parametros.fechaSalida
                        },
                        {
                            parametro: 'horaSalida',
                            valor: parametros.horaSalida
                        },
                        {
                            parametro: 'usuarioCreador',
                            valor: parametros.usuarioCreador
                        },
                        {
                            parametro: 'nombrePersona',
                            valor: parametros.nombrePersona
                        },
                        {
                            parametro: 'contenido',
                            valor: parametros.contenido
                        },
                        {
                            parametro: 'identidad',
                            valor: parametros.identidad
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_inserPaseEstandar');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Eliminar Pases salida  */
    eliminarPasesSalidaEstandar(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idPase',
                            valor: parametros.idPase
                        },
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_deletePaseEstandar');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Eliminar Pases salida  */
    PaseSalidaPorton(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [{
                            parametro: 'sede',
                            valor: parametros.sede
                        }];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_pasesSalidaPorton');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Pases salida FINANZAS */
    cargarPasesSalidaFinanzas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'sede',
                            valor: parametros.sede }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verpasesFinanzas');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Pases salida FINANZAS Pendientes */
    cargarPasesSalidaFinanzasPendientes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_cargarpasesPendientes');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Pases salida FINANZAS Historico */
    cargarPasesSalidaFinanzasHistorico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_pasesFhistorico');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* INSERTAR Pases salida  FINANZAS*/
    insertarPasesSalidaFinanzas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'fechaSalida',
                            valor: parametros.fechaSalida
                        },
                        {
                            parametro: 'horaSalida',
                            valor: parametros.horaSalida
                        },
                        {
                            parametro: 'usuarioCreador',
                            valor: parametros.usuarioCreador
                        },
                        {
                            parametro: 'nombrePersona',
                            valor: parametros.nombrePersona
                        },
                        {
                            parametro: 'contenido',
                            valor: parametros.contenido
                        },
                        {
                            parametro: 'identidad',
                            valor: parametros.identidad
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'valorSa',
                            valor: parametros.valorSa
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_inserPaseFinanzas');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Eliminar Pases salida  FINANZAS*/
    eliminarPasesSalidaFinanzas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idPase',
                            valor: parametros.idPase
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_deletePaseEstandar');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Eliminar Pases salida  FINANZAS*/
    aprobarPasesSalidaFinanzas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idPase',
                            valor: parametros.idPase
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'accion',
                            valor: parametros.accion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_aprobarPaseFinanzas');
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
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
}
exports.default = pasesSalida;
