import { Router, Request, Response } from 'express';
import { verifyToken } from '../../../controllers/auth/authController'; 
import credito from '../../../controllers/RRHH/Crédito/creditoController';

// import login from '../../controllers/auth/loginController';
// import menu from '../../controllers/auth/menuController';
// import dataApi from '../../interfaces/dataApi';
import {dataApi} from '../../../interfaces/dataApi';
const app: Router = Router();

/* CARGAR Creditos actuales */
app.get('/credito' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.Credito( params ).then(async (respuesta: any) => {
    
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* CARGAR Creditos actuales SPS*/
app.get('/creditoSps' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.CreditoSps( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    /* CARGAR Creditos por X empleado */
app.post('/creditoacumulado' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.creditoAcumulado( params ).then(async (respuesta: any) => {
    
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

/* CARGAR Creditos por X empleado */
app.post('/creditoporEmpleado' ,  (req: Request, res:Response)=>{
let credit = new credito();
    let params = req.body;
    credit.creditoEmpleado( params ).then(async (respuesta: any) => {

    const result:  dataApi = await respuesta;
        if(!result.hasError){
            return res.status(200).send( respuesta )
        
        }else{
            return res.status(400).send(result)
        }
});
})

/* CARGAR Creditos Acumulado por empleado */
app.post('/creditoAgrupadoEmp' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.creditoAgrupadoEmp( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

    /* CARGAR Creditos Acumulado por empleado */
app.get('/creditoporFecha' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.creditoPorFecha( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

        /* Insertar Crédito */
app.post('/insertarCredito' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.insertarCredito( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    
            /* Ver Créditos */
app.get('/creditos' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.verCreditosG( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


            /* Ver Créditos */
app.put('/creditos' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.verCreditosP( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })

                /* Ver Créditos */
app.post('/Ucreditos' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.updateCredito( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


    
                /* Ver Créditos */
app.delete('/Dcreditos' ,  (req: Request, res:Response)=>{
    let credit = new credito();
        let params = req.body;
        credit.eliminarCredito( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return res.status(200).send( respuesta )
            
            }else{
                return res.status(400).send(result)
            }
    });
    })


export default app;

