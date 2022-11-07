import nodemailer from 'nodemailer';
import formato from './primerIngreso';

export default class EnviarEmail{
    // private cuentaCorreo : string = 'soporteintelsahn@gmail.com';
    private cuentaCorreo : string = 'rtnowhn@gmail.com';
    private cuentaCorOut : string = 'mvelasquezb@ransa.net';

    // private cuentaCorreo : string = 'rtnow@ransa.net';
    private contraCorreo : string = 'f re t c q sol mi q una f f t j k sol _';
    // private contraCorreo : string = 'Intelsa.123'
    // bekz rywb gktf gfxa
    // ServicioRansaIT654_$
    
    public enviarCorreo = ( tipo ?: number,  mensaje ?: any)=>{
        let asunto : string;
        let html   : string;

        // Primera vez
        if ( tipo == 1){
            var envio = new formato();
            asunto = 'Bienvenido a Ransa';
             html = envio.mensajePropio({
                usuario : mensaje['usuario'],
                nombre  : mensaje['nombre'],
                idUsuario: mensaje['idUsuario'],
                contra   : mensaje['contra']
            })
        }
        // Cambio de contraseña por Administrador
        if ( tipo == 2){
            var envio = new formato();
            asunto = 'Cambio de contraseña';
            html = envio.mensajePropio({   
                usuario : mensaje['usuario'],
                nombre  : mensaje['nombre'],
                idUsuario: mensaje['idUsuario'],
                contra   : mensaje['contra']
            })
        }
       
        return new Promise(( resolve, reject)=>{
            let transporte = nodemailer.createTransport({
            // service : 'Gmail',
            //    host : 'smtp.gmail.com', 
            //    port : 465,
            //    secure : false,
            //     auth :{
            //         user: this.cuentaCorreo,
            //         pass: this.contraCorreo,
            //     },       
            //     tls: {
            //         rejectUnauthorized: false
            //     },  
            service : 'Outlook365',
            host    : 'smtp.office365.com',
            port    : 587,
            tls : {
                ciphers : 'SSLv3',
                rejectUnauthorized : false
            },
            auth : {
                user : this.cuentaCorOut ,
                pass :'Jogabonito@8778'
            }
            });

        // let mensajeUsuario: any;
        let mailOptions = {
            from : this.cuentaCorOut,
            to:  mensaje['correo'],
            subject: asunto,
            html: html
        };

        transporte.sendMail(mailOptions , function (error) {
            if( error ){
                resolve({
                    hasError: true,
                    data: [{ mensaje: 'Correo sin Exito' }],
                    errors: []
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
