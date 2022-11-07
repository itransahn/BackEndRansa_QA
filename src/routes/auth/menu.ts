import { Router, Request, Response } from 'express';
import { verifyToken } from '../../controllers/auth/authController';

import login from '../../controllers/auth/loginController';
import menu from '../../controllers/auth/menuController';
import {dataApi} from '../../interfaces/dataApi';
const app: Router = Router();
const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';



app.post('/menus' ,  (req: Request, res:Response)=>{
let params = req.body;
let menus  = new menu();
menus.menus( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

export default app;

