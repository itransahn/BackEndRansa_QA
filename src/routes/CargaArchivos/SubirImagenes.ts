import { error } from 'console';
import { Response, Router, Request } from 'express';
import  multer  from 'multer';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
const app : Router = Router();
//const rutaCarga = '/src/public/ssmoa';

/* Destino de Carga */ 
const storage = multer.diskStorage({
    filename: ( req , file , cb)=>{   
        const filetypes = /jpeg|jpg|png/;
        const mimetype   = filetypes.test(file.mimetype);
        if ( mimetype )
        {  return cb( null, uuidv4() + path.extname(file.originalname)) }
        else{
            return cb( null, 'error')   
        };
    } ,
    destination: './uploads',

});


// const storage = multer.diskStorage({
//         destination: ( req, file, cb) =>{
//                 cb(null,'./uploads')
//         },
//         filename : (req, file, cb) => {
//             const ext = file.originalname.split('.').pop()
//             cb(null,`${Date.now()}.${ext}` )
//         }
//     });
       
const upload = multer ( { storage })

const CargadeImagen = multer({
    storage,
    dest: './uploads',
    limits: {fileSize: 55000000},
    fileFilter: (req, file , cb)=>{
        const filetypes = /jpeg|jpg|png/;
        const mimetype   = filetypes.test(file.mimetype);
        if ( mimetype )
        { return{
            error : false
        } }
        return{
            error : true
        } ;
    }
}).single('file');

app.post('/upload', upload.single('file'), (req,res)=>{
    const file = req.file;

    // console.log(file?.path)
    if(!file){
      res.send({
         data: [{
             path: "Archivo no Encontrado",
         }],
         errors: [],
         hasError: true
     });
     }else{
        const nombreArchivo = file?.path;
        // console.log(nombreArchivo.search('error') )
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


// const err = new Error('Solamente .png, .jpg and .jpeg como formato Permitido!')
// err.name = 'ExtensionError'
// return cb(err);

//Carga de Imagen
app.post('/cargaI',  (req : Request , res: Response)=>{
    return {
        mensaje : 'hola'
    }
//     const file = req.file;
//    if(!file){
//      res.send('Archivo No Encontrado')
//      res.send({
//         data: [{
//             path: "Archivo no Encontrado",
//         }],
//         errors: [],
//         hasError: true
//     });
//     }
//     const nombreArchivo = file?.path;
//     res.send({
//         data: [{
//             path: nombreArchivo,
//         }],
//         errors: [],
//         hasError: false
//     });
})


export default app;