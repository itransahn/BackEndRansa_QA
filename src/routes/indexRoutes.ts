import ejemploRoutes from './ejemploRoutes';
import express from 'express';


//const index = express();

let app: express.Application = express();

//let index = Server.getIntance();


app.use(ejemploRoutes);
//index.use(index);



export default app;







