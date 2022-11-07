import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController'; 
import fleje from '../../../controllers/Operaciones/Fleje/FlejeController';

import {dataApi} from '../../../interfaces/dataApi';
const app: Router = Router();

/* Ver Maquinas en uso */
app.post('/movimientoFleje', (req: Request, res:Response)=>{
let maquina = new fleje()
    let params = req.body;
     maquina.movimientoFleje( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send(respuesta)
        }else{
            return res.status(400).send(result)
        }
});
})

/* Stock general de Fleje por Columna */
app.get('/stockFleje', (req: Request, res:Response)=>{
    let maquina = new fleje()
        let params = req.body;
         maquina.stockFleje( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send(respuesta)
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Columnas con Stock */
app.get('/columnasStock', (req: Request, res:Response)=>{
    let maquina = new fleje()
        let params = req.body;
         maquina.columnasStock( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send(respuesta)
            }else{
                return res.status(400).send(result)
            }
    });
    })

   /* Stock por columna */
app.put('/stockColumna', (req: Request, res:Response)=>{
    let maquina = new fleje()
        let params = req.body;
         maquina.dispColumna( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send(respuesta)
            }else{
                return res.status(400).send(result)
            }
    });
    })

export default app;

