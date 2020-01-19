import DbHelper from '../helpers/DbHelper';


export default class Ejemplo {



    constructor() {

    }


    async resultadoConsulta() {


        const result = { mensaje: 'Prueba desde el controlador' }

        return result;
    }


    async resultadoConsulta2(parametros: any) {

        let conexionSql = new DbHelper();

        try {

            return conexionSql.Ejecutar('dbo.spCategoriasMostrar');

        } catch (error) {

        }
    }


}