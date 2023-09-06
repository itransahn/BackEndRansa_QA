"use strict";
class ValeTaxi {
    constructor() {
        this.mensajeP = "";
        this.imagenRansa = "https://www.ransa.biz/wp-content/uploads/2019/07/logo-1.png";
        this.urlLo = 'http://localhost:4200';
        this.urlSer = 'http://10.130.65.223:4200';
    }
    // public env : process.env.Server;
    mensajePropio(data) {
        this.mensajeP = `
        <!DOCTYPE html>
   <html lang="es">
   <head>
       <meta charset="utf-8">
       <title>Ransa HN</title>
   </head>
   <body style="background-color: white;  border-color: #006F1D;">
   
   <table style= "max-width: 100%; margin:0 auto; border-collapse: collapse;  border-color: #006F1D;" >
       <tr>
       </tr>
   
       <tr>
           <td style="padding: 0; align:center">
               <img >
           </td>
       </tr>
       
       <tr>
           <td style="background-color: white;">
               <div style="color: #34495e; text-align: justify;font-family: sans-serif; text-align: center;">
                   <h2 style="color: #006F1D;">Vale de Transporte </h2>
               <p style=" font-size: 15px; color: #00A72C !important; text-align: center;"> SOLICITADO POR MARIO JOSUE VELASQUEZ BANEGAS </p>
               <p style="margin: 2px; font-size: 15px; color: #00A72C !important; text-align:  center;"> 
                       DETALLES  <br>  Sauce - Mundial | Mundial - Aeropuerto | Mundial - Aeropuerto </p> 
                <p style="margin: 3px; font-size: 15px; color: #00A72C !important; text-align:  center;"> 
                    Fecha/Hora del viaje <br> 04/09/2023 15:35 </p>
                <p style="margin: 3px; font-size: 15px; color: #00A72C !important; text-align:  center;"> 
                        Contacto <br> (+504) 9999-9999 </p>
            <div style="width: 100%;margin:20px 0; display: inline-block;text-align: center">  </div>
               </div>
           </td>
       </tr>
   </table>
   </body>
   </html>
   `;
        return this.mensajeP;
    }
}
module.exports = ValeTaxi;
