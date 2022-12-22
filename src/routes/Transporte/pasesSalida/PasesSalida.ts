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

          /* Aprobar Pases de Salida */
    app.delete('/EliminarpaseSalida' ,  (req: Request, res:Response)=>{
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

export default app;