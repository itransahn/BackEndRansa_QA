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
const express_1 = require("express");
const app = (0, express_1.Router)();
const DbHelper_1 = __importDefault(require("../../helpers/DbHelper"));
const classes_1 = require("../../classes/classes");
class moduloPadre {
    constructor() {
        this.modulosOficiales = [];
    }
    modulos(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`dbo.sp_cargarModulosPadres`);
                if (!respuesta.hasError) {
                    let menus = yield this.descomponerModulos(respuesta.data.Table0, respuesta.data.Table1);
                    // this.armadoCompletoMenus(this.menusOficiales, respuestaLogin.data.Table3 )
                    return ({
                        data: {
                            menu: this.modulosOficiales
                        },
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    });
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    descomponerModulos(modulos, padres) {
        let i = 0;
        for (let modulo of modulos) {
            this.modulosOficiales.push({
                id_modulo: modulo === null || modulo === void 0 ? void 0 : modulo.id_modulo,
                modulo: modulo === null || modulo === void 0 ? void 0 : modulo.modulo,
                imagen: modulo === null || modulo === void 0 ? void 0 : modulo.imagen,
                icono: modulo === null || modulo === void 0 ? void 0 : modulo.icon,
                estado: modulo === null || modulo === void 0 ? void 0 : modulo.estado,
                padres: [],
            });
            for (let padre of padres) {
                if (modulo.id_modulo === padre.id_modulo) {
                    //    console.log( hijo.id_menuPadre, padre.id_menuPadre)
                    this.modulosOficiales[i].padres.push({
                        id_menuPadre: padre.id_menuPadre,
                        id_modulo: padre.id_modulo,
                        menuPadre: padre.menuPadre,
                        icon: padre.icon,
                        estado: padre.estado
                    });
                }
            }
            i++;
        }
    }
}
exports.default = moduloPadre;
[];
