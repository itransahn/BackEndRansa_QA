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
const auth_1 = __importDefault(require("../../controllers/auth/auth"));
const loginController_1 = __importDefault(require("../../controllers/auth/loginController"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
app.get('/categorias', (req, res) => {
    let menus = new auth_1.default();
    menus.categorias().then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            return res.status(200).send();
        }
        else {
            return res.status(400).send(result);
        }
    }));
});
app.post('/login', (req, res) => {
    let params = req.body;
    let autenticacion = new loginController_1.default();
    autenticacion.login(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            req.body.usuario = result.data.dataUsuario;
            return res.status(200).send({
                result
            });
        }
        else {
            return res.status(200).send({ result });
        }
    }));
});
app.post('/validarMenu', (req, res) => {
    let params = req.body;
    let autenticacion = new auth_1.default();
    autenticacion.validarMenu(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        if (!result.hasError) {
            if (Number(result.data.Table0[0]['codigo']) === 1) {
                return res.status(200).send({ access: true });
            }
            else {
                return res.status(200).send({ access: false });
            }
        }
        else {
            return res.status(200).send({ result });
        }
    }));
});
exports.default = app;
