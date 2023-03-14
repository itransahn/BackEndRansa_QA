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
class recibos {
    /* Insertar Recibo */
    InsRecibo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoRecibo',
                            valor: parametros.tipoRecibo
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'reciboC',
                            valor: parametros.reciboC
                        },
                        {
                            parametro: 'fechaR',
                            valor: parametros.fechaR
                        },
                        {
                            parametro: 'proveedorC',
                            valor: parametros.proveedorC
                        },
                        {
                            parametro: 'tipoCombustible',
                            valor: parametros.tipoCombustible
                        },
                        {
                            parametro: 'servidoA',
                            valor: parametros.servidoA
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'valorRecibo',
                            valor: parametros.valorRecibo
                        },
                        {
                            parametro: 'observaciones',
                            valor: parametros.observaciones
                        },
                        {
                            parametro: 'usuarioCreador',
                            valor: parametros.usuarioCreador
                        },
                        {
                            parametro: 'cliente',
                            valor: parametros.cliente
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_crearRecibo');
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
    /* Actualizar Recibo */
    UpdRecibo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRecibo',
                            valor: parametros.idRecibo
                        },
                        {
                            parametro: 'idSede',
                            valor: parametros.idSede
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'fechaR',
                            valor: parametros.fechaR
                        },
                        {
                            parametro: 'proveedorC',
                            valor: parametros.proveedorC
                        },
                        {
                            parametro: 'tipoCombustible',
                            valor: parametros.tipoCombustible
                        },
                        {
                            parametro: 'servidoA',
                            valor: parametros.servidoA
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'valorR',
                            valor: parametros.valorR
                        },
                        {
                            parametro: 'obs',
                            valor: parametros.obs
                        },
                        {
                            parametro: 'usuarioM',
                            valor: parametros.usuarioM
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_updateRecibo');
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
    /* Cerrar Recibo */
    CerrarRecibo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRecibo',
                            valor: parametros.idRecibo
                        },
                        {
                            parametro: 'Nfactura',
                            valor: parametros.Nfactura
                        },
                        {
                            parametro: 'fechaFactura',
                            valor: parametros.fechaFactura
                        },
                        {
                            parametro: 'valorFactura',
                            valor: parametros.valorFactura
                        },
                        {
                            parametro: 'usuarioM',
                            valor: parametros.usuarioM
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_cerrarRecibo');
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
    /* Ver recibos no cerrados  */
    sp_verRecibos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verRecibos');
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
    /* Ver recibos por Fecha  */
    sp_verRecibosfecha(parametros) {
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
                let respuesta = yield conexionSql.Ejecutar('sp_verRecibosfecha');
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
    /* Ver recibos por Fecha  */
    catalogoRecibos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_catalogoRecibos');
                if (!respuesta.hasError) {
                    return {
                        clientes: respuesta.data.Table0,
                        transportes: respuesta.data.Table1,
                        personas: respuesta.data.Table2,
                        placasPersonas: respuesta.data.Table3,
                        camiones: respuesta.data.Table4,
                        proveedoresC: respuesta.data.Table5,
                        tiposC: respuesta.data.Table6,
                        ccoT: respuesta.data.Table7,
                        ccoE: respuesta.data.Table8,
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
    /* Cerrar Recibo */
    anularRecibo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRecibo',
                            valor: parametros.idRecibo
                        },
                        {
                            parametro: 'recibo',
                            valor: parametros.recibo
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_anularRecibo');
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
    /* Recibos Cerrados  */
    reciboCerrados(parametros) {
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
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_recFacPro');
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
    /* Recibos Cerrados  */
    reciboAcerrar(parametros) {
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
                let respuesta = yield conexionSql.Ejecutar('sp_recFacProFact');
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
    /* Cancelar Recibo  */
    cancelarRecibo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRecibo',
                            valor: parametros.idRecibo
                        },
                        {
                            parametro: 'cancelado',
                            valor: parametros.cancelado
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_cancelarRecibos');
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
    /* deducciones */
    deducciones(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'transportista',
                            valor: parametros.transportista
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'fecha',
                            valor: parametros.fecha
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verRecibosTransporte');
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
    /* Ver placas empleados */
    placasEmpleado(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_placasEmpleado');
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
    /* Crear placas empleados */
    CrearplacasEmpleado(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertPlacaEmpleado');
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
    /* Actualizar placas empleados */
    ActualizarplacasEmpleado(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRegistro',
                            valor: parametros.idRegistro
                        },
                        {
                            parametro: 'placa',
                            valor: parametros.placa
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_updatePlacaEmpleado');
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
    /* Cambiar estado de recibo */
    cambiarEstadoRecibo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRecibo',
                            valor: parametros.idRecibo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_cambiarEstadoRecibo');
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
exports.default = recibos;
