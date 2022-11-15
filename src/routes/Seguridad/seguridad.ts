import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import seguridad from '../../controllers/Seguridad/seguridadController';

import {dataApi} from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

/* Rutas Módulos */
    /* Ver Módulos Corto */
app.get('/verModulosC' ,  (req: Request, res:Response)=>{
        let ser = new seguridad();
            let params = req.body;
            ser.modulosCorto( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Ver Módulos Detalle */   
app.get('/verModulosD' ,  (req: Request, res:Response)=>{
            let ser = new seguridad();
                let params = req.body;
                ser.modulosDetalle( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

    /* Insertar Módulos */   
app.post('/insertarModulo' ,  (req: Request, res:Response)=>{
            let ser = new seguridad();
                let params = req.body;
                ser.insertarModulo( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

    /* Actualizar Módulos */   
app.put('/actualizarModulo' ,  (req: Request, res:Response)=>{
        let ser = new seguridad();
            let params = req.body;
            ser.updateModulo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

           /* Eliminar Módulos */   
app.delete('/eliminarModulo' ,  (req: Request, res:Response)=>{
        let mod = new seguridad();
            let params = req.body;
            mod.eliminarModulo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

/* Rutas Módulos */

/* Rutas Menu Padre */
    /* ver Menus Padre */   
app.get('/verMenusPadre' ,  (req: Request, res:Response)=>{
        let ser = new seguridad();
            let params = req.body;
            ser.verMenusPadre( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Insertar Menus Padre */   
app.post('/insertarMenuPadre' ,  (req: Request, res:Response)=>{
            let ser = new seguridad();
                let params = req.body;
                ser.insertarMenusPadre( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })
    /* Actualizar Menus Padre */   
app.put('/updateMenuPadre' ,  (req: Request, res:Response)=>{
                let ser = new seguridad();
                    let params = req.body;
                    ser.updateMenusPadre( params ).then(async (respuesta: any) => {
                    const result:  dataApi = await respuesta;
                        if(!result.hasError){
                            return res.status(200).send( respuesta )
                        
                        }else{
                            return res.status(400).send(result)
                        }
                });
                })


                
           /* Eliminar Menú Padre */   
app.delete('/eliminarMenu' ,  (req: Request, res:Response)=>{
        let mod = new seguridad();
            let params = req.body;
            mod.eliminarMenuPadre( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

                   /* Eliminar Menú Padre */   
app.delete('/eliminarMenuH' ,  (req: Request, res:Response)=>{
    let mod = new seguridad();
        let params = req.body;
        mod.eliminarMenuHijo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Rutas Menu Padre */

/* Rutas Menu Hijo */

     /* Ver Menús Hijos */
app.get('/verMenusHijo' ,  (req: Request, res:Response)=>{
        let ser = new seguridad();
            let params = req.body;
            ser.verMenusHijos( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

     /* Ver Menús Hijos Especifico */
app.post('/verHijos' ,  (req: Request, res:Response)=>{
            let ser = new seguridad();
                let params = req.body;
                ser.verMenusHijosEsp( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })
    /* Insertar Menús Hijos */
app.post('/insertarMenuHijo' ,  (req: Request, res:Response)=>{
            let ser = new seguridad();
                let params = req.body;
                ser.insertarMenusHijos( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })
    /* actualizar Menús Hijos */
app.post('/actualizarMenusHijos' ,  (req: Request, res:Response)=>{
        let ser = new seguridad();
            let params = req.body;
            ser.updateMenusHijos( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Eliminar Menú Hijo */   
app.post('/validarRol' ,  (req: Request, res:Response)=>{
            let mod = new seguridad();
                let params = req.body;
                mod.validarRol( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )             
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })
        
/* Rutas Menu Hijo */
            
export default app;
