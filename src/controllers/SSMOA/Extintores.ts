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
        let respuesta: any = await conexionSql.Ejecutar(`sp_insert_Extintor`);
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
    let respuesta: any = await conexionSql.Ejecutar(`sp_update_Extintores`);
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

 async crearAuditoria( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            { parametro : 'Presion' ,
              valor     : parametros.Presion },
             { parametro : 'Sello' ,
              valor     : parametros.Sello },
            { parametro : 'Manometro' ,
              valor     : parametros.Manometro }, 
            { parametro : 'Soporte' ,
              valor     : parametros.Soporte }, 
             { parametro : 'Manguera' ,
              valor     : parametros.Manguera }, 
             { parametro : 'Boquilla' ,
              valor     : parametros.Boquilla }, 
              { parametro : 'Pintura' ,
              valor     : parametros.Pintura }, 
              { parametro : 'Señalizacion' ,
              valor     : parametros.Señalizacion }, 
              { parametro : 'Altura' ,
              valor     : parametros.Altura }, 
              { parametro : 'Acceso' ,
              valor     : parametros.Acceso }, 
              { parametro : 'Estado' ,
              valor     : parametros.Estado }, 
              { parametro : 'Usuario' ,
              valor     : parametros.Usuario }, 
              { parametro : 'observaciones' ,
              valor     : parametros.observaciones }, 
              { parametro : 'idExtintor' ,
              valor     : parametros.idExtintor }, 
        ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_auditoriaExtintor`);
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

async cargarExtintoresAuditoria( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            { parametro : 'sede' ,
              valor     : parametros.sede },
        ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_cargarExtintoresAuditoriaHoy`);
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

  async cargarAuditorias( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            { parametro : 'sede' ,
              valor     : parametros.sede
             },
        ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_cargarExtintoresAuditoriaHoy`);
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

  async auditoriasExtintores( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            { parametro : 'Mes' ,
              valor     : parametros.Mes },
              { parametro : 'anio' ,
              valor     : parametros.anio },
        ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_verAuditoriasGeneradas`);
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

  async incidenciasG( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            { parametro : 'Mes' ,
              valor     : parametros.Mes },
              { parametro : 'anio' ,
              valor     : parametros.anio },
        ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_verIncidenciasGeneradas`);
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

  async Incidencia( parametros ?: any){
    try{
        let conexionSql = new DbHelper;
    if( parametros){
        conexionSql.parametros = [
            { parametro : 'Presion' ,
              valor     : parametros.Presion },
             { parametro : 'Sello' ,
              valor     : parametros.Sello },
            { parametro : 'Manometro' ,
              valor     : parametros.Manometro }, 
            { parametro : 'Soporte' ,
              valor     : parametros.Soporte }, 
             { parametro : 'Manguera' ,
              valor     : parametros.Manguera }, 
             { parametro : 'Boquilla' ,
              valor     : parametros.Boquilla }, 
              { parametro : 'Pintura' ,
              valor     : parametros.Pintura }, 
              { parametro : 'Señalizacion' ,
              valor     : parametros.Señalizacion }, 
              { parametro : 'Altura' ,
              valor     : parametros.Altura }, 
              { parametro : 'Acceso' ,
              valor     : parametros.Acceso }, 
              { parametro : 'Estado' ,
              valor     : parametros.Estado }, 
              { parametro : 'Usuario' ,
              valor     : parametros.Usuario }, 
              { parametro : 'observaciones' ,
              valor     : parametros.observaciones }, 
              { parametro : 'idExtintor' ,
              valor     : parametros.idExtintor }, 
        ]
    }
    let respuesta: any = await conexionSql.Ejecutar(`sp_IncidenciaExtintor`);
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
 
  async validarAuditoria ( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) { 
             conexionSql.parametros = [
                {
                  parametro : 'idExtintor',
                  valor     : parametros.idExtintor
                }
                ]
     }
     let respuesta: any = await conexionSql.Ejecutar(`sp_validadExtintor`);
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

}