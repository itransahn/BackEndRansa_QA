import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import permisosT from '../../controllers/Transporte/permisosController';

import { dataApi } from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* ver roles asignados a transporte */
    app.get('/permisosT' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.rolesSupervisor( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })
    
           /* insertar roles sobre supervisor Transporte */
    app.post('/insertRolesT' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.InsertarRolSupervisor( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                 /* Eliminar roles a supervisor */
    app.delete('/rolesSupervisor' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.eliminarRolSupervisor( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

        /* Relación entre cliente - transporte  */
    app.post('/clienteTransporte' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.relacionTranClien( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                /* Relación entre cliente - transporte ELIMINAR */
    app.delete('/clienteTransporte' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.relacionTranClien( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                       /* Relación entre proveedor - transporte */
    app.post('/proveedorTransporte' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.relacionTranProvee( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })


                 /* Relación entre proveedor - transporte ELIMINAR */
    app.delete('/proveedorTransporte' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.relacionTranProvee( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

                /* Relación entre proveedor - transporte ELIMINAR */
     app.delete('/proveedorTransporte' ,  (req: Request, res:Response)=>{
        let mot = new permisosT();
        let params = req.body;
        mot.relacionTranProvee( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        }else{
            return res.status(400).send(result)
                    }
                    });
                    })

                 /* Insertar Relación entre rol - cliente */
    app.post('/rolCliente' ,  (req: Request, res:Response)=>{
       let mot = new permisosT();
       let params = req.body;
       mot.relacionRolCliente( params ).then(async (respuesta: any) => {
       const result:  dataApi = await respuesta;
       if(!result.hasError){
           return res.status(200).send( respuesta )
       }else{
           return res.status(400).send(result)
                   }
                   });
                   })        
                 /* Relación entre rol - cliente ELIMINAR*/
   app.delete('/rolCliente' ,  (req: Request, res:Response)=>{
                        let mot = new permisosT();
                        let params = req.body;
                        mot.EliminarRelacionRolCliente( params ).then(async (respuesta: any) => {
                        const result:  dataApi = await respuesta;
                        if(!result.hasError){
                            return res.status(200).send( respuesta )
                        }else{
                            return res.status(400).send(result)
                        }
                        });
                })  
                
                     /* Relación entre rol - proveedor */
        app.post('/rolProveedor' ,  (req: Request, res:Response)=>{
           let mot = new permisosT();
           let params = req.body;
           mot.relacionRolProveedor( params ).then(async (respuesta: any) => {
           const result:  dataApi = await respuesta;
           if(!result.hasError){
               return res.status(200).send( respuesta )
           }else{
               return res.status(400).send(result)
           }
           });
            })  
                   /* Relación entre rol - proveedor ELIMINAR*/
         app.delete('/rolProveedor' ,  (req: Request, res:Response)=>{
          let mot = new permisosT();
          let params = req.body;
          mot.EliminarRelacionRolProveedor( params ).then(async (respuesta: any) => {
          const result:  dataApi = await respuesta;
          if(!result.hasError){
              return res.status(200).send( respuesta )
          }else{
              return res.status(400).send(result)
          }
          });
           }) 

                /* Relación entre rol - proveedor ELIMINAR*/
               app.post('/cambiarEstado' ,  (req: Request, res:Response)=>{
                let mot = new permisosT();
                let params = req.body;
                mot.cambiarEstadoTablas( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
                });
                 }) 
    
export default app;

