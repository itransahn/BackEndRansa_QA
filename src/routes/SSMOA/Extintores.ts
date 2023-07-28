import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import ssmoa from '../../controllers/SSMOA/Extintores';

import {dataApi} from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';


    /* Ver Extintores */
    app.get('/extintor' ,  (req: Request, res:Response)=>{
        let per = new ssmoa();
            let params = req.query;
            //  console.log(params)
            per.verExtintores( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )              
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Insertar Extintor */
    app.post('/extintor' ,  (req: Request, res:Response)=>{
        let per = new ssmoa();
            let params = req.body;
            per.crearExtintores( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )              
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Actualizar Extintor */
    app.put('/extintor' ,  (req: Request, res:Response)=>{
                let per = new ssmoa();
                    let params = req.body;
                    per.actualizarExtintores( params ).then(async (respuesta: any) => {
                    const result:  dataApi = await respuesta;
                        if(!result.hasError){
                            return res.status(200).send( respuesta )              
                        }else{
                            return res.status(400).send(result)
                        }
                });
                })

    /* Auditoria Extintor */
    app.put('/Audextintores' ,  (req: Request, res:Response)=>{
        let per = new ssmoa();
            let params = req.body;
            per.crearAuditoria( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )              
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Auditoria Extintor */
    app.get('/extintoresAud' ,  (req: Request, res:Response)=>{
                    let per = new ssmoa();
                        let params = req.query;
             per.cargarExtintoresAuditoria( params ).then(async (respuesta: any) => {
                        const result:  dataApi = await respuesta;
                            if(!result.hasError){
                                return res.status(200).send( respuesta )              
                            }else{
                                return res.status(400).send(result)
                            }
                    });
                    })

    /* Auditoria Extintor */
    app.get('/auditoriasGeneradas' ,  (req: Request, res:Response)=>{
                        let per = new ssmoa();
                            let params = req.query;
                 per.auditoriasExtintores( params ).then(async (respuesta: any) => {
                            const result:  dataApi = await respuesta;
                                if(!result.hasError){
                                    return res.status(200).send( respuesta )              
                                }else{
                                    return res.status(400).send(result)
                                }
                        });
                        })

    /* Auditoria Extintor */
    app.put('/Incidencia' ,  (req: Request, res:Response)=>{
        let per = new ssmoa();
            let params = req.body;
            per.Incidencia( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )              
                }else{
                    return res.status(400).send(result)
                }
        });
        })   
        
    /* Validar auditoria */
    app.get('/Auditoria' ,  (req: Request, res:Response)=>{
            let per = new ssmoa();
                let params = req.query;
                per.validarAuditoria( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )              
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })   

    /* Incidencia Extintor */
    app.get('/IncidenciaG' ,  (req: Request, res:Response)=>{
                        let per = new ssmoa();
                            let params = req.query;
                 per.incidenciasG( params ).then(async (respuesta: any) => {
                            const result:  dataApi = await respuesta;
                                if(!result.hasError){
                                    return res.status(200).send( respuesta )              
                                }else{
                                    return res.status(400).send(result)
                                }
                        });
                        })
export default app;