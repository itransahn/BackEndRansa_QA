"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.desencriptar = exports.encriptar = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
function encriptar(password) {
    let saltRounds = 10;
    const salt = bcrypt_1.default.genSaltSync(saltRounds);
    return bcrypt_1.default.hashSync(password, salt);
}
exports.encriptar = encriptar;
function desencriptar(password, passwordDB) {
    return bcrypt_1.default.compareSync(password, passwordDB);
}
exports.desencriptar = desencriptar;
