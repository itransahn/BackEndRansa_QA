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
                let respuesta = yield conexionSql.Ejecutar(`sp_insert_Extintor`);
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
                let respuesta = yield conexionSql.Ejecutar(`sp_update_Extintores`);
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
    crearAuditoria(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'Presion',
                            valor: parametros.Presion },
                        { parametro: 'Sello',
                            valor: parametros.Sello },
                        { parametro: 'Manometro',
                            valor: parametros.Manometro },
                        { parametro: 'Soporte',
                            valor: parametros.Soporte },
                        { parametro: 'Manguera',
                            valor: parametros.Manguera },
                        { parametro: 'Boquilla',
                            valor: parametros.Boquilla },
                        { parametro: 'Pintura',
                            valor: parametros.Pintura },
                        { parametro: 'Señalizacion',
                            valor: parametros.Señalizacion },
                        { parametro: 'Altura',
                            valor: parametros.Altura },
                        { parametro: 'Acceso',
                            valor: parametros.Acceso },
                        { parametro: 'Usuario',
                            valor: parametros.Usuario },
                        { parametro: 'observaciones',
                            valor: parametros.observaciones },
                        { parametro: 'idExtintor',
                            valor: parametros.idExtintor },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_auditoriaExtintor`);
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
    cargarExtintoresAuditoria(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'sede',
                            valor: parametros.sede },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cargarExtintoresAuditoriaHoy`);
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
    cargarAuditorias(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'sede',
                            valor: parametros.sede
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cargarExtintoresAuditoriaHoy`);
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
    auditoriasExtintores(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'Mes',
                            valor: parametros.Mes },
                        { parametro: 'anio',
                            valor: parametros.anio },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verAuditoriasGeneradas`);
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
    incidenciasG(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'Mes',
                            valor: parametros.Mes },
                        { parametro: 'anio',
                            valor: parametros.anio },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verIncidenciasGeneradas`);
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
    Incidencia(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'Presion',
                            valor: parametros.Presion },
                        { parametro: 'Sello',
                            valor: parametros.Sello },
                        { parametro: 'Manometro',
                            valor: parametros.Manometro },
                        { parametro: 'Soporte',
                            valor: parametros.Soporte },
                        { parametro: 'Manguera',
                            valor: parametros.Manguera },
                        { parametro: 'Boquilla',
                            valor: parametros.Boquilla },
                        { parametro: 'Pintura',
                            valor: parametros.Pintura },
                        { parametro: 'Señalizacion',
                            valor: parametros.Señalizacion },
                        { parametro: 'Altura',
                            valor: parametros.Altura },
                        { parametro: 'Acceso',
                            valor: parametros.Acceso },
                        { parametro: 'Usuario',
                            valor: parametros.Usuario },
                        { parametro: 'observaciones',
                            valor: parametros.observaciones },
                        { parametro: 'idExtintor',
                            valor: parametros.idExtintor },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_IncidenciaExtintor`);
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
    validarAuditoria(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idExtintor',
                            valor: parametros.idExtintor
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_validadExtintor`);
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
    cargarAuditoria(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idExtintor',
                            valor: parametros.idExtintor
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_CargarAudotoriaMesActual`);
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
    correccionExtintor(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default;
                if (parametros) {
                    conexionSql.parametros = [
                        { parametro: 'Presion',
                            valor: parametros.Presion },
                        { parametro: 'Sello',
                            valor: parametros.Sello },
                        { parametro: 'Manometro',
                            valor: parametros.Manometro },
                        { parametro: 'Soporte',
                            valor: parametros.Soporte },
                        { parametro: 'Manguera',
                            valor: parametros.Manguera },
                        { parametro: 'Boquilla',
                            valor: parametros.Boquilla },
                        { parametro: 'Pintura',
                            valor: parametros.Pintura },
                        { parametro: 'Señalizacion',
                            valor: parametros.Señalizacion },
                        { parametro: 'Altura',
                            valor: parametros.Altura },
                        { parametro: 'Acceso',
                            valor: parametros.Acceso },
                        { parametro: 'Usuario',
                            valor: parametros.Usuario },
                        { parametro: 'observaciones',
                            valor: parametros.observaciones },
                        { parametro: 'idExtintor',
                            valor: parametros.idExtintor },
                        { parametro: 'tipo',
                            valor: parametros.tipo },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_Correcion_Extintor`);
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
exports.default = extintores;
