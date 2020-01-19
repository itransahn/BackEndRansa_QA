
import index from './routes/indexRoutes';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';

import express from 'express';

const app: express.Application = express();

//usar el parseo de json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//usar las rutas
app.use(index);

const port: any = process.env.PORT || 3000;

//configurar CORS
app.use((req: Request, res: Response, next: NextFunction) => {

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');

    next();

});


//server listening 
app.listen(port, () => {
    console.log("corriendo en el puerto 3000");
});