import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import infor from '../../controllers/Administración/InforController';
import {dataApi} from '../../interfaces/dataApi';
import { encriptar } from '../../classes/Encriptacion';
const app: Router = Router();


/* Ver Mascaras */
app.get('/mascaras' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.verMascaras( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* Ver Propietarios */
app.get('/propietarios' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.verPropietarios( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    /* Insertar Propietario */
app.put('/Propietario' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.insertarPropietario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Insertar Mascara */
app.put('/Mascara' ,  (req: Request, res:Response)=>{
    let admin = new infor();
        let params = req.body;
        admin.insertarMascara( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    export default app;