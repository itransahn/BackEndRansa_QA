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
const Extintores_1 = __importDefault(require("../../controllers/SSMOA/Extintores"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* Ver Extintores */
app.get('/extintor', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    //  console.log(params)
    per.verExtintores(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Extintor */
app.post('/extintor', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.body;
    per.crearExtintores(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Extintor */
app.put('/extintor', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.body;
    per.actualizarExtintores(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Auditoria Extintor */
app.put('/Audextintores', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.body;
    per.crearAuditoria(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Auditoria Extintor */
app.get('/extintoresAud', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    per.cargarExtintoresAuditoria(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Auditoria Extintor */
app.get('/auditoriasGeneradas', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    per.auditoriasExtintores(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Auditoria Extintor */
app.put('/Incidencia', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.body;
    per.Incidencia(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Validar auditoria */
app.get('/Auditoria', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    per.validarAuditoria(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Incidencia Extintor */
app.get('/IncidenciaG', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    per.incidenciasG(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Auditoria Extintor */
app.get('/AuditoriaE', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    per.cargarAuditoria(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Auditoria Extintor */
app.put('/CorreccionE', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.body;
    per.correccionExtintor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Incidencia Extintor */
app.get('/correccionesG', (req, res) => {
    let per = new Extintores_1.default();
    let params = req.query;
    per.correccionesG(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
