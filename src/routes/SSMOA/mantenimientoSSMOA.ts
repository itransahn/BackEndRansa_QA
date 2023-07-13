import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import ssmoa from '../../controllers/SSMOA/mantenimientosSSMA';

import {dataApi} from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* Insertar tipo agente */
    app.post('/insertTipoAgente' ,  (req: Request, res:Response)=>{
        let per = new ssmoa();
            let params = req.body;
            per.tipoAgente( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )              
                }else{
                    return res.status(400).send(result)
                }
        });
        })

        /* Insertar tipo extintor */
     app.post('/insertTipoExtintor' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.body;
                per.tipoExtintor( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )        
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

        /* Insertar tipo Capacidad */
        app.post('/insertCapacidadExtintor' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.body;
                per.tipoCapacidad( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )                 
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

                 /* Insertar ubicacion */
        app.post('/insertUbicacionExtintor' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.body;
                per.ubicacion( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )                 
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

              /* Estado ubicacion */
        app.post('/estadoUbicacion' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.body;
                per.estadoUbicacion( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )                 
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

                 /* Catálogo Extintores */
     app.get('/catalogoExt' ,  (req: Request, res:Response)=>{
                    let per = new ssmoa();
                        let params = req.query;
                        per.catalogo( params ).then(async (respuesta: any) => {
                        const result:  dataApi = await respuesta;
                            if(!result.hasError){
                                return res.status(200).send( respuesta )                 
                            }else{
                                return res.status(400).send(result)
                            }
                    });
                    })

export default app;
