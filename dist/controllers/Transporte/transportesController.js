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
class transportes {
    /*  Insertar Transportes */
    insertarTransporte(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'nombreEmpresa',
                            valor: parametros.nombreEmpresa
                        },
                        {
                            parametro: 'rtnEmpresa',
                            valor: parametros.rtnEmpresa
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'telefono',
                            valor: parametros.telefono
                        },
                        {
                            parametro: 'nombrePropietario',
                            valor: parametros.nombrePropietario
                        },
                        {
                            parametro: 'celularPropietario',
                            valor: parametros.celularPropietario
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
                let respuesta = yield conexionSql.Ejecutar(`sp_inserTransporte`);
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
    /*  Actualizar Transportes */
    actualizarTransporte(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'idTransporte',
                            valor: parametros.idTransporte
                        },
                        {
                            parametro: 'nombreEmpresa',
                            valor: parametros.nombreEmpresa
                        },
                        {
                            parametro: 'rtnEmpresa',
                            valor: parametros.rtnEmpresa
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'telefono',
                            valor: parametros.telefono
                        },
                        {
                            parametro: 'nombrePropietario',
                            valor: parametros.nombrePropietario
                        },
                        {
                            parametro: 'celularPropietario',
                            valor: parametros.celularPropietario
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
                let respuesta = yield conexionSql.Ejecutar(`sp_UpdateTransporte`);
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
    /* Cambiar de estado a transporte */
    CambiarEstadoTransporte(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idtransporte',
                            valor: parametros.idtransporte
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
                let respuesta = yield conexionSql.Ejecutar('sp_updateEstadoTrans');
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
    /* Transporte Especifico */
    TransporteEspecifico(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idTransporte',
                            valor: parametros.idTransporte
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_cargarTransporteEspecifico');
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
exports.default = transportes;
