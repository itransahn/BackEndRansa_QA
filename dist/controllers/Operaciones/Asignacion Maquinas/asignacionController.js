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
class asignacionMaquinas {
    /* VER MAQUINAS EN USO */
    verMaquinasEnUso(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMaquinasEnUso`);
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
    /* ASIGNAR MAQUINA */
    asignarMaquina(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoMaquina',
                            valor: parametros.tipoMaquina
                        },
                        {
                            parametro: 'area',
                            valor: parametros.area
                        },
                        {
                            parametro: 'maquina',
                            valor: parametros.maquina
                        },
                        {
                            parametro: 'supervisor',
                            valor: parametros.supervisor
                        },
                        {
                            parametro: 'empleado',
                            valor: parametros.empleado
                        },
                        {
                            parametro: 'observaciones',
                            valor: parametros.observaciones
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertAsignacionMaquinas`);
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
    /* ACTUALIAR ASIGNACION */
    actalizarAsignacion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'observaciones',
                            valor: parametros.observaciones
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'idAsignacion',
                            valor: parametros.idAsignacion
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateAsignacionMaq`);
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
    /* Ver historial de asignaciones */
    historialAsignaciones(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'desde',
                            valor: parametros.desde
                        },
                        {
                            parametro: 'hasta',
                            valor: parametros.hasta
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verAsignacionesMaqH`);
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
exports.default = asignacionMaquinas;
