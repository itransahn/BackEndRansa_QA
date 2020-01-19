import { Router, Request, Response } from 'express';

//importar clase 
import EjemploController from '../controllers/ejemploController';
const app: Router = Router();


app.get('/', (req: Request, res: Response) => {


    const ejemploController: EjemploController = new EjemploController();


    ejemploController.resultadoConsulta().then(async (respuesta: Object) => {

        const result: Object = await respuesta;

        return res.status(200).send(result);
    });



});


app.get('/categorias', (req: Request, res: Response) => {


    const ejemploController: EjemploController = new EjemploController();


    ejemploController.resultadoConsulta2(null).then(async (respuesta: any) => {

        const result: any = await respuesta;

        return res.status(200).send(result);
    });



});








export default app;