import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import ssmoa from '../../controllers/SSMOA/mantenimientosSSMA';

import {dataApi} from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';


   /* tipo agente */
app.get('/TipoAgente' ,  (req: Request, res:Response)=>{
    let per = new ssmoa();
        let params = req.body;
        per.v_tipoAgente( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )              
            }else{
                return res.status(400).send(result)
            }
    });
    })
    /* Insertar tipo agente */
app.post('/TipoAgente' ,  (req: Request, res:Response)=>{
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
     /* Tipo extintor */
app.get('/TipoExtintor' ,  (req: Request, res:Response)=>{
        let per = new ssmoa();
            let params = req.body;
            per.v_tipoExtintor( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )        
                }else{
                    return res.status(400).send(result)
                }
        });
        })

   /* Insertar tipo extintor */
app.post('/TipoExtintor' ,  (req: Request, res:Response)=>{
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

    /* Capacidad */
  app.get('/CapacidadExtintor' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.body;
                per.v_Capacidad( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )                 
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

        /* Insertar tipo Capacidad */
app.post('/CapacidadExtintor' ,  (req: Request, res:Response)=>{
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

        /* Eliminar Capacidad */
app.delete('/CapacidadExtintor' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.body;
                per.DCapacidad( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )                 
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

    /* Ubicacion */
app.get('/Ubicaciones' ,  (req: Request, res:Response)=>{
     let per = new ssmoa();
         let params = req.body;
         per.v_ubicacion( params ).then(async (respuesta: any) => {
         const result:  dataApi = await respuesta;
             if(!result.hasError){
                 return res.status(200).send( respuesta )                 
             }else{
                 return res.status(400).send(result)
             }
     });
     })

 /* Insertar ubicacion */
 app.post('/Ubicaciones' ,  (req: Request, res:Response)=>{
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
