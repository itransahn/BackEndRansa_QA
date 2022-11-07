"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyToken = exports.decodeToken = exports.generarToken = void 0;
const express_1 = require("express");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const app = (0, express_1.Router)();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';
function generarToken(jsonToSign) {
    const token = jsonwebtoken_1.default.sign({
        data: jsonToSign
    }, SECRET_KEY, { expiresIn: '10m' });
    return token;
}
exports.generarToken = generarToken;
function decodeToken(token) {
    try {
        var decoded = jsonwebtoken_1.default.verify(token, SECRET_KEY);
        return decoded;
    }
    catch (error) {
        return null;
    }
}
exports.decodeToken = decodeToken;
function verifyToken(req, res, next) {
    const token = req.headers['access-token'];
    // console.log(token)
    if (token) {
        // res.sendStatus(401).json({
        //     mensaje : 'EXISTE'
        // })
        jsonwebtoken_1.default.verify(String(token), SECRET_KEY, (err, decoded) => {
            if (err) {
                return res.json({ mensaje: 'Token inválida' });
            }
            else {
                req.body.decoded = decoded;
                next();
            }
        });
        // next()
    }
    else {
        res.sendStatus(403).json({
            mensaje: 'NO EXISTE'
        });
    }
}
exports.verifyToken = verifyToken;
exports.default = app;
