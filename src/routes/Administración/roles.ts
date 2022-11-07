import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import roles from '../../controllers/Administración/rolesController';
import {dataApi} from '../../interfaces/dataApi';
const app: Router = Router();

/* Ver todos los roles */
app.get('/roles' ,  (req: Request, res:Response)=>{
let rol = new roles();
    let params = req.body;
    rol.sp_verRoles( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Ver roles especificos */
app.get('/rolEspecifico' ,  (req: Request, res:Response)=>{
    let rol = new roles();
        let params = req.body;
        rol.sp_verRolEspecifico( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Crear Rol */
app.post('/crearRol' ,  (req: Request, res:Response)=>{
    let rol = new roles();
        let params = req.body;
        rol.crearRol( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Actualizar Rol */
app.put('/actualizarRol' ,  (req: Request, res:Response)=>{
    let rol = new roles();
        let params = req.body;
        rol.actualizarRol( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

            /* Actualizar Rol */
app.delete('/eliminarRol' ,  (req: Request, res:Response)=>{
    let rol = new roles();
        let params = req.body;
        rol.eliminarRol( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

export default app;

