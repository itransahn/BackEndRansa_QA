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
const pasesController_1 = __importDefault(require("../../../controllers/Transporte/pasesSalida/pasesController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* Ver Pases de Salida */
app.get('/pasesSalida', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.PasesSalida(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Catalogo */
app.post('/CatpasesSalida', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.catalogoEspecifico(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Pases de Salida */
app.put('/paseSalida', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.CrearPaseSalida(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Aprobar Pases de Salida */
app.put('/AprobarpaseSalida', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.AprobarPaseSalida(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Aprobar Pases de Salida */
app.delete('/EliminarpaseSalida', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.AprobarPaseSalida(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Pases de Salida Historico*/
app.get('/paseSalidaH', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.PasesSalidaHistorico(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Pases de Salida Estandar*/
app.get('/paseSalidaE', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.cargarPasesSalidaEstandar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Pases de Salida Estandar*/
app.put('/paseSalidaE', (req, res) => {
    let ps = new pasesController_1.default();
    let params = req.body;
    ps.insertarPasesSalidaEstandar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
