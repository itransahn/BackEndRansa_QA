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
class auth {
    constructor() { }
    login(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                // console.log( await conexionSql.Ejecutar(`dbo.sp_login`) )
                return yield conexionSql.Ejecutar(`dbo.sp_login`);
            }
            catch (error) {
                // console.log('ERROR')
                //       errorMensaje(error)
            }
        });
    }
    categorias() {
        return __awaiter(this, void 0, void 0, function* () {
            let conexionSql = new DbHelper_1.default();
            try {
                return yield conexionSql.Ejecutar('dbo.sp_cargarMenus');
            }
            catch (error) {
            }
        });
    }
    validarMenu(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'rol',
                            valor: parametros.rol
                        },
                        {
                            parametro: 'menu',
                            valor: parametros.menu
                        },
                    ];
                }
                return yield conexionSql.Ejecutar(`sp_validarAccesoMenu`);
            }
            catch (error) {
            }
        });
    }
}
exports.default = auth;
[];
[];
