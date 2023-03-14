import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import permisosT from '../../controllers/Transporte/recibosControllert';

import { dataApi } from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* Ver recibos no cerrados */
    app.get('/recibos' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.sp_verRecibos( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })
    
    /* Ver recibos por fecha */
    app.post('/recibos' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.sp_verRecibosfecha( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

       /* Insertar Recibos*/
    app.put('/Insrecibos' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.InsRecibo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

          /* actualizar Recibos*/
    app.put('/Updrecibos' ,  (req: Request, res:Response)=>{
            let mot = new permisosT();
            let params = req.body;
            mot.UpdRecibo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
            });
            })
          /* actualizar Recibos*/
    app.post('/anularRecibo' ,  (req: Request, res:Response)=>{
            let mot = new permisosT();
            let params = req.body;
            mot.anularRecibo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
            });
            })

                      /* actualizar Recibos*/
    app.put('/Cerrarrecibos' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.CerrarRecibo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )  
        }else{
            return res.status(400).send(result)
        }
        });
        })
    
            /* Catálogo de recibos */
    app.post('/catalogoRec' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.catalogoRecibos( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

            /* Catálogo de recibos */
    app.post('/recibosCerrados' ,  (req: Request, res:Response)=>{
                let mot = new permisosT();
                let params = req.body;
                mot.reciboCerrados( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
                });
                })
                /* Catálogo de recibos */
    app.post('/recibosaCerrar' ,  (req: Request, res:Response)=>{
                    let mot = new permisosT();
                    let params = req.body;
                    mot.reciboAcerrar( params ).then(async (respuesta: any) => {
                    const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    
                    }else{
                        return res.status(400).send(result)
                    }
                    });
                    })
                    /* Cancelar recibo */
    app.post('/cancelarRecibo' ,  (req: Request, res:Response)=>{
                        let mot = new permisosT();
                        let params = req.body;
                        mot.cancelarRecibo( params ).then(async (respuesta: any) => {
                        const result:  dataApi = await respuesta;
                        if(!result.hasError){
                            return res.status(200).send( respuesta )
                        
                        }else{
                            return res.status(400).send(result)
                        }
                        });
                        })
                        /* Deducciones */
     app.post('/deducciones' ,  (req: Request, res:Response)=>{
                            let mot = new permisosT();
                            let params = req.body;
                            mot.deducciones( params ).then(async (respuesta: any) => {
                            const result:  dataApi = await respuesta;
                            if(!result.hasError){
                                return res.status(200).send( respuesta )
                            
                            }else{
                                return res.status(400).send(result)
                            }
                            });
                            })

        /* Placas Empelados */
  app.get('/placaEmpleado' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.placasEmpleado( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

        /* Placas Empelados */
  app.put('/IplacaEmpleado' ,  (req: Request, res:Response)=>{
            let mot = new permisosT();
            let params = req.body;
            mot.CrearplacasEmpleado( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
            });
            })

        /* Placas Empelados */
 app.put('/UplacaEmpleado' ,  (req: Request, res:Response)=>{
            let mot = new permisosT();
            let params = req.body;
            mot.ActualizarplacasEmpleado( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
            });
            })

app.put('/estadoRecibo' ,  (req: Request, res:Response)=>{
                let mot = new permisosT();
                let params = req.body;
                mot.cambiarEstadoRecibo( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
                });
                })



export default app;

