import { MAX } from 'mssql';
import nodemailer from 'nodemailer';

export default class EnviarEmail{
    // private cuentaCorreo : string = 'soporteintelsahn@gmail.com';
    private cuentaCorreo : string = 'rtnowhn@gmail.com';
    // private cuentaCorreo : string = 'rtnow@ransa.net';
    private contraCorreo : string = 'f re t c q sol mi q una f f t j k sol _';
    // private contraCorreo : string = 'Intelsa.123'
    // bekz rywb gktf gfxa
    // ServicioRansaIT654_$
    
    public enviarCorreo = ( correo:string, tipo:number , mensaje ?: any)=>{
        return new Promise(( resolve, reject)=>{
            let transporte = nodemailer.createTransport({
               host : 'smtp.gmail.com', 
               port : 465,
               secure : true,
                auth :{
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
            from : this.cuentaCorreo,
            to: 'velasquezjosue7@gmail.com',
            subject: "Prueba de Correo",
        };

        transporte.sendMail(mailOptions , function (error) {
            if( error ){
                    // console.log(error)
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
