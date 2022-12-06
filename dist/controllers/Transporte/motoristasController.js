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
}
exports.default = motoristas;
