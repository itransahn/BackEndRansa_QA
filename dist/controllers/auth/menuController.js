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
class menu {
    constructor() {
        this.menusOficiales = [];
    }
    menus(parametros) {
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
                            parametro: 'modulo',
                            valor: parametros.modulo
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`dbo.sp_cargarMenusModulo`);
                if (!respuesta.hasError) {
                    let menus = yield this.descomponerRespuesta(respuesta.data.Table0, respuesta.data.Table1);
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
    descomponerRespuesta(padres, hijos) {
        let i = 0;
        for (let padre of padres) {
            this.menusOficiales.push({
                id_menuPadre: padre.id_menuPadre,
                menuPadre: padre.menuPadre,
                icon: padre.icon,
                id_modulo: padre.id_modulo,
                hijos: [],
            });
            for (let hijo of hijos) {
                if (padre.id_menuPadre === hijo.id_menuPadre) {
                    //    console.log( hijo.id_menuPadre, padre.id_menuPadre)
                    this.menusOficiales[i].hijos.push({
                        idmenuPadre: hijo.id_menuPadre,
                        idMenuHijo: hijo.id_menuHijo,
                        menuHijo: hijo.menuHijo,
                        icon: hijo.icon,
                        url: hijo.urlM,
                        insertar: hijo.insertar,
                        actualizar: hijo.actualizar,
                        eliminar: hijo.eliminar
                    });
                }
            }
            i++;
        }
    }
}
exports.default = menu;
[];
