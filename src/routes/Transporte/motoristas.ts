import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import motoristas from '../../controllers/Transporte/motoristasController';

import { dataApi } from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* ver camiones */
    app.get('/motoristas' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.verMotoristas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })
    
           /* insertar camiones */
    app.put('/InsMotoristas' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.insertarMotorista( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                 /* actualizar camiones */
    app.put('/ActMotoristas' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.actualizarMotorista( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

        /* Cambiar estado camiones */
    app.post('/EstadoCamiones' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.cambiarEstadoMotorista( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

    
     /* Documentos Motoristas */
     app.post('/documentosMotorista' ,  (req: Request, res:Response)=>{
            let mot = new motoristas();
            let params = req.body;
            mot.cargarDocumentos( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
            });
            })

             /* Insert Documentos Motoristas */
     app.put('/InsAntecedente' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.InsertarAntecedente( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                                     /* Actualizar Documentos Motoristas */
     app.put('/updAntecedente' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.actualizarAntecedente( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                     /* Insert Documentos Motoristas */
     app.put('/InsTarjeta' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.InsertarTarjeta( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })


                             /* Insert Documentos Motoristas */
     app.put('/updTarjeta' ,  (req: Request, res:Response)=>{
        let mot = new motoristas();
        let params = req.body;
        mot.actualizarTarjeta( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

export default app;

