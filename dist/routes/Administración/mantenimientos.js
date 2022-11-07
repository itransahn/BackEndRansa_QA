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
const mantenimientosController_1 = __importDefault(require("../../controllers/Administraci\u00F3n/mantenimientosController"));
const app = (0, express_1.Router)();
/* CENTROS DE COSTO */
/* Ver  CCO */
app.get('/cco', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.cco(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar  CCO */
app.post('/cco', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.nuevoCco(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar CCO */
app.put('/cco', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.actualizarCco(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar CCO */
app.delete('/cco', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.eliminarCco(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* CENTROS DE COSTO */
/* AREAS DE RANSA */
/* Ver  AREAS */
app.get('/area', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.area(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar  AREAS */
app.post('/area', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.nuevoArea(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar AREAS */
app.put('/area', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.actualizarArea(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar AREAS */
app.delete('/area', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.eliminarArea(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* AREAS DE RANSA */
/* SEDES */
/* Ver  Sede */
app.get('/sede', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.sede(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Sede */
app.post('/sede', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.nuevaSede(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar AREAS */
app.put('/sede', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.actualizarSede(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar AREAS */
app.delete('/sede', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.eliminarSede(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* SEDES */
/* SANGRE */
/* Ver  sangre */
app.get('/sangre', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.tipoSangre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar sangre */
app.post('/sangre', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.nuevoTipoSangre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar sangre */
app.put('/sangre', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.actualizarTipoSangre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar sangre */
app.delete('/sangre', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.eliminarTipoSangre(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* SANGRE */
/* PUESTO */
/* Ver  sangre */
app.get('/puesto', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.VerPuestos(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar sangre */
app.post('/puesto', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.InsertarPuesto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar sangre */
app.put('/puesto', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.ActualizarPuesto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar sangre */
app.delete('/puesto', (req, res) => {
    let admin = new mantenimientosController_1.default();
    let params = req.body;
    admin.eliminarPuesto(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* PUESTO */
exports.default = app;
