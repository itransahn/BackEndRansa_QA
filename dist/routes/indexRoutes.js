"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ejemploRoutes_1 = __importDefault(require("./ejemploRoutes"));
const express_1 = __importDefault(require("express"));
//const index = express();
let app = express_1.default();
//let index = Server.getIntance();
app.use(ejemploRoutes_1.default);
//index.use(index);
exports.default = app;
