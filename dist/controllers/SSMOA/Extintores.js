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
class extintores {
    /* Ver Extintores */
    verExtintores(parametros) {
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
                let respuesta = yield conexionSql.Ejecutar(`sp_verExtintores`);
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
    crearExtintores(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'sede',
                            valor: parametros.sede
                        },
                        { parametro: 'tipoAgente',
                            valor: parametros.tipoAgente
                        },
                        { parametro: 'tipoExtintor',
                            valor: parametros.tipoExtintor
                        },
                        { parametro: 'vidaUtil',
                            valor: parametros.vidaUtil
                        },
                        { parametro: 'capacidad',
                            valor: parametros.capacidad
                        },
                        { parametro: 'Fecha_Anterior_Carga',
                            valor: parametros.Fecha_Anterior_Carga
                        },
                        { parametro: 'Fecha_Proxima_Carga',
                            valor: parametros.Fecha_Proxima_Carga
                        },
                        { parametro: 'usuario_creador',
                            valor: parametros.usuario_creador
                        },
                        { parametro: 'ubicacion',
                            valor: parametros.ubicacion
                        },
                        { parametro: 'fechaCreacion',
                            valor: parametros.fechaCreacion
                        }
                    ];
                }
                console.log(parametros);
                let respuesta = yield conexionSql.Ejecutar(`sp_insert_Extintor`);
                console.log(respuesta);
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
    actualizarExtintores(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'idExtintor',
                            valor: parametros.idExtintor
                        },
                        { parametro: 'sede',
                            valor: parametros.sede
                        },
                        { parametro: 'tipoAgente',
                            valor: parametros.tipoAgente
                        },
                        { parametro: 'tipoExtintor',
                            valor: parametros.tipoExtintor
                        },
                        { parametro: 'vidaUtil',
                            valor: parametros.vidaUtil
                        },
                        { parametro: 'capacidad',
                            valor: parametros.capacidad
                        },
                        { parametro: 'Fecha_Anterior_Carga',
                            valor: parametros.Fecha_Anterior_Carga
                        },
                        { parametro: 'Fecha_Proxima_Carga',
                            valor: parametros.Fecha_Proxima_Carga
                        },
                        { parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        { parametro: 'ubicacion',
                            valor: parametros.ubicacion
                        },
                        { parametro: 'fechaCreacion',
                            valor: parametros.fechaCreacion
                        }
                    ];
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
}
exports.default = extintores;
