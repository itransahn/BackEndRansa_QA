
import { errorMensaje } from '../../classes/classes';
import DbHelper from '../../helpers/DbHelper';


export default class auth {
    constructor() { }
    
    async login( parametros ?: any ) {  
       try {
        let conexionSql = new DbHelper();
        if ( parametros ) {
          // console.log( parametros.usuario )
                conexionSql.parametros = [
                  {
                    parametro : 'usuario',
                    valor : parametros.usuario
                  }
                ]
        }
        // console.log( await conexionSql.Ejecutar(`dbo.sp_login`) )
        return await conexionSql.Ejecutar(`dbo.sp_login`);
      
    } catch ( error ) {
      // console.log('ERROR')
      //       errorMensaje(error)
    }
    }


    async categorias(  ) {

        let conexionSql = new DbHelper();

        try {
            return await conexionSql.Ejecutar('dbo.sp_cargarMenus');
        } catch (error) {

        }
    }

    async validarMenu( parametros ?: any ) {  
      try {
       let conexionSql = new DbHelper();
       if ( parametros ) {
               conexionSql.parametros = [
                 {
                   parametro : 'rol',
                   valor : parametros.rol
                 },
                 {
                  parametro : 'menu',
                  valor : parametros.menu
                },
               ]
       }
       return await conexionSql.Ejecutar(`sp_validarAccesoMenu`);
     
   } catch ( error ) {
   }
   }




    

}


export interface mapeado {
    parametro : string,
    valor : any
}[]


export interface menuInterface {
  id_modulo : number,
  modulo : string,
  imagen : string,
  MenuPrincipal : {
      id_menuPadre : number,
      menuPadre    : string,
      icon : string,
      MenusHijos : {
          menuHijo : string,
          icon : string,
          urlM : string,
          Permisos : {
              insertar   : number,
              actualizar : number,
              eliminar   : number
          }[]
      }[]
  }[]
}[]