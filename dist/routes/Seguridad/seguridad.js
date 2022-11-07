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
const seguridadController_1 = __importDefault(require("../../controllers/Seguridad/seguridadController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* Rutas Módulos */
/* Ver Módulos Corto */
app.get('/verModulosC', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.modulosCorto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Módulos Detalle */
app.get('/verModulosD', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.modulosDetalle(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Módulos */
app.post('/insertarModulo', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.insertarModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Módulos */
app.put('/actualizarModulo', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.updateModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar Módulos */
app.delete('/eliminarModulo', (req, res) => {
    let mod = new seguridadController_1.default();
    let params = req.body;
    mod.eliminarModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Rutas Módulos */
/* Rutas Menu Padre */
/* ver Menus Padre */
app.get('/verMenusPadre', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.verMenusPadre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Menus Padre */
app.post('/insertarMenuPadre', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.insertarMenusPadre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Menus Padre */
app.put('/updateMenuPadre', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.updateMenusPadre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar Menú Padre */
app.delete('/eliminarMenu', (req, res) => {
    let mod = new seguridadController_1.default();
    let params = req.body;
    mod.eliminarMenuPadre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Rutas Menu Padre */
/* Rutas Menu Hijo */
/* Ver Menús Hijos */
app.get('/verMenusHijo', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.verMenusHijos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Menús Hijos Especifico */
app.post('/verHijos', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.verMenusHijosEsp(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Menús Hijos */
app.post('/insertarMenuHijo', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.insertarMenusHijos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* actualizar Menús Hijos */
app.post('/actualizarMenusHijos', (req, res) => {
    let ser = new seguridadController_1.default();
    let params = req.body;
    ser.updateMenusHijos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar Menú Hijo */
app.post('/validarRol', (req, res) => {
    let mod = new seguridadController_1.default();
    let params = req.body;
    mod.validarRol(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Rutas Menu Hijo */
exports.default = app;
