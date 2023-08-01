"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const multer_1 = __importDefault(require("multer"));
const path_1 = __importDefault(require("path"));
const uuid_1 = require("uuid");
const app = (0, express_1.Router)();
//const rutaCarga = '/src/public/ssmoa';
/* Destino de Carga */
const storage = multer_1.default.diskStorage({
    filename: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype) {
            return cb(null, (0, uuid_1.v4)() + path_1.default.extname(file.originalname));
        }
        else {
            return cb(null, 'error');
        }
        ;
    },
    destination: './uploads',
});
// const storage = multer.diskStorage({
//         destination: ( req, file, cb) =>{
//                 cb(null,'./uploads')
//         },
//         filename : (req, file, cb) => {
//             const ext = file.originalname.split('.').pop()
//             cb(null,`${Date.now()}.${ext}` )
//         }
//     });
const upload = (0, multer_1.default)({ storage });
const CargadeImagen = (0, multer_1.default)({
    storage,
    dest: './uploads',
    limits: { fileSize: 55000000 },
    fileFilter: (req, file, cb) => {
        const filetypes = /jpeg|jpg|png/;
        const mimetype = filetypes.test(file.mimetype);
        if (mimetype) {
            return {
                error: false
            };
        }
        return {
            error: true
        };
    }
}).single('file');
app.post('/upload', upload.single('file'), (req, res) => {
    const file = req.file;
    // console.log(file?.path)
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
        const nombreArchivo = file === null || file === void 0 ? void 0 : file.path;
        // console.log(nombreArchivo.search('error') )
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
// const err = new Error('Solamente .png, .jpg and .jpeg como formato Permitido!')
// err.name = 'ExtensionError'
// return cb(err);
//Carga de Imagen
app.post('/cargaI', (req, res) => {
    return {
        mensaje: 'hola'
    };
    //     const file = req.file;
    //    if(!file){
    //      res.send('Archivo No Encontrado')
    //      res.send({
    //         data: [{
    //             path: "Archivo no Encontrado",
    //         }],
    //         errors: [],
    //         hasError: true
    //     });
    //     }
    //     const nombreArchivo = file?.path;
    //     res.send({
    //         data: [{
    //             path: nombreArchivo,
    //         }],
    //         errors: [],
    //         hasError: false
    //     });
});
exports.default = app;
