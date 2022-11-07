import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import permiso from '../../controllers/Seguridad/permisosController';

import {dataApi} from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

/* Rutas Permisos Menu Hijo */

    /* Ver permisos Menu */
    app.get('/verPmenu' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.verPermisosHijo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Insertar permisos Menu */
    app.post('/insertarPmenu' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.insertarPermisosHijo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })
   
    /* Actualizar permisos Menu */
    app.put('/actualizaPmenu' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.actualizarPermisosHijo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })
       /* Actualizar permisos Menu */
  app.delete('/eliminarPmenu' ,  (req: Request, res:Response)=>{
   let per = new permiso();
       let params = req.body;
       per.eliminarPermisosMenu( params ).then(async (respuesta: any) => {
       const result:  dataApi = await respuesta;
           if(!result.hasError){
               return res.status(200).send( respuesta )
           
           }else{
               return res.status(400).send(result)
           }
   });
   })



    /* Quitar permisos Menu */
    app.put('/bajaPmenu' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.quitarPermisosMenuHijo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
        });
        })
/* Rutas Permisos Módulos */
    /* Ver permisos Módulo */
    app.get('/verPmodulo' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.verPermisosModulo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })
    /* Ver permisos Módulo Especifico */
    app.post('/verPmoduloEsp' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.verPermisosModuloEsp( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

          /* Eliminar permisos Módulo Especifico */
    app.delete('/bajaPermisosModulo' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.eliminarPermisosModulo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })

         /* Insertar permisos Módulo */
    app.post('/insertarPmodulo' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.insertarPermisosModulo( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )       
                }else{
                    return res.status(400).send(result)
                }
        });
        })   
         /* Quitar permisos Módulo */
    app.post('/bajarPmodulo' ,  (req: Request, res:Response)=>{
            let per = new permiso();
                let params = req.body;
                per.quitarPermisosModulo( params ).then(async (respuesta: any) => {
                const result:  dataApi = await respuesta;
                    if(!result.hasError){
                        return res.status(200).send( respuesta )       
                    }else{
                        return res.status(400).send(result)
                    }
            });
            })  
     /* Permisos Hijos */       

            /* Ver permisos menú hijo especifico */
    app.post('/verPmenuEsp' ,  (req: Request, res:Response)=>{
        let per = new permiso();
            let params = req.body;
            per.verPermisosMenuEsp( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                
                }else{
                    return res.status(400).send(result)
                }
        });
        })



            
export default app;

