import nodemailer from 'nodemailer';
import formato from './primerIngreso';
import recuperacion from './recuperacionP';

export default class EnviarEmail{
    // private cuentaCorreoGmail : string = 'soporteintelsahn@gmail.com';
    private cuentaCorreoGmail : string = 'rtnowhn@gmail.com';
    private cuentaHotmail : string = 'itransahn@ransa.net';
    private ContraHotmail : string = 'R4ns4Adm1nistr4ad0r.1T';
    private ContraGmail : string = 'ServicioRansaIT654_$';
    private ContraGmailCifrada : string = 'sonu vtsu tcrn jsyb';

    // private cuentaCorreoGmail : string = 'rtnow@ransa.net';
    // private contraCorreo : string = 'f re t c q sol mi q una f f t j k sol _';
    // private contraCorreo : string = 'Intelsa.123'
    // bekz rywb gktf gfxa
    private contraCorreo : string = 'sonu vtsu tcrn jsyb';
    public enviarCorreo = ( tipo ?: number,  mensaje ?: any)=>{
        let asunto : string;
        let html   : string;
        // console.log(mensaje)
        // Primera vez
        if ( tipo == 1){
            var envio = new formato();
            asunto = 'Bienvenido a Ransa';
             html = envio.mensajePropio({
                usuario :  mensaje['usuario'],
                nombre  :  mensaje['nombre'],
                idUsuario: mensaje['idUsuario'],
                contra   : mensaje['contra']
            })
        }
        // Cambio de contraseña por Administrador
        if ( tipo == 2){
            var envio = new recuperacion();
            asunto = 'Restablecimiento de Contraseña';
            html = envio.mensajePropio({   
                usuario : mensaje['usuario'],
                nombre  : mensaje['nombre'],
                idUsuario: mensaje['idUsuario'],
                contra   : mensaje['contra']
            })
        }
       
        return new Promise(( resolve, reject)=>{
            let transporte = nodemailer.createTransport({
            service : 'gmail',
            // service : 'hotmail',
            host : 'smtp.gmail.com', 
            // port : 465,
            secure : true,
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
            auth : {
                // user : this.cuentaHotmail ,
                // pass :'R4ns4Adm1nistr4ad0r.1T'
                user : this.cuentaCorreoGmail,
                pass : this.ContraGmailCifrada
            }
            });

        // let mensajeUsuario: any;
        let mailOptions = {
            from : this.cuentaCorreoGmail,
            to:  mensaje['correo'],
            subject: asunto,
            html: html
        };

        transporte.sendMail(mailOptions , function (error) {
            if( error ){
            console.log(error)    
                resolve({
                    hasError: true,
                    data: [{ mensaje: 'Correo sin Exito' }],
                    errors:  [error]
                })
            }else{
                resolve({
                    hasError: false,
                    data : [{ mensaje: "Correo Enviado con exito"}],
                    errors: []
                })
            }
        })

        })
    }
}
