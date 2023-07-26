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
const Encriptacion_1 = require("../../classes/Encriptacion");
const correo_1 = __importDefault(require("../../correo/correo"));
class administracion {
    /* VER USUARIOS */
    sp_verUsuarios(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verUsuarios`);
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
    /* VER USUARIO ESPECIFICO */
    sp_verUsuarioEspecificado(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verUsuarioEspecifico`);
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
    /* CREAR USUARIO */
    crearUsuario(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        /* TABLA DE PERSONAS  */
                        {
                            parametro: 'nombreCompleto',
                            valor: parametros.nombreCompleto
                        },
                        {
                            parametro: 'telefono',
                            valor: parametros.telefono
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'nacimiento',
                            valor: parametros.nacimiento
                        },
                        {
                            parametro: 'identidad',
                            valor: parametros.identidad
                        },
                        {
                            parametro: 'correo',
                            valor: parametros.correo
                        },
                        {
                            parametro: 'tipoIdentificacion',
                            valor: parametros.tipoIdentificacion
                        },
                        {
                            parametro: 'id_sexo',
                            valor: parametros.id_sexo
                        },
                        {
                            parametro: 'idCiudad',
                            valor: parametros.idCiudad
                        },
                        {
                            parametro: 'tipoSangre',
                            valor: parametros.tipoSangre
                        },
                        /* TABLA DE PERSONAS  */
                        /* TABLA DE USUARIOS  */
                        {
                            parametro: 'usuarioRansa',
                            valor: parametros.usuarioRansa
                        },
                        {
                            parametro: 'fechaIngreso',
                            valor: parametros.fechaIngreso
                        },
                        {
                            parametro: 'contrasena',
                            valor: parametros.contrasena
                        },
                        {
                            parametro: 'DepartamentoFisico',
                            valor: parametros.DepartamentoFisico
                        },
                        {
                            parametro: 'idPuesto',
                            valor: parametros.idPuesto
                        },
                        {
                            parametro: 'url_imagen',
                            valor: parametros.url_imagen
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'id_rol',
                            valor: parametros.id_rol
                        },
                        {
                            parametro: 'id_sede',
                            valor: parametros.id_sede
                        },
                        {
                            parametro: 'contraUsuario',
                            valor: parametros.contraUsuario
                        }
                        /* TABLA DE USUARIOS  */
                    ];
                }
                // console.log(parametros)
                let respuesta = yield conexionSql.Ejecutar(`sp_insUsuario`);
                if (!respuesta.hasError && respuesta.data.Table0[0]['codigo'] != -1) {
                    //enviar correo;
                    // let enviarCorreo = new EnviarEmail();
                    // enviarCorreo.enviarCorreo( 1, {
                    //   nombre  : parametros.nombreCompleto,
                    //   correo  : parametros.correo,
                    //   idUsuario : respuesta.data.Table0[0]['usuario'],
                    //   usuario : parametros.usuario,
                    //   contra  : parametros.contraD
                    // }).then(   )
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
    /* ACTUALIZAR USUARIO */
    actualizarUsuario(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            //  console.log(parametros)
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        /* TABLA DE PERSONAS  */
                        {
                            parametro: 'nombreCompleto',
                            valor: parametros.nombreCompleto
                        },
                        {
                            parametro: 'telefono',
                            valor: parametros.telefono
                        },
                        {
                            parametro: 'direccion',
                            valor: parametros.direccion
                        },
                        {
                            parametro: 'nacimiento',
                            valor: parametros.nacimiento
                        },
                        {
                            parametro: 'identidad',
                            valor: parametros.identidad
                        },
                        {
                            parametro: 'correo',
                            valor: parametros.correo
                        },
                        {
                            parametro: 'tipoIdentificacion',
                            valor: parametros.tipoIdentificacion
                        },
                        {
                            parametro: 'id_sexo',
                            valor: parametros.id_sexo
                        },
                        {
                            parametro: 'idCiudad',
                            valor: parametros.idCiudad
                        },
                        {
                            parametro: 'tipoSangre',
                            valor: parametros.tipoSangre
                        },
                        /* TABLA DE PERSONAS  */
                        /* TABLA DE USUARIOS  */
                        {
                            parametro: 'fechaIngreso',
                            valor: parametros.fechaIngreso
                        },
                        {
                            parametro: 'DepartamentoFisico',
                            valor: parametros.DepartamentoFisico
                        },
                        {
                            parametro: 'idPuesto',
                            valor: parametros.idPuesto
                        },
                        {
                            parametro: 'cco',
                            valor: parametros.cco
                        },
                        {
                            parametro: 'id_rol',
                            valor: parametros.id_rol
                        },
                        {
                            parametro: 'id_sede',
                            valor: parametros.id_sede
                        },
                        {
                            parametro: 'idPersona',
                            valor: parametros.idPersona
                        },
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        }
                        /* TABLA DE USUARIOS  */
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateUsuario`);
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
    /* ACTUALIZAR ESTADO DE USUARIO */
    actualizarEstadoUsuario(parametros) {
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
                            parametro: 'estado',
                            valor: parametros.estado
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateEstadoUsuario`);
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
    /* CAMBIO CONTRASEÑA DE USUARIO ADMINISTRADOR   */
    CambiocontraUsuarioU(parametros) {
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
                            parametro: 'contraAnterior',
                            valor: parametros.contraAnterior
                        },
                        {
                            parametro: 'contraActual',
                            valor: parametros.contraActual
                        },
                        {
                            parametro: 'accion',
                            valor: parametros.accion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cambioContrasena`);
                if (respuesta.data.Table0[0].contrasena) {
                    let passwordCheck = (0, Encriptacion_1.desencriptar)(parametros['contraAnterior'], respuesta.data.Table0[0].contrasena);
                    if (passwordCheck) {
                        return this.actualizacionContra({
                            idUsuario: parametros.idUsuario,
                            contraAnterior: parametros.contraAnterior,
                            contraActual: (0, Encriptacion_1.encriptar)(parametros.contraActual),
                            accion: 2
                        });
                    }
                    else {
                        return {
                            data: {
                                Table0: [
                                    {
                                        codigo: -1,
                                        Mensaje: 'Contraseña ingresada es incorrecta'
                                    }
                                ]
                            },
                            errors: [],
                            hasError: true
                        };
                    }
                }
                else {
                    return {
                        data: {},
                        errors: [],
                        hasError: true
                    };
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* CAMBIO CONTRASEÑA DE USUARIO POR USUARIO */
    CambiocontraUsuarioA(parametros) {
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
                            parametro: 'contraActual',
                            valor: parametros.contraActual
                        },
                        {
                            parametro: 'contraNueva',
                            valor: parametros.contraNueva
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cambioContraUsuario`);
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
    /* CAMBIO CONTRASEÑA DE USUARIO POR USUARIO */
    UpdaContra(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                //  console.log( parametros)
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                        {
                            parametro: 'contra',
                            valor: parametros.contra
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateContraAdmin`);
                if (!respuesta.hasError && respuesta.data.Table0[0]['codigo'] != -1) {
                    //  console.log( parametros)
                    //enviar correo;
                    let enviarCorreo = new correo_1.default();
                    // enviarCorreo.enviarCorreo( 2, {
                    //   nombre  : respuesta.data.Table0[0]['nombre'],
                    //   correo  : respuesta.data.Table0[0]['correo'],
                    //   idUsuario : respuesta.data.Table0[0]['usuario'],
                    //   contra    : parametros.contra
                    // }).then(   )
                    //           return { 
                    //             data :      respuesta.data,
                    //             errors :    respuesta.errors,
                    //             hasError :  respuesta.hasError
                    //             }
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
    /* CATALOGO */
    catalogo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_catalogo`);
                if (!respuesta.hasError) {
                    return {
                        modulos: respuesta.data.Table0,
                        menuPadres: respuesta.data.Table1,
                        menuHijos: respuesta.data.Table2,
                        roles: respuesta.data.Table3,
                        sexos: respuesta.data.Table4,
                        sedes: respuesta.data.Table5,
                        tipoSangres: respuesta.data.Table6,
                        tipoIdentificacion: respuesta.data.Table7,
                        tipoLlanta: respuesta.data.Table8,
                        estados: respuesta.data.Table9,
                        ccos: respuesta.data.Table10,
                        depFisicos: respuesta.data.Table11,
                        areasRansa: respuesta.data.Table12,
                        estadoUsuario: respuesta.data.Table13,
                        puesto: respuesta.data.Table14,
                        proveedorLlanta: respuesta.data.Table15,
                        departamentos: respuesta.data.Table16,
                        ciudades: respuesta.data.Table17,
                        ladoCambiar: respuesta.data.Table18,
                        tipoMaquinas: respuesta.data.Table19,
                        tipoLlantaMaquina: respuesta.data.Table20,
                        Maquinas: respuesta.data.Table21,
                        usuarios: respuesta.data.Table22,
                        proveFleje: respuesta.data.Table23,
                        ColumFleje: respuesta.data.Table24,
                        PropietarioInfor: respuesta.data.Table25,
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
    actualizacionContra(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros)
                    conexionSql.parametros = [
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                        {
                            parametro: 'contraAnterior',
                            valor: parametros.contraAnterior
                        },
                        {
                            parametro: 'contraActual',
                            valor: parametros.contraActual
                        },
                        {
                            parametro: 'accion',
                            valor: parametros.accion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cambioContrasena`);
                // if ( !respuesta.hasError ){
                // }else{
                //   return respuesta;
                // }
                return {
                    data: respuesta.data,
                    errors: respuesta.errors,
                    hasError: respuesta.hasError
                };
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    parametrosFactura(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros)
                    conexionSql.parametros = [
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'tipo',
                            valor: parametros.tipo
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verParametrosF`);
                return {
                    data: respuesta.data,
                    errors: respuesta.errors,
                    hasError: respuesta.hasError
                };
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    UpdparametrosFactura(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros)
                    conexionSql.parametros = [
                        {
                            parametro: 'sede',
                            valor: parametros.sede
                        },
                        {
                            parametro: 'nombre',
                            valor: parametros.nombre
                        },
                        {
                            parametro: 'direccion1',
                            valor: parametros.direccion1
                        },
                        {
                            parametro: 'direccion2',
                            valor: parametros.direccion2
                        },
                        {
                            parametro: 'municipio',
                            valor: parametros.municipio
                        },
                        {
                            parametro: 'departamento',
                            valor: parametros.departamento
                        },
                        {
                            parametro: 'telFijos',
                            valor: parametros.telFijos
                        },
                        {
                            parametro: 'telCelulares',
                            valor: parametros.telCelulares
                        },
                        {
                            parametro: 'rtnE',
                            valor: parametros.rtnE
                        },
                        {
                            parametro: 'correo',
                            valor: parametros.correo
                        },
                        {
                            parametro: 'lema',
                            valor: parametros.lema
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_updateParametros`);
                return {
                    data: respuesta.data,
                    errors: respuesta.errors,
                    hasError: respuesta.hasError
                };
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
}
exports.default = administracion;
