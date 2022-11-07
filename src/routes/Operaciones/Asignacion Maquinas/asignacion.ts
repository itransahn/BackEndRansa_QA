import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController'; 
import asignacionMaquinas from '../../../controllers/Operaciones/Asignacion Maquinas/asignacionController';

import {dataApi} from '../../../interfaces/dataApi';
const app: Router = Router();

/* Ver Maquinas en uso */
app.get('/maquinasEnuso', (req: Request, res:Response)=>{
let maquina = new asignacionMaquinas()
    let params = req.body;
     maquina.verMaquinasEnUso( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Asignar Maquina */
app.post('/asignarMaquina' ,  (req: Request, res:Response)=>{
    let maquina = new asignacionMaquinas();
        let params = req.body;
        maquina.asignarMaquina( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Actualizar Asignacion de Maquinas*/
app.post('/actualizarAsignacionMaq' ,  (req: Request, res:Response)=>{
    let maquina = new asignacionMaquinas();
        let params = req.body;
        maquina.actalizarAsignacion( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Actualizar Asignacion de Maquinas*/
app.put('/historialAsignaciones' ,  (req: Request, res:Response)=>{
        let maquina = new asignacionMaquinas();
            let params = req.body;
            maquina.historialAsignaciones( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send(respuesta)
                }else{
                    return res.status(400).send(result)
                }
        });
        })


export default app;

