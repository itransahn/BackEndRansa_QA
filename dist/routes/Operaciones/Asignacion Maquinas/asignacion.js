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
const asignacionController_1 = __importDefault(require("../../../controllers/Operaciones/Asignacion Maquinas/asignacionController"));
const app = (0, express_1.Router)();
/* Ver Maquinas en uso */
app.get('/maquinasEnuso', (req, res) => {
    let maquina = new asignacionController_1.default();
    let params = req.body;
    maquina.verMaquinasEnUso(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Asignar Maquina */
app.post('/asignarMaquina', (req, res) => {
    let maquina = new asignacionController_1.default();
    let params = req.body;
    maquina.asignarMaquina(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Asignacion de Maquinas*/
app.post('/actualizarAsignacionMaq', (req, res) => {
    let maquina = new asignacionController_1.default();
    let params = req.body;
    maquina.actalizarAsignacion(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Actualizar Asignacion de Maquinas*/
app.put('/historialAsignaciones', (req, res) => {
    let maquina = new asignacionController_1.default();
    let params = req.body;
    maquina.historialAsignaciones(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
