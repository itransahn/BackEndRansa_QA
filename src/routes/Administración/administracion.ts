import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController'; 
import administracion from '../../controllers/Administración/administracionController';
import {dataApi} from '../../interfaces/dataApi';
import { encriptar } from '../../classes/Encriptacion';
const app: Router = Router();

/* Ver todos los usuarios */
app.get('/usuarios' ,  (req: Request, res:Response)=>{
let admin = new administracion();
    let params = req.body;
    admin.sp_verUsuarios( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* Usuario especifico */
app.post('/usuarioEspecifico' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = req.body;
        admin.sp_verUsuarioEspecificado( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* Crear Usuario */
app.post('/crearUsuario' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = req.body;
        params.contraD = req.body.contrasena
        params.contrasena = encriptar(req.body.contrasena)
        admin.crearUsuario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Actualizar Usuario */
app.put('/actualizarUsuario' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = req.body;
        admin.actualizarUsuario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

            /* Actualizar ESTADO Usuario */
app.put('/actualizarEUsuario' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = req.body;
        admin.actualizarEstadoUsuario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

               /* Contraseña Usuario Admin */
app.put('/contraUsuarioAdmin' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = {
          idUsuario    : req.body.idUsuario ,
          contraActual : req.body.contraNueva,
          contraNueva  : encriptar(req.body.contraNueva), 
          contraNoEnc  : req.body.contraNueva
        }
        console.log(params)
        admin.CambiocontraUsuarioA( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta)
            }else{
                return res.status(400).send(result)
            }
    });
    })

                   /* Cambio de contraseña por administrador */
app.put('/updateContraAdmin' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = {
          idUsuario    : req.body.idUsuario ,
          contra      : req.body.contra
        }
        admin.UpdaContra( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta)
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Contraseña Usuario Administrador */
app.put('/contraUsuarioUs' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        // let params = req.body;
        let params = {
        idUsuario : req.body.idUsuario ,
        contraActual : req.body.contraActual ,
        contraNueva : encriptar(req.body.contraNueva ),
        }
        admin.CambiocontraUsuarioA( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

            /* Contraseña Usuario Usuario*/
app.put('/contraUsuarioSis' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = {
            idUsuario      : req.body.idUsuario,
            contraAnterior : req.body.contraAnterior,
            contraActual   : req.body.contraActual,
            accion  : 1
        };
        // console.log(params)
        admin.CambiocontraUsuarioU( params ).then(async (respuesta: any) => {
        const result:  any  = await respuesta;
        return res.status(200).send( result )   
        // if(!result.hasError){
        //     }else{
        //         return res.status(400).send(result)
        //     }
    });
    })

    /* Catálogo */
app.get('/catalogo' ,  (req: Request, res:Response)=>{
    let admin = new administracion();
        let params = req.body;
        admin.catalogo( params ).then(async (respuesta: any) => {
    
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


app.post('/parametrosF', (req:Request, res: Response )=>{
    let admin = new administracion();
    let params = req.body;
    admin.parametrosFactura( params).then( async( respuesta: any)=>{
        const result : dataApi = await respuesta;
            if(!result.hasError){           
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }

    } )
})


export default app;

