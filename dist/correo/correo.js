"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nodemailer_1 = __importDefault(require("nodemailer"));
const primerIngreso_1 = __importDefault(require("./primerIngreso"));
const recuperacionP_1 = __importDefault(require("./recuperacionP"));
const ValeTaxi_1 = __importDefault(require("./ValeTaxi"));
const transacciones_1 = __importDefault(require("./transacciones"));
class EnviarEmail {
    constructor() {
        // private cuentaCorreoGmail : string = 'soporteintelsahn@gmail.com';
        this.cuentaCorreoGmail = 'rtnowhn@gmail.com';
        this.cuentaHotmail = 'itransahn@ransa.net';
        this.ContraHotmail = 'R4ns4Adm1nistr4ad0r.1T';
        this.ContraGmail = 'ServicioRansaIT654_$';
        this.ContraGmailCifrada = 'sonu vtsu tcrn jsyb';
        // private cuentaCorreoGmail : string = 'rtnow@ransa.net';
        // private contraCorreo : string = 'f re t c q sol mi q una f f t j k sol _';
        // private contraCorreo : string = 'Intelsa.123'
        // bekz rywb gktf gfxa
        this.contraCorreo = 'sonu vtsu tcrn jsyb';
        this.enviarCorreo = (tipo, mensaje) => {
            let asunto;
            let html;
            // Primera vez
            if (tipo == 1) {
                var envio = new primerIngreso_1.default();
                asunto = 'Bienvenido a Ransa';
                html = envio.mensajePropio({
                    usuario: mensaje['usuario'],
                    nombre: mensaje['nombre'],
                    idUsuario: mensaje['idUsuario'],
                    contra: mensaje['contra']
                });
            }
            // Cambio de contraseña por Administrador
            if (tipo == 2) {
                var envio = new recuperacionP_1.default();
                asunto = 'Restablecimiento de Contraseña';
                html = envio.mensajePropio({
                    usuario: mensaje['usuario'],
                    nombre: mensaje['nombre'],
                    idUsuario: mensaje['idUsuario'],
                    contra: mensaje['contra']
                });
            }
            // CAB
            if (tipo == 3) {
                let envio = new ValeTaxi_1.default();
                asunto = 'Nuevo Viaje';
                html = envio.valeTaxi({
                    solicitado: mensaje === null || mensaje === void 0 ? void 0 : mensaje['solicitado'],
                    tipoViaje: mensaje === null || mensaje === void 0 ? void 0 : mensaje['tipoViaje'],
                    detalle: mensaje === null || mensaje === void 0 ? void 0 : mensaje['detalle'],
                    FechaHora: mensaje === null || mensaje === void 0 ? void 0 : mensaje['FechaHora'],
                    numero: mensaje === null || mensaje === void 0 ? void 0 : mensaje['numero'],
                    viaje: mensaje === null || mensaje === void 0 ? void 0 : mensaje['viaje'],
                    recibo: mensaje === null || mensaje === void 0 ? void 0 : mensaje['recibo'],
                    valor: mensaje === null || mensaje === void 0 ? void 0 : mensaje['valor'],
                });
            }
            //Transacciones
            if (tipo == 4) {
                let envio = new transacciones_1.default();
                asunto = 'Nueva Transaccion';
                html = envio.transacciones({
                    cliente: mensaje === null || mensaje === void 0 ? void 0 : mensaje['cliente'],
                    wh: mensaje === null || mensaje === void 0 ? void 0 : mensaje['wh'],
                    transaccion: mensaje === null || mensaje === void 0 ? void 0 : mensaje['transaccion'],
                    detalle: mensaje === null || mensaje === void 0 ? void 0 : mensaje['detalle'],
                    fecha: mensaje === null || mensaje === void 0 ? void 0 : mensaje['fecha'],
                    bultaje: mensaje === null || mensaje === void 0 ? void 0 : mensaje['bultaje'],
                });
            }
            return new Promise((resolve, reject) => {
                let transporte = nodemailer_1.default.createTransport({
                    //service : 'gmail',
                    // service : 'hotmail',
                    host: 'smtp.gmail.com',
                    port: 587,
                    // secure : false,
                    // requireTLS : true,
                    //     auth :{
                    //         user: this.cuentaCorreoGmail,
                    //         pass: this.contraCorreo,
                    //     },       
                    //     tls: {
                    //         rejectUnauthorized: false
                    //     },  
                    // service : 'Outlook365',
                    // host    : 'smtp.office365.com',
                    // port    : 587,
                    // tls : {
                    //     ciphers : 'SSLv3',
                    //     rejectUnauthorized : false
                    // },
                    auth: {
                        // user : this.cuentaHotmail ,
                        // pass :'R4ns4Adm1nistr4ad0r.1T'
                        user: this.cuentaCorreoGmail,
                        pass: this.ContraGmailCifrada
                    }
                });
                let mailOptions = {
                    from: this.cuentaCorreoGmail,
                    to: mensaje['correo'],
                    subject: asunto,
                    html: html
                };
                transporte.sendMail(mailOptions, function (error) {
                    if (error) {
                        resolve({
                            hasError: true,
                            data: [{ mensaje: 'Correo sin Exito' }],
                            errors: [error]
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
