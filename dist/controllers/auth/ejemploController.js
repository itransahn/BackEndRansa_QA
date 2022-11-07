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
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
class Ejemplo {
    constructor() {
    }
    login(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            let conexionSql = new DbHelper_1.default();
            try {
                if (parametros) {
                    conexionSql.parametros = [
                        parametros.usuario,
                        parametros.password
                    ];
                }
                return conexionSql.Ejecutar('dbo.spCategoriasMostrar');
            }
            catch (error) {
            }
        });
    }
    ejemplo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            // let conexionSql = new DbHelper();
            try {
            }
            catch (error) {
            }
        });
    }
}
exports.default = Ejemplo;
