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
class seguridad {
    /* Controladores Modulos */
    /* Ver Modulos Información Corta */
    modulosCorto(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_vermodulosCorto`);
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
    /* Ver Modulos Información Detallada */
    modulosDetalle(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_vermodulosDetalle`);
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
    /* Insertar Modulos */
    insertarModulo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'modulo',
                            valor: parametros.modulo
                        },
                        {
                            parametro: 'icon',
                            valor: parametros.icon
                        },
                        {
                            parametro: 'imagen',
                            valor: parametros.imagen
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertModulo`);
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
    /* Actualizar Modulos */
    updateModulo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idModulo',
                            valor: parametros.idModulo
                        },
                        {
                            parametro: 'modulo',
                            valor: parametros.modulo
                        },
                        {
                            parametro: 'icon',
                            valor: parametros.icon
                        },
                        {
                            parametro: 'imagen',
                            valor: parametros.imagen
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateModulo`);
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
    /* Eliminar Modulo */
    eliminarModulo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idModulo',
                            valor: parametros.idModulo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_deleteModulo`);
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
    /* Controladores Modulos */
    /* Controladores Menu Padre */
    /* Ver Menús Padres */
    verMenusPadre(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMenusPadre`);
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
    /* Insertar Menús Padres */
    insertarMenusPadre(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'menuPadre',
                            valor: parametros.menuPadre
                        },
                        {
                            parametro: 'icon',
                            valor: parametros.icon
                        },
                        {
                            parametro: 'modulo',
                            valor: parametros.modulo
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertMenuPadre`);
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
    /* Actualizar Menús Padres */
    updateMenusPadre(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMenuPadre',
                            valor: parametros.idMenuPadre
                        },
                        {
                            parametro: 'menuPadre',
                            valor: parametros.menuPadre
                        },
                        {
                            parametro: 'icon',
                            valor: parametros.icon
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        },
                        {
                            parametro: 'idmodulo',
                            valor: parametros.idmodulo
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateMenuPadre`);
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
    /* Eliminar Menú Padre */
    eliminarMenuPadre(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMenuPadre',
                            valor: parametros.idMenuPadre
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_deleteMenuPadre`);
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
    /* Controladores Menu Padre */
    /* Controladores Menu Hijos */
    /* Ver Menús Hijos */
    verMenusHijos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMenusHijos`);
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
    /* Ver Menús Hijos Especificos por Padre */
    verMenusHijosEsp(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMenuPadre',
                            valor: parametros.idMenuPadre
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMenusHijosEsp`);
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
    /* Insertar Menús Hijos */
    insertarMenusHijos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'menu',
                            valor: parametros.menu
                        },
                        {
                            parametro: 'icon',
                            valor: parametros.icon
                        },
                        {
                            parametro: 'urlM',
                            valor: parametros.urlM
                        },
                        {
                            parametro: 'menuPadre',
                            valor: parametros.menuPadre
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insertMenuHijo`);
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
    /* Actualizar Menús Hijos */
    updateMenusHijos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMenuHijo',
                            valor: parametros.idMenuHijo
                        },
                        {
                            parametro: 'menu',
                            valor: parametros.menu
                        },
                        {
                            parametro: 'icon',
                            valor: parametros.icon
                        },
                        {
                            parametro: 'urlM',
                            valor: parametros.urlM
                        },
                        {
                            parametro: 'menuPadre',
                            valor: parametros.menuPadre
                        },
                        {
                            parametro: 'estado',
                            valor: parametros.estado
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateMenuHijo`);
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
    eliminarMenuHijo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idMenuHijo',
                            valor: parametros.idMenuHijo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_deleteMenuHijo`);
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
    validarRol(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                        {
                            parametro: 'rol',
                            valor: parametros.rol
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_validacionRol`);
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
exports.default = seguridad;
