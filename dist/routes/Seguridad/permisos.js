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
const permisosController_1 = __importDefault(require("../../controllers/Seguridad/permisosController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* Rutas Permisos Menu Hijo */
/* Ver permisos Menu */
app.get('/verPmenu', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.verPermisosHijo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar permisos Menu */
app.post('/insertarPmenu', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.insertarPermisosHijo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar permisos Menu */
app.put('/actualizaPmenu', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.actualizarPermisosHijo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar permisos Menu */
app.delete('/eliminarPmenu', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.eliminarPermisosMenu(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Quitar permisos Menu */
app.put('/bajaPmenu', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.quitarPermisosMenuHijo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Rutas Permisos Módulos */
/* Ver permisos Módulo */
app.get('/verPmodulo', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.verPermisosModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver permisos Módulo Especifico */
app.post('/verPmoduloEsp', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.verPermisosModuloEsp(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar permisos Módulo Especifico */
app.delete('/bajaPermisosModulo', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.eliminarPermisosModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar permisos Módulo */
app.post('/insertarPmodulo', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.insertarPermisosModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Quitar permisos Módulo */
app.post('/bajarPmodulo', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.quitarPermisosModulo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Permisos Hijos */
/* Ver permisos menú hijo especifico */
app.post('/verPmenuEsp', (req, res) => {
    let per = new permisosController_1.default();
    let params = req.body;
    per.verPermisosMenuEsp(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
