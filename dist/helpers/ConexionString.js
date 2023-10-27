"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConexionString {
    constructor(sqlConfig) {
        this.env = process.env.NODE_ENV;
        this.options = {};
        this.pool = {};
        this.validator();
        if (!sqlConfig) {
            sqlConfig = {};
        }
        ;
        this.user = this.user;
        this.password = this.password;
        this.server = this.server;
        this.database = this.database;
        this.options = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 };
        this.port = sqlConfig.port || 1433;
    }
    validator() {
        if (this.env === 'development') {
            this.user = 'sa';
            this.password = '$ega2014',
                this.server = '10.130.65.146',
                this.database = 'DB_RANSA_HONDURAS';
        }
        else {
            this.user = 'sa';
            this.password = '$ega2014',
                this.server = '10.130.65.146',
                this.database = 'DB_RANSA_HONDURAS';
        }
    }
}
exports.default = ConexionString;
