import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';
import CAB from '../../controllers/finanzas/CAB';
import { dataApi } from '../../interfaces/dataApi';
const app: Router = Router();

    /* Ver Empleados CAB */
app.get('/empleadoCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.query;
        cab.empleadosCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )         
            }else{
                return res.status(400).send(result)
            }
    });
    })
    /* Insertar Empleado CAB */
app.post('/empleadoCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.CrearempleadoCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )         
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Actualizar Empleado CAB */
app.put('/empleadoCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.ActualizarempleadoCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )         
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Actualizar Estado Empleado CAB */
app.put('/empleadoCabEst', (req: Request, res:Response)=>{
        let cab = new CAB()
            let params = req.body;
            cab.estadoEmpleadoCab( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )         
                }else{
                    return res.status(400).send(result)
                }
        });
        })

    /* Aprobar  Viaje CAB */
app.get('/AprobarviajeCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.query;
        cab.AprobarViaje( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 
    /* Ver Aprobadores CAB */
app.get('/aprobadorCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.VerAprobadorCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )         
            }else{
                return res.status(400).send(result)
            }
    });
    })
    /* Insertar Aprobador CAB */
app.post('/aprobadorCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.CrearAprobadorCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 
    /* Aprobar Viaje */
app.post('/aprobacion', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.AprobacionViaje( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 

    /* Actualizar Aprobador CAB */
app.put('/aprobadorCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.ActualizarAprobadorCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 

    /* Tarifas CAB */
app.get('/tarifasCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.query;
        cab.CargarTarifa( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 

    /* Tarifas CAB */
app.post('/tarifasCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.CargarTarifaMasivoCAB( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 

    /* Ver Viaje CAB */
app.get('/viajeCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.query;
        cab.VerViajeCab( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 

    /* viaje Especifico */
app.get('/viajeEspecifico', (req: Request, res:Response)=>{
        let cab = new CAB()
            let params = req.query;
            cab.viajeEspecifico( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )     
                }else{
                    return res.status(400).send(result)
                }
        });
        }) 

    /* Ver Viaje CAB */
app.get('/viajeCab2', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.query;
        cab.VerViajeCab2( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 
    
    /* Viaje CAB */
app.post('/viajeCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.CrearViajeCab( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 

    /* Viaje CAB */
app.post('/cancelarViaje', (req: Request, res:Response)=>{
        let cab = new CAB()
            let params = req.body;
            cab.cancelacionViaje( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )     
                }else{
                    return res.status(400).send(result)
                }
        });
        }) 

    /* Incidencia Viaje CAB */
app.post('/incidenciaViajeCab', (req: Request, res:Response)=>{
    let cab = new CAB()
        let params = req.body;
        cab.IncidenciaViajeCab( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )     
            }else{
                return res.status(400).send(result)
            }
    });
    }) 
export default app;