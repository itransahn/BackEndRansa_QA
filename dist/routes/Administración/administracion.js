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
const administracionController_1 = __importDefault(require("../../controllers/Administraci\u00F3n/administracionController"));
const Encriptacion_1 = require("../../classes/Encriptacion");
const app = (0, express_1.Router)();
/* Ver todos los usuarios */
app.get('/usuarios', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.sp_verUsuarios(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Usuario especifico */
app.post('/usuarioEspecifico', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.sp_verUsuarioEspecificado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Crear Usuario */
app.post('/crearUsuario', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    params.contraD = req.body.contrasena;
    params.contrasena = (0, Encriptacion_1.encriptar)(req.body.contrasena);
    admin.crearUsuario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Usuario */
app.put('/actualizarUsuario', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.actualizarUsuario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar ESTADO Usuario */
app.put('/actualizarEUsuario', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.actualizarEstadoUsuario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Contraseña Usuario Admin */
app.put('/contraUsuarioAdmin', (req, res) => {
    let admin = new administracionController_1.default();
    let params = {
        idUsuario: req.body.idUsuario,
        contraActual: req.body.contraNueva,
        contraNueva: (0, Encriptacion_1.encriptar)(req.body.contraNueva),
        contraNoEnc: req.body.contraNueva
    };
    console.log(params);
    admin.CambiocontraUsuarioA(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Cambio de contraseña por administrador */
app.put('/updateContraAdmin', (req, res) => {
    let admin = new administracionController_1.default();
    let params = {
        idUsuario: req.body.idUsuario,
        contra: req.body.contra
    };
    admin.UpdaContra(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Contraseña Usuario Administrador */
app.put('/contraUsuarioUs', (req, res) => {
    let admin = new administracionController_1.default();
    // let params = req.body;
    let params = {
        idUsuario: req.body.idUsuario,
        contraActual: req.body.contraActual,
        contraNueva: (0, Encriptacion_1.encriptar)(req.body.contraNueva),
    };
    admin.CambiocontraUsuarioA(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Contraseña Usuario Usuario*/
app.put('/contraUsuarioSis', (req, res) => {
    let admin = new administracionController_1.default();
    let params = {
        idUsuario: req.body.idUsuario,
        contraAnterior: req.body.contraAnterior,
        contraActual: req.body.contraActual,
        accion: 1
    };
    // console.log(params)
    admin.CambiocontraUsuarioU(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        return res.status(200).send(result);
        // if(!result.hasError){
        //     }else{
        //         return res.status(400).send(result)
        //     }
    }));
});
/* Catálogo */
app.get('/catalogo', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.catalogo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.post('/parametrosF', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.parametrosFactura(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.post('/UpdparametrosF', (req, res) => {
    let admin = new administracionController_1.default();
    let params = req.body;
    admin.UpdparametrosFactura(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
exports.default = app;
