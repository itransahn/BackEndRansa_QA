"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const DataHelper_1 = __importDefault(require("./DataHelper"));
const ConexionString_1 = __importDefault(require("./ConexionString"));
const sql = __importStar(require("mssql"));
const conexion = require("../configuration/Conexiones.json");
class DbHelper {
    constructor(nombreConexion) {
        this.respuesta = new DataHelper_1.default();
        var c = this.fnAsignarConexion(nombreConexion);
        this.conexion = new ConexionString_1.default(c);
        this.parametros = [];
    }
    fnAsignarConexion(nombreConexion) {
        if (!nombreConexion) {
            nombreConexion = 'Default';
        }
        ;
        const r = this.buscarCadena(nombreConexion, conexion);
        if (!r.existe) {
            this.respuesta.hasError = true;
            this.respuesta.errors.push({ codigo: 1000, descripcion: "La conexion no existe", criticidad: 200 });
        }
        return r.conexion;
    }
    buscarCadena(nombre, arreglo) {
        let datosRespuesta = { existe: false, conexion: null };
        arreglo.forEach((element) => {
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
    Ejecutar(procedimiento, parametros = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!parametros) {
                parametros = this.parametros;
            }
            let respuestaInicial = this.respuesta;
            let conexion = this.conexion;
            let coon = new sql.ConnectionPool(conexion);
            //sql.close();
            coon.close();
            var promesa = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                if (respuestaInicial.existeError) {
                    respuestaInicial.existeError = true;
                    resolve(resolve);
                }
                // coon.connect();
                yield new sql.ConnectionPool(conexion).connect().then((pool) => __awaiter(this, void 0, void 0, function* () {
                    const consulta = pool.request();
                    parametros.forEach(function (elemento) {
                        consulta.input(elemento.nombre, elemento.tipo, elemento.valor);
                    });
                    return yield consulta.execute(procedimiento);
                })).then((result) => __awaiter(this, void 0, void 0, function* () {
                    //  sql.close();
                    coon.close();
                    const d = yield this.recorrer(result || []);
                    resolve(d);
                })).catch((err) => {
                    //sql.close();
                    coon.close();
                    const d = new DataHelper_1.default(null);
                    d.hasError = true;
                    d.errors.push({ codigo: "", descripcion: err.message, criticidad: 2000 });
                    resolve(d);
                });
                //sql.on('error', (err: any) => {
                coon.on('error', (err) => {
                    //sql.close();
                    coon.close();
                    var d = new DataHelper_1.default(null);
                    d.hasError = true;
                    d.errors.push({ codigo: "", descripcion: err.message, criticidad: 2000 });
                    resolve(d);
                });
            }));
            return promesa;
        });
    }
    recorrer(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const d = new DataHelper_1.default(null);
            if (data.returnValue === 0) {
                var nombre = "";
                (data.recordsets).forEach((element, $index) => {
                    nombre = 'Table' + $index;
                    d.data;
                    d.data[nombre] = element;
                });
            }
            else {
                d.llenarErrores(data.recordsets[0]);
            }
            return d;
        });
    }
}
exports.default = DbHelper;
