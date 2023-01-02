import mssql from 'mssql';

export default class ConexionString {
     env = process.env.NODE_ENV  

    private user : any;
    private password : any;
    private server : any;
    private database : any;

    private options   :  object = {};
    private pool      :  object = {};
    private port      :  number;

    constructor(sqlConfig: any) {

       this.validator()

        if (!sqlConfig) { sqlConfig = {} };
        this.user     = this.user;
        this.password = this.password;
        this.server   = this.server;
        this.database = this.database;
        this.options  = { encrypt: false };
        this.pool = { idleTimeoutMillis: 600000, max: 1000 }
        this.port = sqlConfig.port || 1433;
        
    }

    validator(){
        if ( this.env === 'development'){
this.user   =  'sa'
this.password   =  '$ega2014',
this.server   =  '10.130.65.146',
this.database   =  'DB_RANSA_HONDURAS'
        }else{
            this.user   =  'sa'
            this.password   =  '$ega2014',
            this.server   =  '10.130.65.226',
            this.database   =  'DB_RANSA_HONDURAS'
        }
    }

}
