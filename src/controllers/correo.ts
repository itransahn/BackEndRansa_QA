import DbHelper from '../helpers/DbHelper';
import EnviarEmail from '../correo/correo';
import { errorMensaje } from '../classes/classes';


let Email = new EnviarEmail();
export default class Ejemplo {



    constructor() {

    }


    async resultadoConsulta() {

              
        const result = { mensaje: 'Prueba desde el controlador' }

        return result;
    }


    async ejemplo(parametros?: any) {

        // let conexionSql = new DbHelper();

        try {

            return await Email.enviarCorreo(1,{
                usuario : 'Mario Velasquez',
                correo  : 'velasquezjosue7@gmail.com' 
            });

        } catch (error) {

        }
    }

    // async primeraVez(parametros?: any) {

    //     // let conexionSql = new DbHelper();

    //     try {
    //         return await Email.enviarCorreo(
    //             'mvelasquezb@ransa.net','');

    //     } catch (error) {

    //     }

    //     try {
    //         let conexionSql = new DbHelper();
    //         if ( parametros ) {
   
    //                 conexionSql.parametros = [ 
    //                  {
    //                    parametro : 'desde',
    //                    valor     : parametros.desde
    //                  },
    //                  {
    //                    parametro : 'hasta',
    //                    valor     : parametros.hasta
    //                  }
    //                 ]
    //         }
       
    //         let respuesta: any = await conexionSql.Ejecutar(`sp_verAsignacionesMaqH`);
    //        if (!respuesta.hasError ){
    //                return { 
    //                  data :      respuesta.data,
    //                  errors :    respuesta.errors,
    //                  hasError :  respuesta.hasError
    //                  }
    //        }else{
    //          return respuesta;
    //        }
    //     } catch ( error ) {
    //             errorMensaje(error)
    //     }
        
    // }



}