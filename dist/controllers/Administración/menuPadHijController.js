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
class Padrehijos {
    constructor() {
        this.menusOficiales = [];
    }
    padres(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`dbo.sp_cargarMenusPadHij`);
                if (!respuesta.hasError) {
                    let menus = yield this.descomponerMenus(respuesta.data.Table0, respuesta.data.Table1);
                    // this.armadoCompletoMenus(this.menusOficiales, respuestaLogin.data.Table3 )
                    return ({
                        data: {
                            menu: this.menusOficiales
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
    descomponerMenus(padres, hijos) {
        let i = 0;
        for (let padre of padres) {
            this.menusOficiales.push({
                id_menuPadre: padre === null || padre === void 0 ? void 0 : padre.id_menuPadre,
                menuPadre: padre === null || padre === void 0 ? void 0 : padre.menuPadre,
                icon: padre === null || padre === void 0 ? void 0 : padre.icon,
                id_modulo: padre === null || padre === void 0 ? void 0 : padre.id_modulo,
                modulo: padre === null || padre === void 0 ? void 0 : padre.modulo,
                estado: padre === null || padre === void 0 ? void 0 : padre.estado,
                hijos: [],
            });
            for (let hijo of hijos) {
                if (padre.id_menuPadre === hijo.id_menuPadre) {
                    //    console.log( hijo.id_menuPadre, padre.id_menuPadre)
                    this.menusOficiales[i].hijos.push({
                        id_menuHijo: hijo === null || hijo === void 0 ? void 0 : hijo.id_menuHijo,
                        id_menuPadre: hijo === null || hijo === void 0 ? void 0 : hijo.id_modulo,
                        menuHijo: hijo === null || hijo === void 0 ? void 0 : hijo.menuHijo,
                        icon: hijo === null || hijo === void 0 ? void 0 : hijo.icon,
                        url: hijo === null || hijo === void 0 ? void 0 : hijo.urlM,
                        estado: hijo === null || hijo === void 0 ? void 0 : hijo.estado
                    });
                }
            }
            i++;
        }
    }
}
exports.default = Padrehijos;
