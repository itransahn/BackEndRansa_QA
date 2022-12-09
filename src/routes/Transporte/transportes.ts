import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import transportes from '../../controllers/Transporte/transportesController';

import { dataApi } from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* ver Transportes */
    app.get('/transportes' ,  (req: Request, res:Response)=>{
        let trans = new transportes();
        let params = req.body;
        trans.verTransportes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })
    
           /* insertar Transportes */
    app.post('/Instransportes' ,  (req: Request, res:Response)=>{
        let trans = new transportes();
        let params = req.body;
        trans.insertarTransporte( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                 /* actualizar Transportes */
    app.post('/ActTransportes' ,  (req: Request, res:Response)=>{
        let trans = new transportes();
        let params = req.body;
        trans.actualizarTransporte( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                         /* cambiar estado Transportes */
    app.post('/EstadoTransportes' ,  (req: Request, res:Response)=>{
        let trans = new transportes();
        let params = req.body;
        trans.CambiarEstadoTransporte( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

export default app;

