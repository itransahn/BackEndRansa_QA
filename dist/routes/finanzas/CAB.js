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
const CAB_1 = __importDefault(require("../../controllers/finanzas/CAB"));
const app = (0, express_1.Router)();
/* Ver Empleados CAB */
app.get('/empleadoCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.query;
    cab.empleadosCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Empleado CAB */
app.post('/empleadoCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.CrearempleadoCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Empleado CAB */
app.put('/empleadoCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.ActualizarempleadoCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Estado Empleado CAB */
app.put('/empleadoCabEst', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.estadoEmpleadoCab(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Aprobar  Viaje CAB */
app.get('/AprobarviajeCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.query;
    cab.AprobarViaje(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Aprobadores CAB */
app.get('/aprobadorCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.VerAprobadorCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Aprobador CAB */
app.post('/aprobadorCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.CrearAprobadorCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Aprobar Viaje */
app.post('/aprobacion', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.AprobacionViaje(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Aprobador CAB */
app.put('/aprobadorCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.ActualizarAprobadorCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Tarifas CAB */
app.get('/tarifasCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.query;
    cab.CargarTarifa(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Tarifas CAB */
app.post('/tarifasCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.CargarTarifaMasivoCAB(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Viaje CAB */
app.get('/viajeCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.query;
    cab.VerViajeCab(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* viaje Especifico */
app.get('/viajeEspecifico', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.query;
    cab.viajeEspecifico(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Viaje CAB */
app.get('/viajeCab2', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.query;
    cab.VerViajeCab2(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Viaje CAB */
app.post('/viajeCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.CrearViajeCab(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Viaje CAB */
app.post('/cancelarViaje', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.cancelacionViaje(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Incidencia Viaje CAB */
app.post('/incidenciaViajeCab', (req, res) => {
    let cab = new CAB_1.default();
    let params = req.body;
    cab.IncidenciaViajeCab(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
