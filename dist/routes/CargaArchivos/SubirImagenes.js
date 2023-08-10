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
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const app = (0, express_1.Router)();
const cargarArchivos_1 = __importDefault(require("../../controllers/Ficheros/cargarArchivos"));
//const rutaCarga = '/src/public/ssmoa';
let incidencia;
let tipo;
/* Destino de Carga */
const storage = multer_1.default.diskStorage({
    filename: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype) {
            let codigo = (0, uuid_1.v4)();
            funcion('/uploads/' + codigo + path_1.default.extname(file.originalname));
            return cb(null, codigo + path_1.default.extname(file.originalname));
        }
        else {
            return cb(null, 'error');
        }
        ;
    },
    destination: './uploads',
});
const funcion = (nombre) => {
    if (nombre && incidencia) {
        let car = new cargarArchivos_1.default();
        let params = {
            idIncidencia: incidencia,
            fichero: nombre,
            tipo: tipo
        };
        car.cargarArchivo(params).then((respuesta) => __awaiter(void 0, void 0, void 0, function* () {
            const result = yield respuesta;
            if (!result.hasError) {
                return respuesta;
            }
            else {
                return respuesta;
            }
        }));
    }
};
const upload = (0, multer_1.default)({ storage });
// const CargadeImagen = multer({
//     storage,
//     dest: './uploads',
//     limits: {fileSize: 55000000},
//     fileFilter: (req, file , cb)=>{
//         const filetypes = /jpeg|jpg|png/;
//         const mimetype   = filetypes.test(file.mimetype);
//         if ( mimetype )
//         { return{
//             error : false
//         } }
//         return{
//             error : true
//         } ;
//     }
// }).fields([{ name : "file", maxCount : 10}]);
app.post('/CargarItem', (req, res) => {
    incidencia = req.body.item;
    tipo = req.body.tipo; /* 1 Incidencia, 2 Auditoria*/
    if (incidencia) {
        res.send({
            data: [{
                    data: 'Enviado',
                }],
            errors: [],
            hasError: false
        });
    }
});
app.post('/upload', upload.fields([{ name: "file", maxCount: 100 }]), (req, res) => {
    const file = req.files;
    if (!file) {
        res.send({
            data: [{
                    path: "Archivo no Encontrado",
                }],
            errors: [],
            hasError: true
        });
    }
    else {
        const nombreArchivo = '';
        if (nombreArchivo.search('error') == -1) {
            res.send({
                data: [{
                        data: 'Imagen Cargada',
                        path: nombreArchivo,
                    }],
                errors: [],
                hasError: false
            });
        }
        else {
            res.send({
                data: [{
                        data: 'Favor Ingresar Formato Válido'
                    }],
                errors: [],
                hasError: true
            });
        }
    }
});
[];
exports.default = app;
