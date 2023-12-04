import { Router, Request, Response } from 'express';
import jwt  from 'jsonwebtoken';


const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';


export function generarToken( jsonToSign : any){    
const token = jwt.sign({
        data : jsonToSign
       }, SECRET_KEY, { expiresIn: '10m'}
       ) 
       return token;
}


export function decodeToken( token: any ){
    try {
        var decoded = jwt.verify(token, SECRET_KEY);
        return decoded;
    } catch (error) {
        return null;
    }

}

export function verifyToken(req: Request, res:Response, next:any){
    const token = req.headers['access-token']

    // console.log(token)
        if(token){
                // res.sendStatus(401).json({
                //     mensaje : 'EXISTE'
                // })
            jwt.verify( String(token), SECRET_KEY, (err, decoded)=>{
                if(err){    
                    return res.json({ mensaje: 'Token inválida' });
                }else{
                    req.body.decoded = decoded;    
                    next();
                }
            })    
            // next()
        }else{
            res.sendStatus(403).json({
                mensaje : 'NO EXISTE'
            })
        }
}



export default app;


