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
class retenciones {
    /* Proveedor */
    Proveedores(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verProveedoresF`);
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
    /* Insertar Proveedor */
    insertarProveedor(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'proveedor',
                            valor: parametros.proveedor
                        },
                        {
                            parametro: 'rtn',
                            valor: parametros.rtn
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertProveedorF`);
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
    /* Actualizar Proveedor */
    actualizarProveedor(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idProveedor',
                            valor: parametros.idProveedor
                        },
                        {
                            parametro: 'proveedor',
                            valor: parametros.proveedor
                        },
                        {
                            parametro: 'rtn',
                            valor: parametros.rtn
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateProveedorF`);
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
    /* Actualizar Proveedor */
    actualizarEstadoProveedor(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idProveedor',
                            valor: parametros.idProveedor
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_estadoProveedorF`);
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
    /* Insertar Retención */
    insertarRetención(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'empresa',
                            valor: parametros.empresa
                        },
                        {
                            parametro: 'rtn',
                            valor: parametros.rtn
                        },
                        {
                            parametro: 'documento',
                            valor: parametros.documento
                        },
                        {
                            parametro: 'fecha',
                            valor: parametros.fecha
                        },
                        {
                            parametro: 'impuesto',
                            valor: parametros.impuesto
                        },
                        {
                            parametro: 'retencion',
                            valor: parametros.retencion
                        },
                        {
                            parametro: 'tipoRetencion',
                            valor: parametros.tipoRetencion
                        },
                        {
                            parametro: 'cai',
                            valor: parametros.cai
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertRetenciones`);
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
    /* Ver Retención*/
    cargarRetencion(parametros) {
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
                            parametro: 'proveedor',
                            valor: parametros.proveedor
                        },
                        {
                            parametro: 'anio',
                            valor: parametros.anio
                        },
                        {
                            parametro: 'mes',
                            valor: parametros.mes
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar('sp_verRetenciones');
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
    /* Guardar Retencion generada */
    guardarRetancionG(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'fecha',
                            valor: parametros.fecha
                        },
                        {
                            parametro: 'proveedor',
                            valor: parametros.proveedor
                        },
                        {
                            parametro: 'dataT',
                            valor: parametros.dataT
                        },
                        {
                            parametro: 'correlativo',
                            valor: parametros.correlativo
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'tipoR',
                            valor: parametros.tipoR
                        },
                        {
                            parametro: 'rtn',
                            valor: parametros.rtn
                        },
                        {
                            parametro: 'cai',
                            valor: parametros.cai
                        },
                        {
                            parametro: 'desde',
                            valor: parametros.desde
                        },
                        {
                            parametro: 'hasta',
                            valor: parametros.hasta
                        },
                        {
                            parametro: 'fechaCAI',
                            valor: parametros.fechaCAI
                        },
                    ];
                    let respuesta = yield conexionSql.Ejecutar('sp_guardarRetencionG');
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
    /* cargar correlativo */
    cargarCorrelativo(parametros) {
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
                    let respuesta = yield conexionSql.Ejecutar('sp_cargarCorrelativoSiguiente');
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
    /* cambiar estado retencion */
    cambiarEstadoRetencion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'retencion',
                            valor: parametros.retencion
                        },
                        {
                            parametro: 'tipoR',
                            valor: parametros.tipoR
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar('sp_cambiarestadoRetencion');
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
    /* cargar retención generada */
    cargarRetencionG(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'correlativo',
                            valor: parametros.correlativo
                        }
                    ];
                    let respuesta = yield conexionSql.Ejecutar('sp_cargarRetencionGenerada');
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
    /* cargar retención generada */
    verRetencionesGeneradas(parametros) {
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
                    let respuesta = yield conexionSql.Ejecutar('sp_verRetencionesGeneradas');
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
exports.default = retenciones;
