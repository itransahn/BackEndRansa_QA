import {dataApi} from "../interfaces/dataApi";
export function errorMensaje( mensaje : any ) {
    let respuesta : dataApi = {
        data      :  [],
        errors    :  [{mensaje}],
        hasError  :  true
    }
     return respuesta; 
    }


     export function errorMensajePersonaliado(mensaje : string , citricidad: number = 1000) {
            if ( citricidad === 1000){
                mensaje = 'ocurrio un error interno, Notifique al Administrador';
            }
            let respuesta : dataApi = { data : null, errors : [{codigo: -1, descripcion: mensaje , citricidad}], hasError : true };
     }


     export function exitoMensaje(mensaje : any ) {
         let respuesta: dataApi = {
             data : [mensaje], errors: [], hasError : false
         }
         return respuesta;
     }
