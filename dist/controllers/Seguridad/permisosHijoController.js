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
class permisosH {
    /* Controladores Permisos Menu Hijo */
    /* Insertar Permisos Menú Hijo */
    insertarPermisosHijo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRol',
                            valor: parametros.idRol
                        },
                        {
                            parametro: 'id_menuHijo',
                            valor: parametros.id_menuHijo
                        },
                        {
                            parametro: 'insertar',
                            valor: parametros.insertar
                        },
                        {
                            parametro: 'actualizar',
                            valor: parametros.actualizar
                        },
                        {
                            parametro: 'eliminar',
                            valor: parametros.eliminar
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insPermisosMenuHijo`);
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
    /* Insertar Permisos Menú Hijo */
    quitarPermisosMenuHijo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idRol',
                            valor: parametros.idRol
                        },
                        {
                            parametro: 'id_menuHijo',
                            valor: parametros.id_menuHijo
                        },
                        {
                            parametro: 'idPermiso',
                            valor: parametros.idPermiso
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updatePermisosMenuHijo`);
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
    /* Controladores Permisos Módulos */
    /* Insertar Permisos Módulos */
    insertarPermisosModulo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'rol',
                            valor: parametros.rol
                        },
                        {
                            parametro: 'modulo',
                            valor: parametros.modulo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_insPermisoMod`);
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
    /* Insertar Permisos Módulos */
    quitarPermisosModulo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'id_permisoMod',
                            valor: parametros.id_permisoMod
                        },
                        {
                            parametro: 'idRol',
                            valor: parametros.idRol
                        },
                        {
                            parametro: 'idModulo',
                            valor: parametros.idModulo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updatePermisoMod`);
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
exports.default = permisosH;
