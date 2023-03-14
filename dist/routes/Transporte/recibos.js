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
const recibosControllert_1 = __importDefault(require("../../controllers/Transporte/recibosControllert"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* Ver recibos no cerrados */
app.get('/recibos', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.sp_verRecibos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver recibos por fecha */
app.post('/recibos', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.sp_verRecibosfecha(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Recibos*/
app.put('/Insrecibos', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.InsRecibo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* actualizar Recibos*/
app.put('/Updrecibos', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.UpdRecibo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* actualizar Recibos*/
app.post('/anularRecibo', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.anularRecibo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* actualizar Recibos*/
app.put('/Cerrarrecibos', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.CerrarRecibo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Catálogo de recibos */
app.post('/catalogoRec', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.catalogoRecibos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Catálogo de recibos */
app.post('/recibosCerrados', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.reciboCerrados(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Catálogo de recibos */
app.post('/recibosaCerrar', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.reciboAcerrar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Cancelar recibo */
app.post('/cancelarRecibo', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.cancelarRecibo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Deducciones */
app.post('/deducciones', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.deducciones(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Placas Empelados */
app.get('/placaEmpleado', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.placasEmpleado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Placas Empelados */
app.put('/IplacaEmpleado', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.CrearplacasEmpleado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Placas Empelados */
app.put('/UplacaEmpleado', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.ActualizarplacasEmpleado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.put('/estadoRecibo', (req, res) => {
    let mot = new recibosControllert_1.default();
    let params = req.body;
    mot.cambiarEstadoRecibo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
