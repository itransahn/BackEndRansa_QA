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
const mantenimientosTController_1 = __importDefault(require("../../controllers/Transporte/mantenimientosTController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
/* ver Clientes T */
app.post('/clientesT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.verClientesT(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* ver proveedores T */
app.post('/proveedoresT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.verProveedoresT(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* actualizar clientes T */
app.put('/AclienteT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.actualizarClientesTransportes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* actualizar Proveedor T */
app.put('/AproveedorT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.actualizarProveedoresTransportes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* catalogo transporte */
app.get('/catalogoT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.catalogoTransporte(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Catalogo detallado transporte */
app.get('/catalogoDetT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.catalogoTransporteDetallado(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Insertar Cliente transporte */
app.put('/insertClienteT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.insertarClientesTransportes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Catalogo detallado transporte */
app.put('/insertProveedorT', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.insertarProveedoresTransportes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Dimensiones transporte */
app.put('/insertDimensiones', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.insertarDimensiones(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Tipos de Unidad transporte */
app.put('/insertTiposUnidad', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.insertarTipoUnidad(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación transporte Cliente */
app.get('/transCliente', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.transCliente(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación transporte Proveedor */
app.get('/transProveedor', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.transProveedor(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación transporte Proveedor */
app.post('/relacionRoles', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.verRelacionesRoles(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Relación camión motorista */
app.put('/camionMotorista', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.CamionMotorista(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* Eliminar relación camión motorista */
app.delete('/camionMotorista', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.EliminarCamionMotorista(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
/* ver relación camión motorista */
app.get('/camionMotorista', (req, res) => {
    let cam = new mantenimientosTController_1.default();
    let params = req.body;
    cam.verUnionesMotCamion(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
