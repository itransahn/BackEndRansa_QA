import express from 'express';
import http  from 'http';



export default class Server {
    private static _instance: Server;
    private httpServer : http.Server;
    public port:         Number;
    public app:          express.Application;
    static app: any;



    private constructor (){
        this.app = express();
        this.port = 3000;

        this.httpServer = new http.Server(this.app);
    
    }

    start( callback:any ){
        this.httpServer.listen(3000, callback);
    }

    public static get instance (){
        return this._instance || ( this._instance = new this());
    }
}
