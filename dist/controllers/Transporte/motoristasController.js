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
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
const classes_1 = require("../../classes/classes");
class motoristas {
    /* Ver Motoristas */
    verMotoristas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verMotoristas');
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
    /* Insertar motorista*/
    insertarMotorista(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'nombre',
                            valor: parametros.nombre
                        },
                        {
                            parametro: 'celular',
                            valor: parametros.celular
                        },
                        {
                            parametro: 'licencia',
                            valor: parametros.licencia
                        },
                        {
                            parametro: 'vencimientoLicencia',
                            valor: parametros.vencimientoLicencia
                        },
                        {
                            parametro: 'identidad',
                            valor: parametros.identidad
                        },
                        {
                            parametro: 'transportista',
                            valor: parametros.transportista
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertMotorista');
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
    /* Actualizar motorista*/
    actualizarMotorista(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'nombre',
                            valor: parametros.nombre
                        },
                        {
                            parametro: 'celular',
                            valor: parametros.celular
                        },
                        {
                            parametro: 'licencia',
                            valor: parametros.licencia
                        },
                        {
                            parametro: 'vencimientoLicencia',
                            valor: parametros.vencimientoLicencia
                        },
                        {
                            parametro: 'identidad',
                            valor: parametros.identidad
                        },
                        {
                            parametro: 'transportista',
                            valor: parametros.transportista
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_updateMotorista');
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
    /* Actualizar estado motorista*/
    cambiarEstadoMotorista(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_updateEstadoMotorista');
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
    /* Motorista Especifico */
    TransporteEspecifico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_cargarMotoristaEspecifico');
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
    /* Documentos Motoristas  */
    cargarDocumentos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_CargarDocumentos');
                if (!respuesta.hasError) {
                    return {
                        // data   : respuesta.data,
                        // errors : respuesta.errors,
                        // hasError : respuesta.hasError
                        antecedentesPenales: respuesta.data.Table0,
                        antecedentesPoliciales: respuesta.data.Table1,
                        tarjetaSalud: respuesta.data.Table2
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
    /* Insertar Antecedente  */
    InsertarAntecedente(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'tipoD',
                            valor: parametros.tipoD
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor: parametros.fechaEntrega
                        },
                        {
                            parametro: 'fechaVencimiento',
                            valor: parametros.fechaVencimiento
                        },
                        {
                            parametro: 'detalleAnt',
                            valor: parametros.detalleAnt
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertAntecedentesMot');
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
    /* Actualizar Antecedente  */
    actualizarAntecedente(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor: parametros.fechaEntrega
                        },
                        {
                            parametro: 'fechaVencimiento',
                            valor: parametros.fechaVencimiento
                        },
                        {
                            parametro: 'detalleAntecedentes',
                            valor: parametros.detalleAntecedentes
                        },
                        {
                            parametro: 'tipoD',
                            valor: parametros.tipoD
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_update_Antecedentes');
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
    /* Insertar Tarjeta De Salud  */
    InsertarTarjeta(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor: parametros.fechaEntrega
                        },
                        {
                            parametro: 'tipoSangre',
                            valor: parametros.tipoSangre
                        },
                        {
                            parametro: 'reactivo',
                            valor: parametros.reactivo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertTarjetaSalud');
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
    /* Actualizar Tarjeta De Salud  */
    actualizarTarjeta(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMotorista',
                            valor: parametros.idMotorista
                        },
                        {
                            parametro: 'fechaEntrega',
                            valor: parametros.fechaEntrega
                        },
                        {
                            parametro: 'tipoSangre',
                            valor: parametros.tipoSangre
                        },
                        {
                            parametro: 'reactivo',
                            valor: parametros.reactivo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_updateTarjetaSalud');
                if (!respuesta.hasError) {
                    return {
                        // data   : respuesta.data,
                        // errors : respuesta.errors,
                        // hasError : respuesta.hasError
                        antecedentesPenales: respuesta.data.Table0,
                        antecedentesPoliciales: respuesta.data.Table1,
                        tarjetaSalud: respuesta.data.Table2
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
exports.default = motoristas;
