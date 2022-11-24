"use strict";
class formato {
    constructor() {
        this.mensajeP = "";
        this.imagenRansa = "https://www.ransa.biz/wp-content/uploads/2019/07/logo-1.png";
        this.urlLo = 'http://localhost:4200';
        this.urlSer = 'http://10.130.65.146:4200';
    }
    mensajePropio(data) {
        this.mensajeP = `
        <!DOCTYPE html>
   <html lang="es">
   <head>
       <meta charset="utf-8">
       <title>Ransa HN</title>
   </head>
   <body style="background-color: white ">
   
   <table style="max-width: 600px; padding: 10px; margin:0 auto; border-collapse: collapse; frame ="box" border="color-green" >
       <tr>
       </tr>
   
       <tr>
           <td style="padding: 0" align="center">
               <img style="padding: 0; align ="center" display: block" src=${this.imagenRansa} width="30%">
           </td>
       </tr>
       
       <tr>
           <td style="background-color: white">
               <div style="color: #34495e; margin: 4% 10% 2%; text-align: justify;font-family: sans-serif">
                   <h2 style="color: #006F1D; margin: 0 0 7px">Bienvenido ${data.nombre}</h2>

                   <p style="margin: 2px; font-size: 15px; color: #00A72C !important;">
                       Te damos la cordial bienvenida a nuestro sistema Ransa Honduras
                       </p>
                       <p style="margin: 2px; font-size: 15px; color: #00A72C !important;"> 
                       CREDENCIALES  <br>
                       usuario    : ${data.usuario} <br>
                       código     : ${data.contra}
                       </p>

                   <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">
                   <a title="Facebook" href="https://es-la.facebook.com/ransa.comercialsa/"><img style="padding: 0; width: 20px; margin: 5px" src="https://www.facebook.com/images/fb_icon_325x325.png" alt="Facebook">
                   </div>
                   <div style="width: 100%; text-align: center">
                       <a style="text-decoration: none; border-radius: 5px; padding: 11px 23px; color: white; background-color: #006F1D" href="${this.urlLo}/#/primeraVez/${data.idUsuario}">Ingresar</a>	
                   </div>
                   <p style="color: #b3b3b3; font-size: 12px; text-align: center;margin: 30px 0 0">Ransa HN</p>
               </div>
           </td>
       </tr>
   </table>
   <!--hasta aquí-->
   
   </body>
   </html>
   `;
        return this.mensajeP;
    }
}
module.exports = formato;
