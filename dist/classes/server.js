"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
class Server {
    constructor() {
        this.app = (0, express_1.default)();
        this.port = 3000;
        this.httpServer = new http_1.default.Server(this.app);
    }
    start(callback) {
        this.httpServer.listen(3000, callback);
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
}
exports.default = Server;
