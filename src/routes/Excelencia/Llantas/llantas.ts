import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController'; 
import Llantas from '../../../controllers/Excelencia/Llantas/llantasController';
import {dataApi} from '../../../interfaces/dataApi';
const app: Router = Router();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

let llanta = new Llantas();

    //CANTIDAD POR LOTES
app.post('/cantidadPorLotes' , (req: Request, res:Response)=>{
    let params = req.body;
    llanta.cantidadesLotes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Maquinas Tipo
app.get('/maquinasTipo' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.maquinasTipo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

        //Stock General
app.get('/stockGeneral'  , (req: Request, res:Response)=>{
    let params = req.body;
    llanta.stockGeneral( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Stock Lotes
app.post('/stockLotes' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.stockLotes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Lotes por Tipo
app.post('/lotesportipo' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.lotesPorTipo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })
  
    //Cambio de llantas
app.get('/cambioLlantas' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.cambiosLlanta( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })
   
    //Movimiento de llantas
app.put('/movimientoLlantas' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.movimentoLlantas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Validación maquina y llanta
  app.get('/valMaquinaLlanta' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.valMaquinaLlanta( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Ajuste de Llantas
  app.put('/ajusteLlantas' ,  (req: Request, res:Response)=>{
    let params = req.body;
    llanta.ajusteLlantas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Entrada de Llantas
  app.post('/entradaLlantas' ,  (req: Request, res:Response)=>{
    let params = req.body 
    llanta.entradaLlantas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Salida de Llantas
  app.put('/salidaLlantas' ,  (req: Request, res:Response)=>{
    let params = req.body
    llanta.salidaLlantas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    //Salida de Llantas
  app.post('/tipoLlantas' ,  (req: Request, res:Response)=>{
    let params = req.body
    llanta.tiposLlantaF( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })
  
    //Salida de Llantas
  app.post('/lotesTipo' ,  (req: Request, res:Response)=>{
    let params = req.body
    llanta.stockLoteTipo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })
  
    //Salida de Llantas
app.post('/insertAjuste' ,  (req: Request, res:Response)=>{
    let params = req.body
    llanta.insAjustes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })
    // ajustes Solicitados
app.put('/AjustesSolicitados' ,  (req: Request, res:Response)=>{
            let params = req.body
            llanta.ajstesSolicitados( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

    // Modificación de Ajustes
    app.post('/updateAjustes' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.editarAjustes( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

   // Modificación de Ajustes
   app.delete('/deleteAjustes' ,  (req: Request, res:Response)=>{
    let params = req.body
    llanta.deleteAjustes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

   // Ajustes para aprobar
   app.get('/ajustesAprobar' ,  (req: Request, res:Response)=>{
    let params = req.body
    llanta.ajustesAprobados( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
    });
    })

    // Ajustes para aprobar
    app.post('/aprobarAjuste' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.aprobarAjuste( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

            // Anulación de ajustes
    app.post('/anularAjuste' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.anularAjuste( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

                    // Anulación de ajustes
    app.get('/ajustesRealizados' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.ajustesRealizados( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

        // Anulación de ajustes
    app.post('/updCambiosLlanta' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.updCambiosLlanta( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

        // Anulación de ajustes
    app.post('/bitUpdCambios' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.bitacoraUpdCambiosLlanta( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })

        // Eliminación de cambio de llanta
    app.delete('/deleteCambio' ,  (req: Request, res:Response)=>{
            let params = req.body
            llanta.deleteCambios( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

        // Ver cambios registrados posterior al ingreso de registros
    app.get('/cambiosRealizados' ,  (req: Request, res:Response)=>{
        let params = req.body
        llanta.cambiosBitacora( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })
           // Ver cambios registrados posterior al ingreso de registros
    app.post('/updLote' ,  (req: Request, res:Response)=>{
            let params = req.body
            llanta.updLote( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })

            // Ver cambios registrados posterior al ingreso de registros
    app.get('/verCamLotes' ,  (req: Request, res:Response)=>{
      let params = req.body
      llanta.ModificacionesLotes( params ).then(async (respuesta: any) => {
      const result:  dataApi = await respuesta;
        if(!result.hasError){
           return res.status(200).send( respuesta )
        }else{
           return res.status(400).send(result)
              }
                });
           })

export default app;

