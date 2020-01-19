"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
class Server {
    constructor(puerto) {
        this.port = puerto;
        this.app = express();
    }
    //tener una unica instancia del servidor express
    static init(puerto) {
        return new Server(puerto);
    }
    static getIntance() {
        if (!Server.instance) {
            this.instance = express();
        }
        else {
            this.instance = this.instance;
        }
        return this.instance;
    }
    start(callback) {
        // this.app.listen(this.port, callback);
    }
}
exports.default = Server;
