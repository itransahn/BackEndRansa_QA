import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import retenciones from '../../controllers/finanzas/retenciones';
import { dataApi } from '../../interfaces/dataApi';
const app: Router = Router();

/* Proveedor */
app.get('/proveedores', (req: Request, res:Response)=>{
let ret = new retenciones()
    let params = req.body;
     ret.Proveedores( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Insertar Proveedor */
app.put('/Iproveedores', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.insertarProveedor( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    /* Actualizar Proveedor */
app.put('/Aproveedores', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.actualizarProveedor( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Actualizar Proveedor */
app.post('/Eproveedores', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.actualizarEstadoProveedor( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


            /* Actualizar Proveedor */
app.put('/retencion', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.insertarRetención( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

            /* Cargar Retención */
app.post('/Cargarretencion', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.cargarRetencion( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

                /* Guardar Retención  Generada */
app.post('/guardarRetencion', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.guardarRetancionG( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

                /* cargar correlativo */
app.post('/cargarCorrelativo', (req: Request, res:Response)=>{
                    let ret = new retenciones()
                        let params = req.body;
                         ret.cargarCorrelativo( params ).then(async (respuesta: any) => {
                        const result:  dataApi = await respuesta;
                            if(!result.hasError){
                                return res.status(200).send( respuesta )
                            
                            }else{
                                return res.status(400).send(result)
                            }
                    });
                    })

/* Estado retencion */
app.post('/estadoRetencion', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.cambiarEstadoRetencion( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    /* retencion Generada */
app.post('/cargarRetencionG', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.cargarRetencionG( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* ver retenciones generadas  */
app.post('/retencionesGeneradasH', (req: Request, res:Response)=>{
    let ret = new retenciones()
        let params = req.body;
         ret.verRetencionesGeneradas( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

export default app;

