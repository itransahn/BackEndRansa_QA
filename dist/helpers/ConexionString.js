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
        this.password = sqlConfig.pasword || 'Fabri061297';
        this.server = sqlConfig.server || 'localhost';
        this.database = sqlConfig.database || 'dbsistema';
        this.driver = 'tedious';
        this.options = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 };
        this.port = sqlConfig.port || 49846;
    }
}
exports.default = ConexionString;
