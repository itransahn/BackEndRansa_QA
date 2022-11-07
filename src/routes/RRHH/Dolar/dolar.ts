import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController'; 
import dolar from '../../../controllers/RRHH/Dolar/dolarController';

import {dataApi} from '../../../interfaces/dataApi';

const app: Router = Router();

const SECRET_KEY = 'wv+BWnX\qRap|S[%f/jd!?pq*O[Mg$Z+|/g/c;(]X(O%CB[Y[[&Gi)z##WEHP?u6<a0f_h3Q%V}_!>N<DElTSi>t=!R{jMtu}j/Eu5Xrb*x>)1$50G|,:xg+Y1OM}H183.b5MNH>5L-7u7tu<Dyc,JHDuqHZy68f71kFBjI4w|T\!{';

    /* CARGAR Dolar Agrupado */
    app.post('/dolarAcumulado' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.dolarAgrupado( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })
    
    /* Detalle Dolar */
    app.post('/dolarDetalle' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.dolarDetalle( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

            /* Dolar Diario */
    app.get('/dolarDiario' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.dolarDiario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta ) 
        }else{
            return res.status(400).send(result)
         }
        });
        })

            /* Dolar Agrupado Emp */
    app.post('/dolarAgrupadoEmp' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.dolarAgrupadoEmp( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

            /* Ver Cajeo Dolar TR */
    app.get('/canjeoDolar' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.canjeoDolar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
        });
        })

           /* usuarios Permitidos Cafeteria */
    app.get('/usuariosPermitidosC' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.usuariosPermitidosC( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        }else{
            return res.status(400).send(result)
        }
        });
        })


            /* Insertar usuario Permitidos Cafeteria */
    app.post('/insertarPermisos' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.insertarPermisoDolar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        }else{
            return res.status(400).send(result)
         }
        });
        })


        
            /* Actualizar Permitidos Cafeteria */
    app.put('/actualizarPermisos' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.actualizarPermisoDolar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        }else{
            return res.status(400).send(result)
        }
        });
        })


            /* Insertar Dolar */
    app.post('/insertarDolar' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.insertarDolar( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        }else{
            return res.status(400).send(result)
        }
        });
        })

        
            /* Cargar Usuario */
    app.post('/validarUsuario' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.cargarUsuario( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
            }
        });
        })

                    /* Cambiar Estado de usuario permisos cafeteria */
    app.put('/estadoPcaf' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.estadoUsuarioPermiso( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            }else{
                return res.status(400).send(result)
                }
        });
        })

        /* Mantenimiento de canjeos de dolar  */
           /* Ver canjeos de día actual  */
        app.put('/controlCafeteria' ,  (req: Request, res:Response)=>{
            let dol = new dolar();
            let params = req.body;
            dol.verCanejosG( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
            });
            })
                    /* Ver canjeos de día seleccionado  */
         app.put('/controlCafeteria' ,  (req: Request, res:Response)=>{
            let dol = new dolar();
            let params = req.body;
            dol.verCanejosP( params ).then(async (respuesta: any) => {
            const result:  dataApi = await respuesta;
                if(!result.hasError){
                    return res.status(200).send( respuesta )
                }else{
                    return res.status(400).send(result)
                }
                });
                })
            
                     /* Actualizar el control de canjeo en la cafeteria */
       app.post('/UpdcontrolCafeteria' ,  (req: Request, res:Response)=>{
        let dol = new dolar();
        let params = req.body;
        dol.UpdateCanjeo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        }else{
            return res.status(400).send(result)
         }
        });
        })

              /* Eliminar el control de canjeo en la cafeteria */
app.delete('/DelcontrolCafeteria' ,  (req: Request, res:Response)=>{
  let dol = new dolar();
  let params = req.body;
  dol.DeleteCanjeo( params ).then(async (respuesta: any) => {
  const result:  dataApi = await respuesta;
  if(!result.hasError){
      return res.status(200).send( respuesta )
  }else{
      return res.status(400).send(result)
   }
  });
  })


    /* Ver Dolares por CCO */
 app.post('/dolarCCO' ,  (req: Request, res:Response)=>{
   let dol = new dolar();
   let params = req.body;
   dol.dolarCCO( params ).then(async (respuesta: any) => {
   const result:  dataApi = await respuesta;
   if(!result.hasError){
       return res.status(200).send( respuesta )
   }else{
       return res.status(400).send(result)
    }
   });
   })

      /* Ver Dolares por Empleado */
 app.post('/dolarEmpleado' ,  (req: Request, res:Response)=>{
    let dol = new dolar();
    let params = req.body;
    dol.dolarEmpleado( params ).then(async (respuesta: any) => {
    const result:  dataApi = await respuesta;
    if(!result.hasError){
        return res.status(200).send( respuesta )
    }else{
        return res.status(400).send(result)
     }
    });
    })



export default app;

