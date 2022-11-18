import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import finanzas from '../../controllers/finanzas/finanzas';
import { dataApi } from '../../interfaces/dataApi';
const app: Router = Router();

/* Ver Maquinas en uso */
app.post('/insertCAI', (req: Request, res:Response)=>{
let finanza = new finanzas()
    let params = req.body;
     finanza.insertarCAI( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Actualizar Cai */
app.post('/updateCai' ,  (req: Request, res:Response)=>{
    let finanza = new finanzas();
        let params = req.body;
        finanza.actualizarCAI( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Ver Cai Actual */
app.post('/caiActual' ,  (req: Request, res:Response)=>{
    let finanza = new finanzas();
        let params = req.body;
        finanza.CaiActual( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


export default app;

