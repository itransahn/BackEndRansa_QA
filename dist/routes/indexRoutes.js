"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ejemploRoutes_1 = __importDefault(require("./ejemploRoutes"));
//Autenticación
const auth_1 = __importDefault(require("./auth/auth"));
const menu_1 = __importDefault(require("./auth/menu"));
//Excelencia
const llantas_1 = __importDefault(require("./Excelencia/Llantas/llantas"));
const utilitario_1 = __importDefault(require("./Excelencia/Llantas/utilitario"));
//Asignacion de Maquinas
const asignacion_1 = __importDefault(require("./Operaciones/Asignacion Maquinas/asignacion"));
//RRHH
const credito_1 = __importDefault(require("./RRHH/Cr\u00E9dito/credito"));
const dolar_1 = __importDefault(require("./RRHH/Dolar/dolar"));
//Seguridad
const seguridad_1 = __importDefault(require("./Seguridad/seguridad"));
const permisos_1 = __importDefault(require("./Seguridad/permisos"));
const administracion_1 = __importDefault(require("./Administraci\u00F3n/administracion"));
const roles_1 = __importDefault(require("./Administraci\u00F3n/roles"));
const modulosPadre_1 = __importDefault(require("./Administraci\u00F3n/modulosPadre"));
const menus_1 = __importDefault(require("./Administraci\u00F3n/menus"));
//Administracion
const mantenimientos_1 = __importDefault(require("./Administraci\u00F3n/mantenimientos"));
//Finanzas
const finanzas_1 = __importDefault(require("./finanzas/finanzas"));
//Fleje
const Fleje_1 = __importDefault(require("./Operaciones/Fleje/Fleje"));
//Modulo 
//Transporte
const transportes_1 = __importDefault(require("./Transporte/transportes"));
//Camiones
const camiones_1 = __importDefault(require("./Transporte/camiones"));
//Motoristas
const motoristas_1 = __importDefault(require("./Transporte/motoristas"));
//Permisos 
const permisos_2 = __importDefault(require("./Transporte/permisos"));
//Mantenimientos Transporte
const mantenimientosT_1 = __importDefault(require("./Transporte/mantenimientosT"));
//const index = express();
let app = (0, express_1.default)();
//let index = Server.getIntance();
// app.use(ejemploRoutes);
//Autenticación
app.use('/auth', auth_1.default, menu_1.default, ejemploRoutes_1.default);
//Seguridad
app.use('/seguridad', permisos_1.default, seguridad_1.default, administracion_1.default, roles_1.default, modulosPadre_1.default, menus_1.default);
//Administración
app.use('/administracion', mantenimientos_1.default);
//Excelencia
app.use('/excelencia', llantas_1.default, utilitario_1.default);
//Operaciones
app.use('/operaciones', asignacion_1.default, Fleje_1.default);
//RRHH
app.use('/rrhh', credito_1.default, dolar_1.default);
//Finanzas
app.use('/finanzas', finanzas_1.default);
//Transporte
app.use('/transporte', transportes_1.default, camiones_1.default, motoristas_1.default, permisos_2.default, mantenimientosT_1.default);
exports.default = app;
