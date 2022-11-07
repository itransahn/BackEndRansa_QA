import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import mantenimientos from '../../controllers/Administración/mantenimientosController';
import {dataApi} from '../../interfaces/dataApi';
const app: Router = Router();
/* CENTROS DE COSTO */ 

/* Ver  CCO */
app.get('/cco' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.cco( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )        
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Insertar  CCO */
app.post('/cco' ,  (req: Request, res:Response)=>{
let admin = new mantenimientos();
    let params = req.body;
    admin.nuevoCco( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Actualizar CCO */
app.put('/cco' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.actualizarCco( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Eliminar CCO */
app.delete('/cco' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.eliminarCco( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* CENTROS DE COSTO */ 



/* AREAS DE RANSA */ 
/* Ver  AREAS */
app.get('/area' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.area( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )        
            }else{
                return res.status(400).send(result)
            }
    });
    })
 
/* Insertar  AREAS */
app.post('/area' ,  (req: Request, res:Response)=>{
let admin = new mantenimientos();
    let params = req.body;
    admin.nuevoArea( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Actualizar AREAS */
app.put('/area' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.actualizarArea( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Eliminar AREAS */
app.delete('/area' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.eliminarArea( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


/* AREAS DE RANSA */ 



/* SEDES */ 
/* Ver  Sede */
app.get('/sede' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.sede( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )        
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Insertar Sede */
app.post('/sede' ,  (req: Request, res:Response)=>{
let admin = new mantenimientos();
    let params = req.body;
    admin.nuevaSede( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Actualizar AREAS */
app.put('/sede' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.actualizarSede( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Eliminar AREAS */
app.delete('/sede' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.eliminarSede( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


/* SEDES */ 


/* SANGRE */ 
/* Ver  sangre */
app.get('/sangre' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.tipoSangre( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )        
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Insertar sangre */
app.post('/sangre' ,  (req: Request, res:Response)=>{
let admin = new mantenimientos();
    let params = req.body;
    admin.nuevoTipoSangre( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Actualizar sangre */
app.put('/sangre' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.actualizarTipoSangre( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Eliminar sangre */
app.delete('/sangre' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.eliminarTipoSangre( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* SANGRE */ 



/* PUESTO */ 
/* Ver  sangre */
app.get('/puesto' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.VerPuestos( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )        
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Insertar sangre */
app.post('/puesto' ,  (req: Request, res:Response)=>{
let admin = new mantenimientos();
    let params = req.body;
    admin.InsertarPuesto( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Actualizar sangre */
app.put('/puesto' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.ActualizarPuesto( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Eliminar sangre */
app.delete('/puesto' ,  (req: Request, res:Response)=>{
    let admin = new mantenimientos();
        let params = req.body;
        admin.eliminarPuesto( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* PUESTO */ 

export default app;

