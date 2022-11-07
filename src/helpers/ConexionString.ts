import mssql from 'mssql';

export default class ConexionString {

    private user: mssql.config;
    private password: mssql.config;
    private server: mssql.config;
    private database: mssql.config;
    private options: object = {};
    private pool: object = {};
    private port: number;

    constructor(sqlConfig: any) {

        if (!sqlConfig) { sqlConfig = {} };
        this.user = sqlConfig.user || 'sa';
        this.password = sqlConfig.pasword || '$ega2014';
        this.server = sqlConfig.server || '10.130.65.226';
        this.database = sqlConfig.database || 'DB_RANSA_HONDURAS';
        this.options = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 }
        this.port = sqlConfig.port || 1433;
        
    }


}
