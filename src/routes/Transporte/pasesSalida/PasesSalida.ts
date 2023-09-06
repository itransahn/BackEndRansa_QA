import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController';
import pasesSalida from '../../../controllers/Transporte/pasesSalida/pasesController';
import { dataApi } from '../../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* Ver Pases de Salida */
    app.get('/pasesSalida' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.PasesSalida( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
    });

     /* Pases de Salida Estandar */
     app.get('/paseSalidaEstandar' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.query;
        ps.PasesSalidaEstandar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 
        /* Catalogo */
    app.post('/CatpasesSalida' ,  (req: Request, res:Response)=>{
            let ps = new pasesSalida();
            let params = req.body;
            ps.catalogoEspecifico( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                return res.status(200).send( respuesta )
                }else{
                return res.status(400).send(result)
                }
                });
        });
      /* Insertar Pases de Salida */
    app.put('/paseSalida' ,  (req: Request, res:Response)=>{
      let ps = new pasesSalida();
      let params = req.body;
      ps.CrearPaseSalida( params ).then(async (respuesta: any) => {
      const result:  dataApi = await respuesta;
          if(!result.hasError){
          return res.status(200).send( respuesta )
          }else{
          return res.status(400).send(result)
          }
          });
    }); 

         /* Aprobar Pases de Salida */
    app.put('/AprobarpaseSalida' ,  (req: Request, res:Response)=>{
   let ps = new pasesSalida();
   let params = req.body;
   ps.AprobarPaseSalida( params ).then(async (respuesta: any) => {
   const result:  dataApi = await respuesta;
       if(!result.hasError){
       return res.status(200).send( respuesta )
       }else{
       return res.status(400).send(result)
       }
       });
 }); 

          /* Eliminar Pases de Salida */
    app.delete('/EliminarpaseSalida' ,  (req: Request, res:Response)=>{
    let ps = new pasesSalida();
    let params = req.body;
    ps.EliminarPaseSalida( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
        if(!result.hasError){
        return res.status(200).send( respuesta )
        }else{
        return res.status(400).send(result)
        }
        });
  }); 

            /* Pases de Salida Historico*/
    app.get('/paseSalidaH' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.PasesSalidaHistorico( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

     /* Pases de Salida Estandar*/
    app.get('/paseSalidaE' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.cargarPasesSalidaEstandar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

                        /* Pases de Salida Estandar*/
    app.put('/paseSalidaE' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.insertarPasesSalidaEstandar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

                             /* Eliminar Pases de Salida Estandar*/
    app.delete('/paseSalidaE' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.eliminarPasesSalidaEstandar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

    app.get('/paseSalidaPorton' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.query;
        ps.PaseSalidaPorton( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

/* PASES DE SALIDA FINANZAS */
     /* Pases de Salida FINANZAS*/
     app.get('/paseSalidaf' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.query;
        ps.cargarPasesSalidaFinanzas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 
     /* Pases de Salida FINANZAS Pendiente */
     app.get('/paseSalidafP' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.query;
        ps.cargarPasesSalidaFinanzasPendientes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

           /* Pases de Salida FINANZAS Historico */
     app.get('/paseSalidafH' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.query;
        ps.cargarPasesSalidaFinanzasHistorico( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      });
                        /* Pases de Salida FINANZAS*/
    app.put('/paseSalidaf' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.insertarPasesSalidaFinanzas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

                             /* Eliminar Pases de Salida FINANZAS*/
    app.delete('/paseSalidaf' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.eliminarPasesSalidaFinanzas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 

                             /* Eliminar Pases de Salida FINANZAS*/
    app.put('/ApaseSalidaf' ,  (req: Request, res:Response)=>{
        let ps = new pasesSalida();
        let params = req.body;
        ps.aprobarPasesSalidaFinanzas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
            return res.status(200).send( respuesta )
            }else{
            return res.status(400).send(result)
            }
            });
      }); 


export default app;