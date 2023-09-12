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
Object.defineProperty(exports, "__esModule", { value: true });
const correo_1 = __importDefault(require("../correo/correo"));
let Email = new correo_1.default();
class Ejemplo {
    constructor() {
    }
    resultadoConsulta() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = { mensaje: 'Prueba desde el controlador' };
            return result;
        });
    }
    ejemplo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            // let conexionSql = new DbHelper();
            try {
                return yield Email.enviarCorreo(1, {
                    usuario: 'Mario Velasquez',
                    correo: 'velasquezjosue7@gmail.com'
                });
            }
            catch (error) {
            }
        });
    }
    primeraVez(params) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            let detalle = '';
            let array = [];
            let viaje = '';
            if ((params === null || params === void 0 ? void 0 : params.tipoViaje) == 1) {
                viaje = 'Ida';
            }
            if ((params === null || params === void 0 ? void 0 : params.tipoViaje) == 2) {
                viaje = 'Retorno';
            }
            if ((params === null || params === void 0 ? void 0 : params.tipoViaje) == 3) {
                viaje = 'MultiParada';
            }
            if ((params === null || params === void 0 ? void 0 : params.tipoViaje) != 3) {
                detalle = (params === null || params === void 0 ? void 0 : params['origen']) + ' | ' + (params === null || params === void 0 ? void 0 : params['destino']);
            }
            else {
                array = JSON.parse(params === null || params === void 0 ? void 0 : params['multipleDestino']);
                for (let i = 0; i < array.length; i++) {
                    detalle += ((_a = array[i]) === null || _a === void 0 ? void 0 : _a.Origen) + '-' + ((_b = array[i]) === null || _b === void 0 ? void 0 : _b.Destino) + ' | ';
                }
            }
            try {
                return yield Email.enviarCorreo(3, {
                    solicitado: params === null || params === void 0 ? void 0 : params['solicitado'],
                    tipoViaje: params === null || params === void 0 ? void 0 : params['tipoViaje'],
                    detalle: detalle,
                    FechaHora: params === null || params === void 0 ? void 0 : params['FechaHora'],
                    numero: params === null || params === void 0 ? void 0 : params['numero'],
                    correo: params === null || params === void 0 ? void 0 : params['correo'],
                    viaje: viaje,
                });
            }
            catch (error) {
                return {
                    hasError: true,
                    data: [{ mensaje: 'Correo sin Exito' }],
                    errors: [error]
                };
            }
        });
    }
}
exports.default = Ejemplo;
