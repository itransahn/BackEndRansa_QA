import { Router, Request, Response } from 'express';
const app: Router = Router();
import { errorMensaje } from '../../classes/classes';
import DbHelper from '../../helpers/DbHelper';

export default class retenciones{

       /* Proveedor */
       async Proveedores( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [ ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_verProveedoresF`);
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

    /* Insertar Proveedor */
    async insertarProveedor( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'proveedor',
                     valor : parametros.proveedor
                   }, 
                   {
                    parametro : 'rtn',
                    valor : parametros.rtn
                  },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertProveedorF`);
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

       /* Actualizar Proveedor */
    async actualizarProveedor( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'idProveedor',
                     valor : parametros.idProveedor
                   }, 
                   {
                    parametro : 'proveedor',
                    valor : parametros.proveedor
                   },
                  {
                    parametro : 'rtn',
                    valor : parametros.rtn
                  },
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_updateProveedorF`);
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
  
          /* Actualizar Proveedor */
    async actualizarEstadoProveedor( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'idProveedor',
                     valor : parametros.idProveedor
                   }, 
                   {
                    parametro : 'estado',
                    valor : parametros.estado
                   } 
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_estadoProveedorF`);
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


          /* Insertar Retención */
    async insertarRetención( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'empresa',
                     valor : parametros.empresa
                   }, 
                   {
                    parametro : 'rtn',
                    valor : parametros.rtn
                   } ,
                   {
                    parametro : 'documento',
                    valor : parametros.documento
                   },
                   {
                    parametro : 'fecha',
                    valor : parametros.fecha
                   },   
                   {
                    parametro : 'impuesto',
                    valor : parametros.impuesto
                   },
                   {
                    parametro : 'retencion',
                    valor : parametros.retencion
                   } ,
                   {
                    parametro : 'tipoRetencion',
                    valor : parametros.tipoRetencion
                   } ,
                   {
                    parametro : 'cai',
                    valor : parametros.cai
                   } 
                 ]
         }
         let respuesta: any = await conexionSql.Ejecutar(`sp_insertRetenciones`);
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

/* Ver Retención*/
     async cargarRetencion ( parametros ?: any){
        try{
            let conexionSql = new DbHelper();
          if( parametros) {
              conexionSql.parametros = [
                {
                  parametro : 'tipo',
                  valor     : parametros.tipo
                },
                {
                  parametro : 'proveedor',
                  valor     : parametros.proveedor
                },
                {
                  parametro : 'anio',
                  valor     : parametros.anio
                },
                {
                  parametro : 'mes',
                  valor     : parametros.mes
                }
              ]
            let respuesta : any = await conexionSql.Ejecutar('sp_verRetenciones');
            if( !respuesta.hasError ){
                return {
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError :  respuesta.hasError
                }
            }else{
              return respuesta;
            }
          }
        }catch( error ){
            errorMensaje( error )
        }
     }

     /* Guardar Retencion generada */
     async guardarRetancionG ( parametros ?: any){
      try{
          let conexionSql = new DbHelper();
        if( parametros) {
            conexionSql.parametros = [
              {
                parametro : 'fecha',
                valor     : parametros.fecha
              },
              {
                parametro : 'proveedor',
                valor     : parametros.proveedor
              },
              {
                parametro : 'dataT',
                valor     : parametros.dataT
              },
              {
                parametro : 'correlativo',
                valor     : parametros.correlativo
              },
              {
                parametro : 'usuario',
                valor     : parametros.usuario
              },
              {
                parametro : 'sede',
                valor     : parametros.sede
              },
              {
                parametro : 'tipoR',
                valor     : parametros.tipoR
              },
              {
                parametro : 'rtn',
                valor     : parametros.rtn
              },
              {
                parametro : 'cai',
                valor     : parametros.cai
              },
              {
                parametro : 'desde',
                valor     : parametros.desde
              },
              {
                parametro : 'hasta',
                valor     : parametros.hasta
              },
              {
                parametro : 'fechaCAI',
                valor     : parametros.fechaCAI
              },
            ]
          let respuesta : any = await conexionSql.Ejecutar('sp_guardarRetencionG');
          if( !respuesta.hasError ){
              return {
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError :  respuesta.hasError
              }
          }else{
            return respuesta;
          }
        }
      }catch( error ){
          errorMensaje( error )
      }
   }

     /* cargar correlativo */
     async cargarCorrelativo ( parametros ?: any){
      try{
          let conexionSql = new DbHelper();
        if( parametros) {
            conexionSql.parametros = [
              {
                parametro : 'sede',
                valor     : parametros.sede
              }
            ]
          let respuesta : any = await conexionSql.Ejecutar('sp_cargarCorrelativoSiguiente');
          if( !respuesta.hasError ){
              return {
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError :  respuesta.hasError
              }
          }else{
            return respuesta;
          }
        }
      }catch( error ){
          errorMensaje( error )
      }
   }

    /* cambiar estado retencion */
   async cambiarEstadoRetencion ( parametros ?: any){
          try{
              let conexionSql = new DbHelper();
            if( parametros) {
                conexionSql.parametros = [
                  {
                    parametro : 'retencion',
                    valor     : parametros.retencion
                  },
                  {
                    parametro : 'tipoR',
                    valor     : parametros.tipoR
                  }
                ]
              let respuesta : any = await conexionSql.Ejecutar('sp_cambiarestadoRetencion');
              if( !respuesta.hasError ){
                  return {
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError :  respuesta.hasError
                  }
              }else{
                return respuesta;
              }
            }
          }catch( error ){
              errorMensaje( error )
          }
       }

  
    /* cargar retención generada */
    async cargarRetencionG ( parametros ?: any){
      try{
          let conexionSql = new DbHelper();
        if( parametros) {
            conexionSql.parametros = [
              {
                parametro : 'correlativo',
                valor     : parametros.correlativo
              }
            ]
          let respuesta : any = await conexionSql.Ejecutar('sp_cargarRetencionGenerada');
          if( !respuesta.hasError ){
              return {
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError :  respuesta.hasError
              }
          }else{
            return respuesta;
          }
        }
      }catch( error ){
          errorMensaje( error )
      }
   }

     
    /* cargar retención generada */
    async verRetencionesGeneradas ( parametros ?: any){
      try{
          let conexionSql = new DbHelper();
        if( parametros) {
            conexionSql.parametros = [
              {
                parametro : 'desde',
                valor     : parametros.desde
              },
              {
                parametro : 'hasta',
                valor     : parametros.hasta
              }
            ]
          let respuesta : any = await conexionSql.Ejecutar('sp_verRetencionesGeneradas');
          if( !respuesta.hasError ){
              return {
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError :  respuesta.hasError
              }
          }else{
            return respuesta;
          }
        }
      }catch( error ){
          errorMensaje( error )
      }
   }

/*  */
  }
  
 



