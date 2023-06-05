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
const InforController_1 = __importDefault(require("../../controllers/Administraci\u00F3n/InforController"));
const app = (0, express_1.Router)();
/* Ver Mascaras */
app.get('/mascaras', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.verMascaras(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Ver Propietarios */
app.get('/propietarios', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.verPropietarios(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Propietario */
app.put('/Propietario', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.insertarPropietario(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Mascara */
app.put('/Mascara', (req, res) => {
    let admin = new InforController_1.default();
    let params = req.body;
    admin.insertarMascara(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
