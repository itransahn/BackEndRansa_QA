"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ConexionString {
    constructor(sqlConfig) {
        this.options = {};
        this.pool = {};
        if (!sqlConfig) {
            sqlConfig = {};
        }
        ;
        this.user = sqlConfig.user || 'sa';
        this.password = sqlConfig.pasword || '$ega2014';
        this.server = sqlConfig.server || '10.130.65.226';
        this.database = sqlConfig.database || 'DB_RANSA_HONDURAS';
        this.options = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 };
        this.port = sqlConfig.port || 1433;
    }
}
exports.default = ConexionString;
