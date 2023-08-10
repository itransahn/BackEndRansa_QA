import { error } from 'console';
import { Response, Router, Request } from 'express';
import  multer  from 'multer';
import path, { normalize } from 'path';
import { v4 as uuidv4 } from 'uuid';
const app : Router = Router();
import carga from '../../controllers/Ficheros/cargarArchivos';
import { dataApi } from '../../interfaces/dataApi';
//const rutaCarga = '/src/public/ssmoa';

let incidencia : any;
let tipo       : any;

/* Destino de Carga */ 
const storage = multer.diskStorage({
    filename: ( req , file , cb)=>{   
        const filetypes = /jpeg|jpg|png/;
        const mimetype   = filetypes.test(file.mimetype);
        if ( mimetype )        
        {  
        let codigo = uuidv4();
        funcion  ( '/uploads/'+ codigo + path.extname(file.originalname) );
        return cb( null, codigo + path.extname(file.originalname)) }
        else{
            return cb( null, 'error')   
        };
    },
    destination: './uploads',
});

const funcion = (nombre: string)=>{
    if(nombre && incidencia){
      let car = new carga();
      let params  =   {
        idIncidencia : incidencia,
        fichero: nombre,
        tipo   : tipo
        }
      car.cargarArchivo( params ).then(async (respuesta: any) => {
        const result:  dataApi = await respuesta;
            if(!result.hasError){
                return respuesta         
            }else{
                return respuesta
            }
    });
   }
}
     
const upload = multer ( { storage })

// const CargadeImagen = multer({
//     storage,
//     dest: './uploads',
//     limits: {fileSize: 55000000},
//     fileFilter: (req, file , cb)=>{
//         const filetypes = /jpeg|jpg|png/;
//         const mimetype   = filetypes.test(file.mimetype);
//         if ( mimetype )
//         { return{
//             error : false
//         } }
//         return{
//             error : true
//         } ;
//     }
// }).fields([{ name : "file", maxCount : 10}]);

app.post('/CargarItem',(req,res)=>{
    incidencia = req.body.item;
    tipo       = req.body.tipo; /* 1 Incidencia, 2 Auditoria*/
    if (incidencia){
        res.send({
            data: [{
                data : 'Enviado',
            }],
            errors: [],
            hasError: false
        });
    }})

app.post('/upload', upload.fields([{ name : "file", maxCount : 100 }]), (req , res)=>{
    const file = req.files;
    if(!file){
      res.send({
         data: [{
             path: "Archivo no Encontrado",
         }],
         errors: [],
         hasError: true
     });
     }else{
        const nombreArchivo = '';
     if ( nombreArchivo.search('error') == -1 ){
        res.send({
            data: [{
                data : 'Imagen Cargada',
                path : nombreArchivo,
            }],
            errors: [],
            hasError: false
        });
     }else{
        res.send({
            data: [{
                data : 'Favor Ingresar Formato Válido'
            }],
            errors: [],
            hasError: true
        });
     }
     }
   
})


interface files {
    fieldname     ? : string,
    originalname ? : string,
    encoding ? : string,
    mimetype ? : string,
    destination ? : string,
    filename ? : string,
    path ? : string,
    size ? : string,
}[]
export default app;