import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import mantenimientoT from '../../controllers/Transporte/mantenimientosTController';

import { dataApi } from '../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* ver Clientes T */
    app.post('/clientesT' ,  (req: Request, res:Response)=>{
        let cam = new mantenimientoT();
        let params = req.body;
        cam.verClientesT( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })
   
    /* ver proveedores T */
    app.post('/proveedoresT' ,  (req: Request, res:Response)=>{
        let cam = new mantenimientoT();
        let params = req.body;
        cam.verProveedoresT( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )   
        }else{
            return res.status(400).send(result)
        }
        });
        })

        /* actualizar clientes T */
    app.put('/AclienteT' ,  (req: Request, res:Response)=>{
        let cam = new mantenimientoT();
        let params = req.body;
        cam.actualizarClientesTransportes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )   
        }else{
            return res.status(400).send(result)
        }
        });
        })
        /* actualizar Proveedor T */
    app.put('/AproveedorT' ,  (req: Request, res:Response)=>{
            let cam = new mantenimientoT();
            let params = req.body;
            cam.actualizarProveedoresTransportes( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )   
            }else{
                return res.status(400).send(result)
            }
            });
            })

        /* catalogo transporte */
    app.get('/catalogoT' ,  (req: Request, res:Response)=>{
            let cam = new mantenimientoT();
            let params = req.body;
            cam.catalogoTransporte( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )   
            }else{
                return res.status(400).send(result)
            }
            });
            })
    /* Catalogo detallado transporte */
    app.get('/catalogoDetT' ,  (req: Request, res:Response)=>{
            let cam = new mantenimientoT();
            let params = req.body;
            cam.catalogoTransporteDetallado( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )   
            }else{
                return res.status(400).send(result)
            }
            });
            })   
    /* Insertar Cliente transporte */
    app.put('/insertClienteT' ,  (req: Request, res:Response)=>{
        let cam = new mantenimientoT();
        let params = req.body;
        cam.insertarClientesTransportes( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )   
        }else{
            return res.status(400).send(result)
        }
        });
        }) 
 /* Catalogo detallado transporte */
 app.put('/insertProveedorT' ,  (req: Request, res:Response)=>{
    let cam = new mantenimientoT();
    let params = req.body;
    cam.insertarProveedoresTransportes( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )   
    }else{
        return res.status(400).send(result)
    }
    });
    }) 

 /* Dimensiones transporte */
 app.put('/insertDimensiones' ,  (req: Request, res:Response)=>{
    let cam = new mantenimientoT();
    let params = req.body;
    cam.insertarDimensiones( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )   
    }else{
        return res.status(400).send(result)
    }
    });
    }) 

 /* Tipos de Unidad transporte */
 app.put('/insertTiposUnidad' ,  (req: Request, res:Response)=>{
    let cam = new mantenimientoT();
    let params = req.body;
    cam.insertarTipoUnidad( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )   
    }else{
        return res.status(400).send(result)
    }
    });
    }) 

     /* Relación transporte Cliente */
 app.get('/transCliente' ,  (req: Request, res:Response)=>{
    let cam = new mantenimientoT();
    let params = req.body;
    cam.transCliente( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )   
    }else{
        return res.status(400).send(result)
    }
    });
    }) 
    /* Relación transporte Proveedor */
app.get('/transProveedor' ,  (req: Request, res:Response)=>{
   let cam = new mantenimientoT();
   let params = req.body;
   cam.transProveedor( params ).then(async (respuesta: any) => {
   const result:  dataApi = await respuesta;
   if(!result.hasError){
       return res.status(200).send( respuesta )   
   }else{
       return res.status(400).send(result)
   }
   });
   }) 

       /* Relación transporte Proveedor */
app.post('/relacionRoles' ,  (req: Request, res:Response)=>{
    let cam = new mantenimientoT();
    let params = req.body;
    cam.verRelacionesRoles( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )   
    }else{
        return res.status(400).send(result)
    }
    });
    }) 


    
       /* Relación camión motorista */
app.put('/camionMotorista' ,  (req: Request, res:Response)=>{
    let cam = new mantenimientoT();
    let params = req.body;
    cam.CamionMotorista( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )   
    }else{
        return res.status(400).send(result)
    }
    });
    }) 

    
       /* Eliminar relación camión motorista */
       app.delete('/camionMotorista' ,  (req: Request, res:Response)=>{
        let cam = new mantenimientoT();
        let params = req.body;
        cam.EliminarCamionMotorista( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )   
        }else{
            return res.status(400).send(result)
        }
        });
        }) 
            
       /* ver relación camión motorista */
       app.get('/camionMotorista' ,  (req: Request, res:Response)=>{
        let cam = new mantenimientoT();
        let params = req.body;
        cam.verUnionesMotCamion( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )   
        }else{
            return res.status(400).send(result)
        }
        });
        }) 

export default app;

