import { error } from 'console';
import { Response, Router, Request } from 'express';
import  multer  from 'multer';
import path, { normalize } from 'path';
import { v4 as uuidv4 } from 'uuid';
const app : Router = Router();
//const rutaCarga = '/src/public/ssmoa';

/* Destino de Carga */ 
const storage = multer.diskStorage({
    filename: ( req , file , cb)=>{   
        const filetypes = /jpeg|jpg|png/;
        const mimetype   = filetypes.test(file.mimetype);
        if ( mimetype )        
        {  
            let codigo = uuidv4();
        funcion  ( '/uploads/'+codigo + path.extname(file.originalname) );
        return cb( null, codigo + path.extname(file.originalname)) }
        else{
            return cb( null, 'error')   
        };
    } ,
    destination: './uploads',

});

const funcion = (nombre: string)=>{
    let ficheros : any[]=[];
   if(nombre){
    ficheros.push(nombre)
    console.log(ficheros)
   }
}
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
}).fields([{ name : "file", maxCount : 10}]);

app.post('/upload', upload.fields([{ name : "file", maxCount : 10 }]), (req,res)=>{
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
        // const nombreArchivo = file?.path;
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