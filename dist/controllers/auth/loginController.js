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
const authController_1 = require("./authController");
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
const classes_1 = require("../../classes/classes");
const Encriptacion_1 = require("../../classes/Encriptacion");
class login {
    constructor() {
        this.menusOficiales = [];
    }
    login(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'password',
                            valor: parametros.password
                        }
                    ];
                }
                let respuestaLogin = yield conexionSql.Ejecutar(`dbo.sp_login`);
                if (respuestaLogin.data.Table0[0].contrasena) {
                    let passwordCheck = (0, Encriptacion_1.desencriptar)(parametros['password'], respuestaLogin.data.Table0[0].contrasena);
                    if (passwordCheck) {
                        let informacion = respuestaLogin.data;
                        let token = (0, authController_1.generarToken)(respuestaLogin.data.Table0);
                        // let menus = await this.descomponerRespuesta( respuestaLogin.data.Table1, respuestaLogin.data.Table2, respuestaLogin.data.Table3 )
                        // this.armadoCompletoMenus(this.menusOficiales, respuestaLogin.data.Table3 )
                        this.menusOficiales = respuestaLogin.data.Table1;
                        return {
                            data: {
                                token,
                                dataUsuario: {
                                    id_usuario: respuestaLogin.data.Table0[0].id_usuario,
                                    id_departamentoFisico: respuestaLogin.data.Table0[0].id_departamentoFisico,
                                    id_sexo: respuestaLogin.data.Table0[0].id_sexo,
                                    id_usuarioRansa: respuestaLogin.data.Table0[0].id_usuarioRansa,
                                    correo: respuestaLogin.data.Table0[0].correo,
                                    nombreCompleto: respuestaLogin.data.Table0[0].nombreCompleto,
                                    telefono: respuestaLogin.data.Table0[0].telefono,
                                    puestoRansa: respuestaLogin.data.Table0[0].puestoRansa,
                                    id_area: respuestaLogin.data.Table0[0].id_area,
                                    id_rol: respuestaLogin.data.Table0[0].id_rol,
                                    imgPerfil: respuestaLogin.data.Table0[0].url_imagen
                                },
                                modulosPermitidos: this.menusOficiales
                            },
                            errors: respuestaLogin.errors,
                            hasError: false
                        };
                    }
                    else {
                        return {
                            data: {
                                token: '',
                                dataUsuario: [],
                                modulosPermitidos: []
                            },
                            errors: 'Usuario y/o contraseña incorrecta',
                            hasError: true
                        };
                    }
                }
                else {
                    return {
                        data: {
                            token: '',
                            dataUsuario: [],
                            modulosPermitidos: []
                        },
                        errors: 'Usuario y/o contraseña incorrecta',
                        hasError: true
                    };
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
}
exports.default = login;
[];
