import { Router, Request, Response } from 'express';

//importar clase 
import EjemploController from '../controllers/ejemploController';
// import EnviarEmail from '../correo/correo';
const app: Router = Router();


app.get('/', (req: Request, res: Response) => {


    const ejemploController: EjemploController = new EjemploController();


    ejemploController.resultadoConsulta().then(async (respuesta: Object) => {

        const result: Object = await respuesta;

        return res.status(200).send(result);
    });



});


app.get('/correo', (req: Request, res: Response) => {
    const ejemploController: EjemploController = new EjemploController();
 
    ejemploController.ejemplo().then(async (respuesta: any) => {

        const result: any = await respuesta;
        // console.log(result);
        return res.status(200).send(result);
    });



});








export default app;