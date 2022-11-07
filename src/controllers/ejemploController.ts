import DbHelper from '../helpers/DbHelper';
import EnviarEmail from '../correo/correo';


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

            return await Email.enviarCorreo('mvelasquezb@ransa.net',2,'');

        } catch (error) {

        }
    }


}