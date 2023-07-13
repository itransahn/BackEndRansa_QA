import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class extintores{


    
   /* Ver Extintores */
   async verExtintores ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [
                {
                  parametro : 'sede',
                  valor     : parametros.sede
                }
                ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verExtintores`);
    if (!respuesta.hasError ){
            return { 
              data :      respuesta.data,
              errors :    respuesta.errors,
              hasError :  respuesta.hasError
              }
    }else{
      return respuesta;
    }
  } catch ( error ) {
         errorMensaje(error)
  }
  }

  async crearExtintores( parametros ?: any){
        try{
            let conexionSql = new DbHelper;
        if( parametros){
            conexionSql.parametros = [
                {parametro : 'sede' ,
                 valor     : parametros.sede
                },
                {parametro : 'tipoAgente' ,
                valor     : parametros.tipoAgente
               },
               {parametro : 'tipoExtintor' ,
               valor     : parametros.tipoExtintor
               },
               {parametro : 'vidaUtil' ,
               valor     : parametros.vidaUtil
               },
               {parametro : 'capacidad' ,
               valor     : parametros.capacidad
               },
               {parametro : 'Fecha_Anterior_Carga' ,
               valor     : parametros.Fecha_Anterior_Carga
               },
               {parametro : 'Fecha_Proxima_Carga' ,
               valor     : parametros.Fecha_Proxima_Carga
               },
               {parametro : 'usuario_creador' ,
               valor     : parametros.usuario_creador
               },
               {parametro : 'ubicacion' ,
               valor     : parametros.ubicacion
               },
               {parametro : 'fechaCreacion' ,
               valor     : parametros.fechaCreacion
               }
            ]
        }
        console.log(parametros)
        let respuesta: any = await conexionSql.Ejecutar(`sp_insert_Extintor`);
        console.log(respuesta)
        if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError :  respuesta.hasError
            }
  }else{
    return respuesta;
  }
        }catch( error ){
            errorMensaje(error)
        }
  }

  async actualizarExtintores( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            {parametro : 'idExtintor' ,
            valor     : parametros.idExtintor
            },
            {parametro : 'sede' ,
             valor     : parametros.sede
            },
            {parametro : 'tipoAgente' ,
            valor     : parametros.tipoAgente
           },
           {parametro : 'tipoExtintor' ,
           valor     : parametros.tipoExtintor
           },
           {parametro : 'vidaUtil' ,
           valor     : parametros.vidaUtil
           },
           {parametro : 'capacidad' ,
           valor     : parametros.capacidad
           },
           {parametro : 'Fecha_Anterior_Carga' ,
           valor     : parametros.Fecha_Anterior_Carga
           },
           {parametro : 'Fecha_Proxima_Carga' ,
           valor     : parametros.Fecha_Proxima_Carga
           },
           {parametro : 'usuario' ,
           valor     : parametros.usuario
           },
           {parametro : 'ubicacion' ,
           valor     : parametros.ubicacion
           },
           {parametro : 'fechaCreacion' ,
           valor     : parametros.fechaCreacion
           }
        ]
    }
    }catch( error ){
        errorMensaje(error)
    }
  }


}