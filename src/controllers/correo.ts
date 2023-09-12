import DbHelper from '../helpers/DbHelper';
import EnviarEmail from '../correo/correo';
import { errorMensaje } from '../classes/classes';


let Email = new EnviarEmail();
export default class Ejemplo {

    constructor() {
    }
    
    async resultadoConsulta() {

              
        const result = { mensaje: 'Prueba desde el controlador' }

        return result;
    }


    async ejemplo(parametros?: any) {

        // let conexionSql = new DbHelper();

        try {

            return await Email.enviarCorreo(1,{
                usuario : 'Mario Velasquez',
                correo  : 'velasquezjosue7@gmail.com' 
            });

        } catch (error) {

        }
    }

async primeraVez( params?:any ) {
        let detalle : String ='';
        let array : any[]= [];
        let viaje : String = '';
        if( params?.tipoViaje == 1){ viaje = 'Ida'}
        if( params?.tipoViaje == 2){ viaje = 'Retorno'}
        if( params?.tipoViaje == 3){ viaje = 'MultiParada'}

if( params?.tipoViaje != 3){
    detalle = params?.['origen'] + ' | ' + params?.['destino']     
}else{
    array = JSON.parse(params?.['multipleDestino']);
for(let i = 0; i<array.length; i++){
    detalle += array[i]?.Origen + '-' + array[i]?.Destino + ' | '
}

}
try {
return await Email.enviarCorreo( 3,
{
solicitado : params?.['solicitado'] ,
tipoViaje  : params?.['tipoViaje'] ,
detalle    : detalle,
FechaHora  : params?.['FechaHora'] ,
numero     : params?.['numero'] ,
correo     : params?.['correo'] ,
viaje      : viaje ,
                });
        } catch (error) {
                return {
                    hasError: true,
                    data: [{ mensaje: 'Correo sin Exito' }],
                    errors:  [error]
                }
        }
    
    }



}