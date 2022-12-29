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
class mantenimientoT {
    /* Cambiar de estado a transporte */
    catalogoTransporte(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_CargarCatalogoTransporte');
                if (!respuesta.hasError) {
                    return {
                        transportes: respuesta.data.Table0,
                        camiones: respuesta.data.Table1,
                        motoristas: respuesta.data.Table2,
                        tunidad: respuesta.data.Table3,
                        clientes: respuesta.data.Table4,
                        proveedores: respuesta.data.Table5,
                        roles: respuesta.data.Table6,
                        marcas: respuesta.data.Table7,
                        modelos: respuesta.data.Table8,
                        toneladas: respuesta.data.Table9,
                        colores: respuesta.data.Table10,
                        metrajes: respuesta.data.Table11,
                        motivos: respuesta.data.Table12
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
    /* Insertar Tipos de Unidad */
    insertarTipoUnidad(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'unidad',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertTipoUni');
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
    /* Insertar Dimensiones */
    insertarDimensiones(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'alto',
                            valor: parametros.alto
                        },
                        {
                            parametro: 'ancho',
                            valor: parametros.ancho
                        },
                        {
                            parametro: 'largo',
                            valor: parametros.largo
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertDimensiones');
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
    /* Catalogo detallado de Transporte */
    catalogoTransporteDetallado(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_CargarCatalogoTransporteDetalle');
                if (!respuesta.hasError) {
                    return {
                        transportes: respuesta.data.Table0,
                        camiones: respuesta.data.Table1,
                        motoristas: respuesta.data.Table2,
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
    /* Insertar Clientes para transportes */
    insertarClientesTransportes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'nombreCliente',
                            valor: parametros.nombreCliente
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'rtnCliente',
                            valor: parametros.rtnCliente
                        },
                        {
                            parametro: 'nombreCorto',
                            valor: parametros.nombreCorto
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertClienteTrans');
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
    /* Actualizar Clientes para transportes */
    actualizarClientesTransportes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idCliente',
                            valor: parametros.idCliente
                        },
                        {
                            parametro: 'nombreCliente',
                            valor: parametros.nombreCliente
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'rtnCliente',
                            valor: parametros.rtnCliente
                        },
                        {
                            parametro: 'nombreCorto',
                            valor: parametros.nombreCorto
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_actualizarClienteTrans');
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
    /* Insertar Proveedores para transportes */
    insertarProveedoresTransportes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'nombreProveedor',
                            valor: parametros.nombreProveedor
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'rtnProveedor',
                            valor: parametros.rtnProveedor
                        },
                        {
                            parametro: 'nombreCorto',
                            valor: parametros.nombreCorto
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertProveedorTrans');
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
    /* Actualizar Proveedores para transportes */
    actualizarProveedoresTransportes(parametros) {
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
                            parametro: 'nombreProveedor',
                            valor: parametros.nombreProveedor
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'rtnProveedor',
                            valor: parametros.rtnProveedor
                        },
                        {
                            parametro: 'nombreCorto',
                            valor: parametros.nombreCorto
                        },
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_actualizarProveedorTrans');
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
    /* Ver Clientes Transporte*/
    verClientesT(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verClientesT');
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
    /* Ver Proveedores Transporte*/
    verProveedoresT(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verProveedoresT');
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
    /* Ver Relación Transporte - Clientes */
    transCliente(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verClienteTransporte');
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
    /* Ver Relación Transporte - Proveedores */
    transProveedor(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verProveedorTransporte');
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
    /* Ver Relación de roles  */
    verRelacionesRoles(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_CargarRelacionRoles');
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
    /* Insertar unión camion con motorista */
    CamionMotorista(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'motorista',
                            valor: parametros.motorista
                        },
                        {
                            parametro: 'camion',
                            valor: parametros.camion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_insertUnionMotCam');
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
    /* Eliminar Motorista Camion */
    EliminarCamionMotorista(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'motorista',
                            valor: parametros.motorista
                        },
                        {
                            parametro: 'camion',
                            valor: parametros.camion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_eliminarUnionMotCam');
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
    /* Ver Motorista Camion */
    verUnionesMotCamion(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar('sp_verUnionesMotCam');
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
exports.default = mantenimientoT;
