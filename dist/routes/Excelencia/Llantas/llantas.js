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
const llantasController_1 = __importDefault(require("../../../controllers/Excelencia/Llantas/llantasController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
let llanta = new llantasController_1.default();
//CANTIDAD POR LOTES
app.post('/cantidadPorLotes', (req, res) => {
    let params = req.body;
    llanta.cantidadesLotes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Maquinas Tipo
app.get('/maquinasTipo', (req, res) => {
    let params = req.body;
    llanta.maquinasTipo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Stock General
app.get('/stockGeneral', (req, res) => {
    let params = req.body;
    llanta.stockGeneral(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Stock Lotes
app.post('/stockLotes', (req, res) => {
    let params = req.body;
    llanta.stockLotes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Lotes por Tipo
app.post('/lotesportipo', (req, res) => {
    let params = req.body;
    llanta.lotesPorTipo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Cambio de llantas
app.get('/cambioLlantas', (req, res) => {
    let params = req.body;
    llanta.cambiosLlanta(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Movimiento de llantas
app.put('/movimientoLlantas', (req, res) => {
    let params = req.body;
    llanta.movimentoLlantas(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Validación maquina y llanta
app.get('/valMaquinaLlanta', (req, res) => {
    let params = req.body;
    llanta.valMaquinaLlanta(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Ajuste de Llantas
app.put('/ajusteLlantas', (req, res) => {
    let params = req.body;
    llanta.ajusteLlantas(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Entrada de Llantas
app.post('/entradaLlantas', (req, res) => {
    let params = req.body;
    llanta.entradaLlantas(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Salida de Llantas
app.put('/salidaLlantas', (req, res) => {
    let params = req.body;
    llanta.salidaLlantas(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Salida de Llantas
app.post('/tipoLlantas', (req, res) => {
    let params = req.body;
    llanta.tiposLlantaF(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Salida de Llantas
app.post('/lotesTipo', (req, res) => {
    let params = req.body;
    llanta.stockLoteTipo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
//Salida de Llantas
app.post('/insertAjuste', (req, res) => {
    let params = req.body;
    llanta.insAjustes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// ajustes Solicitados
app.put('/AjustesSolicitados', (req, res) => {
    let params = req.body;
    llanta.ajstesSolicitados(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Modificación de Ajustes
app.post('/updateAjustes', (req, res) => {
    let params = req.body;
    llanta.editarAjustes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Modificación de Ajustes
app.delete('/deleteAjustes', (req, res) => {
    let params = req.body;
    llanta.deleteAjustes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Ajustes para aprobar
app.get('/ajustesAprobar', (req, res) => {
    let params = req.body;
    llanta.ajustesAprobados(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Ajustes para aprobar
app.post('/aprobarAjuste', (req, res) => {
    let params = req.body;
    llanta.aprobarAjuste(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Anulación de ajustes
app.post('/anularAjuste', (req, res) => {
    let params = req.body;
    llanta.anularAjuste(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Anulación de ajustes
app.get('/ajustesRealizados', (req, res) => {
    let params = req.body;
    llanta.ajustesRealizados(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Anulación de ajustes
app.post('/updCambiosLlanta', (req, res) => {
    let params = req.body;
    llanta.updCambiosLlanta(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Anulación de ajustes
app.post('/bitUpdCambios', (req, res) => {
    let params = req.body;
    llanta.bitacoraUpdCambiosLlanta(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Eliminación de cambio de llanta
app.delete('/deleteCambio', (req, res) => {
    let params = req.body;
    llanta.deleteCambios(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Ver cambios registrados posterior al ingreso de registros
app.get('/cambiosRealizados', (req, res) => {
    let params = req.body;
    llanta.cambiosBitacora(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Ver cambios registrados posterior al ingreso de registros
app.post('/updLote', (req, res) => {
    let params = req.body;
    llanta.updLote(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send(respuesta);
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
// Ver cambios registrados posterior al ingreso de registros
app.get('/verCamLotes', (req, res) => {
    let params = req.body;
    llanta.ModificacionesLotes(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
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
