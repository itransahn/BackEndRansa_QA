import { Router, Request, Response } from 'express';

const app: Router = Router();
import DbHelper from '../../../helpers/DbHelper';
import { errorMensaje } from '../../../classes/classes';
export default class Llantas{


    /* CARGAR LOTES POR TIPO */
    async lotesPorTipo( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
           // console.log( parametros.usuario )
                 conexionSql.parametros = [
                   {
                     parametro : 'tipoLlanta',
                     valor : parametros.tipoLlanta
                   }, 
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_cargarLotesTipo`);
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
    
    /* CANTIDADES POR LOTE */
    async cantidadesLotes( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
                 conexionSql.parametros = [
                   {
                     parametro : 'lote',
                     valor : parametros.lote
                   }, 
                   {
                    parametro : 'tipollanta',
                    valor : parametros.tipollanta
                  }
                 ]
         }

       let respuesta: any = await conexionSql.Ejecutar(`sp_verCantidadLotes`);
        //  console.log(respuesta)
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError : respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

        /* Maquinas por Tipo */
    async maquinasTipo ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
           // console.log( parametros.usuario )
                 conexionSql.parametros = [
                   {
                     parametro : 'tipoMaquina',
                     valor : parametros.tipoMaquina
                   } 
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verMaquinasTipo`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError : respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

      /* Stock por Lotes */
      async stockLotes ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
           // console.log( parametros.usuario )
                 conexionSql.parametros = [
                   {
                     parametro : 'tipoLlantas',
                     valor : parametros.tipoLlantas
                   } 
                 ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_verlotesTipos`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError : respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }

      /* Stock General */
      async stockGeneral ( parametros ?: any  ) {  
        try {
         let conexionSql = new DbHelper();
         if ( parametros ) {
           // console.log( parametros.usuario )
                 conexionSql.parametros = [ ]
         }
    
         let respuesta: any = await conexionSql.Ejecutar(`sp_stockGeneral`);
        if (!respuesta.hasError ){
                return { 
                  data :      respuesta.data,
                  errors :    respuesta.errors,
                  hasError : respuesta.hasError
                  }
        }else{
          return respuesta;
        }
     } catch ( error ) {
             errorMensaje(error)
     }
     }


         /* Ver Cambios de Llantas */
   async cambiosLlanta ( parametros ?: any  ) {  
          try {
           let conexionSql = new DbHelper();
           if ( parametros ) {
             // console.log( parametros.usuario )
                   conexionSql.parametros = [  ]
           }
      
           let respuesta: any = await conexionSql.Ejecutar(`sp_VercambiosLlanta`);
          if (!respuesta.hasError ){
                  return { 
                    data :      respuesta.data,
                    errors :    respuesta.errors,
                    hasError : respuesta.hasError
                    }
          }else{
            return respuesta;
          }
       } catch ( error ) {
               errorMensaje(error)
       }
       }

                /* Ver Movimiento de llantas */
    async movimentoLlantas ( parametros ?: any  ) {  
                  try {
                   let conexionSql = new DbHelper();
                   if ( parametros ) { 
                           conexionSql.parametros = [ 
                            {
                              parametro : 'accion',
                              valor : parametros.accion
                            } 
                            ]
                   }
                   let respuesta: any = await conexionSql.Ejecutar(`sp_verMovimientosLlantas`);
                  if (!respuesta.hasError ){
                          return { 
                            data :      respuesta.data,
                            errors :    respuesta.errors,
                            hasError : respuesta.hasError
                            }
                  }else{
                    return respuesta;
                  }
               } catch ( error ) {
                       errorMensaje(error)
               }
               }

     /* MAquina Llanta */
     async valMaquinaLlanta ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ 
                {
                  parametro : 'tipoLlanta',
                  valor : parametros.tipoLlanta
                } ,
                {
                  parametro : 'maquina',
                  valor : parametros.maquina
                } ,
                {
                  parametro : 'nombreMaquina',
                  valor : parametros.nombreMaquina
                } ,
                {
                  parametro : 'ladoLlanta',
                  valor : parametros.ladoLlanta
                } 
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_validacionMaqLlanta`);
      if (!respuesta.hasError ){
              return { 
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError : respuesta.hasError
                }
      }else{
        return respuesta;
      }
   } catch ( error ) {
           errorMensaje(error)
   }
   }       

/* INGRESOS POST Y PUT  */
        
     /* Ajuste de Llanta */
    async ajusteLlantas ( parametros ?: any  ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) { 
               conexionSql.parametros = [ 
                {
                  parametro : 'lote',
                  valor : parametros.lote
                } ,
                {
                  parametro : 'accion',
                  valor : parametros.accion
                } ,
                {
                  parametro : 'cantidad',
                  valor : parametros.cantidad
                } ,
                {
                  parametro : 'tipoLlanta',
                  valor : parametros.tipoLlanta
                } ,
                {
                  parametro : 'usuario',
                  valor : parametros.usuario
                } ,
                {
                  parametro : 'maquina',
                  valor : parametros.maquina
                } ,
                {
                  parametro : 'id_Cambio',
                  valor : parametros.id_Cambio
                } 
                ]
       }
       let respuesta: any = await conexionSql.Ejecutar(`sp_ajusteLlantas`);
      if (!respuesta.hasError ){
              return { 
                data :      respuesta.data,
                errors :    respuesta.errors,
                hasError : respuesta.hasError
                }
      }else{
        return respuesta;
      }
   } catch ( error ) {
           errorMensaje(error)
   }
   }

 /* Entrada de Llanta */
  async entradaLlantas ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'cantidad',
              valor : parametros.cantidad
            } ,
            {
              parametro : 'idTipoLlanta',
              valor : parametros.idTipoLlanta
            } ,
            {
              parametro : 'precio',
              valor : parametros.precio
            } ,
            {
              parametro : 'proveedor',
              valor : parametros.proveedor
            } ,
            {
              parametro : 'usuario',
              valor : parametros.usuario
            } 
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_entradaLlantas`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

 /* Salida de Llanta */
 async salidaLlantas ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'tipoLlanta',
              valor : parametros.tipoLlanta
            } ,
            {
              parametro : 'maquina',
              valor : parametros.maquina
            } ,
            {
              parametro : 'usuario',
              valor : parametros.usuario
            } ,
            {
              parametro : 'lote',
              valor : parametros.lote
            } ,
            {
              parametro : 'comentario',
              valor : parametros.comentario
            },
            {
              parametro : 'DetalleCambio',
              valor : parametros.DetalleCambio
            },
            {
              parametro : 'id_stockDetalle',
              valor : parametros.id_stockDetalle
            } ,
            {
              parametro : 'fecha',
              valor : parametros.fecha
            } 
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_cambioLlantas`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

/* UTILITARIOS */
 /* Tipos de Llanta */
 async tiposDeLlantas ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [   ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_vertipodeLlantas`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

 /* Tipos de Maquinas */
 async tiposdeMaquina ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [   ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_vertipodeMaquina`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

 /* Maquinas de RANSA*/
 async maquinasCorto ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [   ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verMaquinasCorto`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

async maquinasDetalle ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [   ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verMaquinasDetalle`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

async tiposLlantaF ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
             {  
              parametro : 'tipoMaquina',
              valor     : parametros.tipoMaquina
             }
             ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`SP_tipollanta`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

async stockLoteTipo ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
             {  
              parametro : 'tipoLlanta',
              valor     : parametros.tipoLlanta
             },
             {  
              parametro : 'lote',
              valor     : parametros.lote
             }
             ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_VerDispLote`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

//insertar Ajustes
async insAjustes ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
             {  
              parametro : 'tipoAjuste',
              valor     : parametros.tipoAjuste
             },
             {  
              parametro : 'lote',
              valor     : parametros.lote
             },
             {  
              parametro : 'tipoLlanta',
              valor     : parametros.tipoLlanta
             },
             {  
              parametro : 'cantidad',
              valor     : parametros.cantidad
             },
             {  
              parametro : 'comentario',
              valor     : parametros.comentario
             },
             {  
              parametro : 'idUsuario',
              valor     : parametros.idUsuario
             },
             ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_InsertAprobaAjustes`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Ver ajustes solicitados por usuario
async ajstesSolicitados ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
             {  
              parametro : 'idUsuario',
              valor     : parametros.idUsuario
             },
             ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verAjustesUsuSolicitante`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Editar ajustes por usuario
async editarAjustes ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
             {  
              parametro : 'idAjuste',
              valor     : parametros.idAjuste
             },
             {  
              parametro : 'idUsuario',
              valor     : parametros.idUsuario
             },
             {  
              parametro : 'cantidad',
              valor     : parametros.cantidad
             },
             {  
              parametro : 'comentario',
              valor     : parametros.comentario
             },
             ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_cambiosAjustes`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Eliminar ajustes por usuario
async deleteAjustes ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
             {  
              parametro : 'idAjuste',
              valor     : parametros.idAjuste
             },
             {  
              parametro : 'idUsuario',
              valor     : parametros.idUsuario
             },
             ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_deleteAjuste`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Ver ajustes para aprobación
async ajustesAprobados ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verAprobAjusteDet`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Aprobación de Ajustes
async aprobarAjuste ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
            {
              parametro : 'TipoAjuste',
              valor     : parametros.TipoAjuste
            },
            {
              parametro : 'lote',
              valor     : parametros.lote
            },
            {
              parametro : 'idllanta',
              valor     : parametros.idllanta
            },
            {
              parametro : 'cantidad',
              valor     : parametros.cantidad
            },
            {
              parametro : 'comentario',
              valor     : parametros.comentario
            },
            {
              parametro : 'usuario',
              valor     : parametros.usuario
            },
            {
              parametro : 'idAjuste',
              valor     : parametros.idAjuste
            }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_ajusteLlantas2`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Anulación de Ajustes
async anularAjuste ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [
            {
              parametro : 'idAjuste',
              valor     : parametros.idAjuste
            },
            {
              parametro : 'usuario',
              valor     : parametros.usuario
            },
            {
              parametro : 'idTipoLlanta',
              valor     : parametros.idTipoLlanta
            },
            {
              parametro : 'lote',
              valor     : parametros.lote
            },
            {
              parametro : 'fechaCambio',
              valor     : parametros.fechaCambio 
            },
            {
              parametro : 'comentario',
              valor     : parametros.comentario
            },
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_anularAjuste`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Anulación de Ajustes
async ajustesRealizados ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [  ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verAjustesRealizados`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}



// Actualización a cambios de llanta
async updCambiosLlanta ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'idCambio',
              valor     : parametros.idCambio
            },
            {
              parametro : 'idMaquina',
              valor     : parametros.idMaquina
            },
            {
              parametro : 'ladoCambiar',
              valor     : parametros.ladoCambiar
            },
            {
              parametro : 'fecha',
              valor     : parametros.fecha
            }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_actualizarCambio`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Bitacora para los actualización de datos a un cambio de llanta ( maquina, fecha, lado a cambiar y comentario)
async bitacoraUpdCambiosLlanta ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'tipoMaquina',
              valor     : parametros.tipoMaquina
            },
            {
              parametro : 'maquinaAnterior',
              valor     : parametros.maquinaAnterior
            },
            {
              parametro : 'tipoLlanta',
              valor     : parametros.tipoLlanta
            },
            {
              parametro : 'lote',
              valor     : parametros.lote
            },
            {
              parametro : 'ladoanterior',
              valor     : parametros.ladoanterior
            },
            {
              parametro : 'ladoActual',
              valor     : parametros.ladoActual
            },
            {
              parametro : 'fechaAnterior',
              valor     : parametros.fechaAnterior
            },
            {
              parametro : 'fechaModificacion',
              valor     : parametros.fechaModificacion
            },
            {
              parametro : 'usuarioModifica',
              valor     : parametros.usuarioModifica
            },
            {
              parametro : 'idCambioLlanta',
              valor     : parametros.idCambioLlanta
            },
            {
              parametro : 'motivoCambio',
              valor     : parametros.motivoCambio
            },
            {
              parametro : 'maquinaNueva',
              valor     : parametros.maquinaNueva
            },
            {
              parametro : 'accion',
              valor     : parametros.accion
            }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_LlenarBitacoraCambiosActualizacion`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Eliminación de cambios de llanta
async deleteCambios ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'idCambio',
              valor     : parametros.idCambio
            },
            {
              parametro : 'idTipoLlanta',
              valor     : parametros.idTipoLlanta
            },
            {
              parametro : 'lote',
              valor     : parametros.lote
            },
            {
              parametro : 'maquina',
              valor     : parametros.maquina
            },
            {
              parametro : 'ladoaCambiar',
              valor     : parametros.ladoaCambiar
            },
            {
              parametro : 'fechaCambio',
              valor     : parametros.fechaCambio
            },
            {
              parametro : 'comentario',
              valor     : parametros.comentario
            },
            {
              parametro : 'usuario',
              valor     : parametros.usuario
            },
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_deleteCambio`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Ver cambios a registros previamente ingresados
async cambiosBitacora ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [  ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_verCambiosBitacora`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Modificaciones a lotes
async updLote ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ 
            {
              parametro : 'tipoLlanta',
              valor     : parametros.tipoLlanta
            },
            {
              parametro : 'lote',
              valor     : parametros.lote
            },
            {
              parametro : 'proveedor',
              valor     : parametros.proveedor
            },
            {
              parametro : 'precioAnterior',
              valor     : parametros.precioAnterior
            },
            {
              parametro : 'precioNuevo',
              valor     : parametros.precioNuevo 
            },
            {
              parametro : 'usuario',
              valor     : parametros.usuario
            }
            ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_actualizarCostoLote`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}
}

// Ver Modificaciones a lotes
async ModificacionesLotes ( parametros ?: any  ) {  
  try {
   let conexionSql = new DbHelper();
   if ( parametros ) { 
           conexionSql.parametros = [ ]
   }
   let respuesta: any = await conexionSql.Ejecutar(`sp_VerCambiosaLotes`);
  if (!respuesta.hasError ){
          return { 
            data :      respuesta.data,
            errors :    respuesta.errors,
            hasError : respuesta.hasError
            }
  }else{
    return respuesta;
  }
} catch ( error ) {
       errorMensaje(error)
}}

/* UTILITARIOS */
  }
  
 





