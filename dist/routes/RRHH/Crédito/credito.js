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
const creditoController_1 = __importDefault(require("../../../controllers/RRHH/Cr\u00E9dito/creditoController"));
const app = (0, express_1.Router)();
/* CARGAR Creditos actuales */
app.get('/credito', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.Credito(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* CARGAR Creditos actuales SPS*/
app.get('/creditoSps', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.CreditoSps(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* CARGAR Creditos por X empleado */
app.post('/creditoacumulado', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.creditoAcumulado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* CARGAR Creditos por X empleado */
app.post('/creditoporEmpleado', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.creditoEmpleado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* CARGAR Creditos Acumulado por empleado */
app.post('/creditoAgrupadoEmp', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.creditoAgrupadoEmp(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* CARGAR Creditos Acumulado por empleado */
app.get('/creditoporFecha', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.creditoPorFecha(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Crédito */
app.post('/insertarCredito', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.insertarCredito(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Créditos */
app.get('/creditos', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.verCreditosG(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Créditos */
app.put('/creditos', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.verCreditosP(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Créditos */
app.post('/Ucreditos', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.updateCredito(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Créditos */
app.delete('/Dcreditos', (req, res) => {
    let credit = new creditoController_1.default();
    let params = req.body;
    credit.eliminarCredito(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
