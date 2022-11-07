"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
class EnviarEmail {
    constructor() {
        // private cuentaCorreo : string = 'soporteintelsahn@gmail.com';
        this.cuentaCorreo = 'rtnowhn@gmail.com';
        // private cuentaCorreo : string = 'rtnow@ransa.net';
        this.contraCorreo = 'f re t c q sol mi q una f f t j k sol _';
        // private contraCorreo : string = 'Intelsa.123'
        // bekz rywb gktf gfxa
        // ServicioRansaIT654_$
        this.enviarCorreo = (correo, tipo, mensaje) => {
            return new Promise((resolve, reject) => {
                let transporte = nodemailer_1.default.createTransport({
                    host: 'smtp.gmail.com',
                    port: 465,
                    secure: true,
                    auth: {
                        user: this.cuentaCorreo,
                        pass: this.contraCorreo,
                    },
                    tls: {
                        // do not fail on invalid certs
                        rejectUnauthorized: false
                    },
                });
                // let mensajeUsuario: any;
                let mailOptions = {
                    from: this.cuentaCorreo,
                    to: 'velasquezjosue7@gmail.com',
                    subject: "Prueba de Correo",
                };
                transporte.sendMail(mailOptions, function (error) {
                    if (error) {
                        // console.log(error)
                        resolve({
                            hasError: true,
                            data: [{ mensaje: 'Correo sin Exito' }],
                            errors: []
                        });
                    }
                    else {
                        resolve({
                            hasError: false,
                            data: [{ mensaje: "Correo Enviado con exito" }],
                            errors: []
                        });
                    }
                });
            });
        };
    }
}
exports.default = EnviarEmail;
