import { Router, Request, Response } from 'express';
import { ppid } from 'process';
import { encriptar } from '../../classes/Encriptacion';

import auth from '../../controllers/auth/auth';
import { verifyToken } from '../../controllers/auth/authController';

import login from '../../controllers/auth/loginController';
import { dataApi, loginI } from '../../interfaces/dataApi';
const app: Router = Router();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

app.get('/categorias', (req: Request, res:Response)=>{


let menus  = new auth();
menus.categorias( ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
      
            return res.status(200).send( )
     
        }else{
            return res.status(400).send(result)
        }
});
})

app.post('/login', (req: Request, res: Response) => {
    let params = req.body;
    let autenticacion  = new login();
    autenticacion.login(params).then(async (respuesta: any) => {
        const result: loginI  = await respuesta;
        if(!result.hasError){
                req.body.usuario = result.data.dataUsuario
                return res.status(200).send({
                          result
                });
            }else{
                return res.status(200).send({result})
            }
    });
});

app.post('/validarMenu', (req: Request, res: Response) => {
    let params = req.body;
    let autenticacion  = new auth();
    autenticacion.validarMenu(params).then(async (respuesta: any) => {
        const result: dataApi  = await respuesta;
        if(!result.hasError){
            if ( Number(result.data.Table0[0]['codigo']) === 1 ){
                return res.status(200).send({  access : true });
            }else{
                return res.status(200).send({ access : false  });
            }
                
            }else{
                return res.status(200).send({result})
            }
    });
});

export default app;

