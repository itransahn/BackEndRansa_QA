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
class camiones {
    /*  Insertar Camión */
    insertarCamion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'descripcionCamion',
                            valor: parametros.descripcionCamion
                        },
                        {
                            parametro: 'tipoUnidad',
                            valor: parametros.tipoUnidad
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'idTransportista',
                            valor: parametros.idTransportista
                        },
                        {
                            parametro: 'dimenciones',
                            valor: parametros.dimenciones
                        },
                        {
                            parametro: 'gps',
                            valor: parametros.gps
                        },
                        {
                            parametro: 'refrigerado',
                            valor: parametros.refrigerado
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertCamion`);
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
    /*  Actualizar Camión */
    actualizarCamion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idCamion',
                            valor: parametros.idCamion
                        },
                        {
                            parametro: 'descripcionCamion',
                            valor: parametros.descripcionCamion
                        },
                        {
                            parametro: 'tipoUnidad',
                            valor: parametros.tipoUnidad
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'idTransportista',
                            valor: parametros.idTransportista
                        },
                        {
                            parametro: 'dimenciones',
                            valor: parametros.dimenciones
                        },
                        {
                            parametro: 'gps',
                            valor: parametros.gps
                        },
                        {
                            parametro: 'refrigerado',
                            valor: parametros.refrigerado
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateCamion`);
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
    /*  Cambiar Estado de Camión */
    cambiarEstadoCamion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idCamion',
                            valor: parametros.idCamion
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateEstadoCamion`);
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
    /*  Camión Especifico */
    camionEspecifico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idCamion',
                            valor: parametros.idCamion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_camionEspecifico`);
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
exports.default = camiones;
