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
const dolarController_1 = __importDefault(require("../../../controllers/RRHH/Dolar/dolarController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* CARGAR Dolar Agrupado */
app.post('/dolarAcumulado', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.dolarAgrupado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Detalle Dolar */
app.post('/dolarDetalle', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.dolarDetalle(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Dolar Diario */
app.get('/dolarDiario', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.dolarDiario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Dolar Agrupado Emp */
app.post('/dolarAgrupadoEmp', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.dolarAgrupadoEmp(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Cajeo Dolar TR */
app.get('/canjeoDolar', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.canjeoDolar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* usuarios Permitidos Cafeteria */
app.get('/usuariosPermitidosC', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.usuariosPermitidosC(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar usuario Permitidos Cafeteria */
app.post('/insertarPermisos', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.insertarPermisoDolar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Permitidos Cafeteria */
app.post('/actualizarPermisos', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.actualizarPermisoDolar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Dolar */
app.post('/insertarDolar', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.insertarDolar(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Cargar Usuario */
app.post('/validarUsuario', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.cargarUsuario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Cambiar Estado de usuario permisos cafeteria */
app.put('/estadoPcaf', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.estadoUsuarioPermiso(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Mantenimiento de canjeos de dolar  */
/* Ver canjeos de día actual  */
app.put('/controlCafeteria', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.verCanejosG(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver canjeos de día seleccionado  */
app.put('/controlCafeteria', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.verCanejosP(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar el control de canjeo en la cafeteria */
app.post('/UpdcontrolCafeteria', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.UpdateCanjeo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar el control de canjeo en la cafeteria */
app.delete('/DelcontrolCafeteria', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.DeleteCanjeo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Dolares por CCO */
app.post('/dolarCCO', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.dolarCCO(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Dolares por Empleado */
app.post('/dolarEmpleado', (req, res) => {
    let dol = new dolarController_1.default();
    let params = req.body;
    dol.dolarEmpleado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
