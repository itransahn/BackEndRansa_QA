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
//importar clase 
const correo_1 = __importDefault(require("../controllers/correo"));
// import EnviarEmail from '../correo/correo';
const app = (0, express_1.Router)();
app.get('/', (req, res) => {
    const ejemploController = new correo_1.default();
    ejemploController.resultadoConsulta().then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        return res.status(200).send(result);
    }));
});
app.get('/correo', (req, res) => {
    const ejemploController = new correo_1.default();
    ejemploController.primeraVez().then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield respuesta;
        console.log(result);
        return res.status(200).send(result);
    }));
});
// app.post('/CprimeraVez', (req: Request, res: Response) => {
//     let params = 
//     {
//         usuario : req.body.nombre,
//         correo  : req.body.correo
//     };
//     const ejemploController: EjemploController = new EjemploController();
//     ejemploController.primeraVez(params).then(async (respuesta: any) => {
//         const result: any = await respuesta;
//         return res.status(200).send(result);
//     });
// });
exports.default = app;
