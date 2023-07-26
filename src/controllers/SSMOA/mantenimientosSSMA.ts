import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';

export default class extintores{


      
   /* Tipo Agente */
   async v_tipoAgente ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [  ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verTipoAgente`);
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
   /* Tipo Agente */
   async tipoAgente ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
                {
                    parametro : 'tipoAgente' ,
                    valor     : parametros.tipoAgente 
                }
               ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insert_tipoAgente`);
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

  
   /* Tipo Extintor */
  async v_tipoExtintor ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [  ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_verTipoExtintor`);
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
   /* Tipo Extintor */
    async tipoExtintor ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [ 
                    {
                        parametro : 'tipoExtintor' ,
                        valor     : parametros.tipoExtintor 
                    }
                   ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_insert_tipoExtintor`);
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

     /* Capacidad */
     async v_Capacidad ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [   ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_verCapacidades`);
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
   /* Tipo Capacidad */
   async tipoCapacidad ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [ 
                {
                    parametro : 'Capacidad' ,
                    valor     : parametros.Capacidad 
                },
                {
                    parametro : 'unidadMedicion' ,
                    valor     : parametros.unidadMedicion 
                }
               ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_insert_capacidadExtintor`);
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

     /* Eliminar Capacidad */
     async DCapacidad ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ 
                  {
                      parametro : 'idCapacidad' ,
                      valor     : parametros.idCapacidad 
                  }
                 ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_deleteCapacidad`);
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


       /* Ubicación */
  async v_ubicacion ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [ 
                    // {
                    //     parametro : 'sede' ,
                    //     valor     : parametros.sede 
                    // }
                   ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_verUbicacionesExt`);
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
     /* Ubicación */
     async ubicacion ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [ 
                    {
                        parametro : 'ubicacion' ,
                        valor     : parametros.ubicacion 
                    },
                    {
                        parametro : 'sede' ,
                        valor     : parametros.sede 
                    }
                   ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_insert_ubicacionExtintor`);
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

    /* Estado Ubicación */
     async estadoUbicacion ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) { 
                 conexionSql.parametros = [ 
                    {
                        parametro : 'idUbicacion' ,
                        valor     : parametros.idUbicacion 
                    },
                    {
                        parametro : 'estado' ,
                        valor     : parametros.estado 
                    }
                   ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_update_estadoUbicacionEstado`);
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

          /* Catálogo */
     async catalogo ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ 
                  {
                      parametro : 'Sede' ,
                      valor     : parametros.Sede 
                  },
                 ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_categoriasExtintores`);
      if (!respuesta.hasError ){
        return {
          tipoAgente   : respuesta.data.Table0,
          tipoExtintor : respuesta.data.Table1,
          Ubicaciones  : respuesta.data.Table2,
          Capacidad    : respuesta.data.Table3,
          Umedicion    : respuesta.data.Table4,
          Sedes        : respuesta.data.Table5,

        }
      }else{
      
        return respuesta;
      }
    } catch ( error ) {
           errorMensaje(error)
    }
    }

}