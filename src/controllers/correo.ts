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

    async primeraVez( ) {

        // let conexionSql = new DbHelper();

        try {
            return await Email.enviarCorreo( 1,
                {
usuario   :'Mvelasquez',
nombre    :'Mario',
idUsuario :'202205072',
contra    :'123123',
correo    : 'mvelasquezb@ransa.net'
                });

        } catch (error) {

        }

      
    }



}