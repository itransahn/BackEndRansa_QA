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
const retenciones_1 = __importDefault(require("../../controllers/finanzas/retenciones"));
const app = (0, express_1.Router)();
/* Proveedor */
app.get('/proveedores', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.Proveedores(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Proveedor */
app.put('/Iproveedores', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.insertarProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Proveedor */
app.put('/Aproveedores', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.actualizarProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Proveedor */
app.put('/Eproveedores', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.actualizarEstadoProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Proveedor */
app.put('/retencion', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.insertarRetención(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Cargar Retención */
app.post('/Cargarretencion', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.cargarRetencion(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Guardar Retención  Generada */
app.post('/guardarRetencion', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.guardarRetancionG(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* cargar correlativo */
app.post('/cargarCorrelativo', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.cargarCorrelativo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Estado retencion */
app.post('/estadoRetencion', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.cambiarEstadoRetencion(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* retencion Generada */
app.post('/cargarRetencionG', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.cargarRetencionG(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* ver retenciones generadas  */
app.post('/retencionesGeneradasH', (req, res) => {
    let ret = new retenciones_1.default();
    let params = req.body;
    ret.verRetencionesGeneradas(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
