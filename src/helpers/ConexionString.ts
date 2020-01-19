import mssql from 'mssql';

export default class ConexionString {

    private user: mssql.config;
    private password: mssql.config;
    private server: mssql.config;
    private database: mssql.config;
    private driver: string;
    private options: object = {};
    private pool: object = {};
    private port: number;

    constructor(sqlConfig: any) {

        if (!sqlConfig) { sqlConfig = {} };


        this.user = sqlConfig.user || 'sa';
        this.password = sqlConfig.pasword || 'Fabri061297';
        this.server = sqlConfig.server || 'localhost';
        this.database = sqlConfig.database || 'dbsistema';
        this.driver = 'tedious';
        this.options = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 }
        this.port = sqlConfig.port || 49846;
    }


}
