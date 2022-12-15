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
const permisosController_1 = __importDefault(require("../../controllers/Transporte/permisosController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* ver roles asignados a transporte */
app.get('/permisosT', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.rolesSupervisor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* insertar roles sobre supervisor Transporte */
app.post('/insertRolesT', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.InsertarRolSupervisor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar roles a supervisor */
app.delete('/rolesSupervisor', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.eliminarRolSupervisor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre cliente - transporte  */
app.put('/clienteTransporte', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.relacionTranClien(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre cliente - transporte ELIMINAR */
app.delete('/clienteTransporte', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.EliminarrelacionTranClien(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre proveedor - transporte */
app.put('/proveedorTransporte', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.relacionTranProvee(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre proveedor - transporte ELIMINAR */
app.delete('/proveedorTransporte', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.EliminarRelacionRolProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre proveedor - transporte ELIMINAR */
app.delete('/proveedorTransporte', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.relacionTranProvee(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Relación entre rol - cliente */
app.put('/rolCliente', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.relacionRolCliente(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre rol - cliente ELIMINAR*/
app.delete('/rolCliente', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.EliminarRelacionRolCliente(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre rol - proveedor */
app.put('/rolProveedor', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.relacionRolProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre rol - proveedor ELIMINAR*/
app.delete('/rolProveedor', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.EliminarRelacionRolProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación entre rol - proveedor ELIMINAR*/
app.post('/cambiarEstado', (req, res) => {
    let mot = new permisosController_1.default();
    let params = req.body;
    mot.cambiarEstadoTablas(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
