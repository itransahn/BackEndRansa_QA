
import index from './routes/indexRoutes';
import bodyParser from 'body-parser';
import { Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import http from 'http';
import express from 'express';
import path from 'path';

if( process.env.NODE_ENV != 'production'){
    require('dotenv').config();
}


dotenv.config({
    path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
  });

  console.log( path.resolve(__dirname, process.env.NODE_ENV + '.env'))

const app: express.Application = express();

//usar el parseo de json
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//configurar CORS
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', '*', );
//     res.setHeader('Access-Control-Allow-Origin','http://10.130.65.146:4200');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


//usar las rutas
app.use("/apiRansa/",index);
const port: any = process.env.PORT;

// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
//     next(); // Important
// })

// Cors
app.use(cors());

//server listening 
app.listen(port, () => {
    console.log(`corriendo en ambiente ${ process.env.NODE_ENV }`);
});

