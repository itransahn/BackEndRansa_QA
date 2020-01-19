import DataHelper from './DataHelper';
import ConexionString from './ConexionString';

import * as sql from 'mssql';
import conexion = require('../configuration/Conexiones.json');







export default class DbHelper {



    private respuesta: any;
    private conexion: any;
    public parametros: any[];

    constructor(nombreConexion?: any) {

        this.respuesta = new DataHelper();
        var c = this.fnAsignarConexion(nombreConexion);
        this.conexion = new ConexionString(c);
        this.parametros = [];

    }


    private fnAsignarConexion(nombreConexion: any) {


        if (!nombreConexion) { nombreConexion = 'Default' };
        const r = this.buscarCadena(nombreConexion, conexion);
        if (!r.existe) {

            this.respuesta.hasError = true;
            this.respuesta.errors.push({ codigo: 1000, descripcion: "La conexion no existe", criticidad: 200 });
        }

        return r.conexion;
    }


    private buscarCadena(nombre: any, arreglo: any) {

        let datosRespuesta = { existe: false, conexion: null };

        arreglo.forEach((element: any) => {

            if (typeof element === 'object') {

                for (var propertyName in element) {

                    if (propertyName === nombre) {
                        datosRespuesta.existe = true;
                        datosRespuesta.conexion = element[propertyName];
                        break;
                    }
                }

            }

        });

        return datosRespuesta;

    }



    async Ejecutar(procedimiento: string, parametros: any[] = []) {


        if (!parametros) {
            parametros = this.parametros;
        }

        let respuestaInicial = this.respuesta;

        let conexion = this.conexion;


        let coon = new sql.ConnectionPool(conexion);

        //sql.close();
        coon.close();

        var promesa = new Promise(async (resolve, reject) => {

            if (respuestaInicial.existeError) {

                respuestaInicial.existeError = true;
                resolve(resolve);
            }




            // coon.connect();

            await new sql.ConnectionPool(conexion).connect().then(async (pool: any) => {

                const consulta = pool.request();

                parametros.forEach(function (elemento) {
                    consulta.input(elemento.nombre, elemento.tipo, elemento.valor);
                });

                return await consulta.execute(procedimiento);

            }).then(async (result: any) => {

                //  sql.close();
                coon.close();
                const d = await this.recorrer(result || []);
                resolve(d);
            }).catch((err: any) => {

                //sql.close();
                coon.close();

                const d = new DataHelper();
                d.hasError = true;
                d.errors.push({ codigo: "", descripcion: err.message, criticidad: 2000 });

                resolve(d);
            });

            //sql.on('error', (err: any) => {

            coon.on('error', (err: any) => {
                //sql.close();
                coon.close();
                var d = new DataHelper(null);
                d.hasError = true;
                d.errors.push({ codigo: "", descripcion: err.message, criticidad: 2000 });
                resolve(d);
            });

        })

        return promesa;

    }




    private async recorrer(data: any) {

        const d = new DataHelper(null);

        if (data.returnValue === 0) {

            var nombre = "";

            (data.recordsets).forEach((element: any, $index: number) => {

                nombre = 'Table' + $index;
                d.data;
                d.data[nombre] = element;

            });


        } else {

            d.llenarErrores(data.recordsets[0]);
        }

        return d;
    }





}





