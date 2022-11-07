import { Router, Request, Response } from 'express';
const app: Router = Router();
import { verifyToken, decodeToken, generarToken} from './authController'
import DbHelper from '../../helpers/DbHelper';
import { errorMensaje } from '../../classes/classes';
import { desencriptar, encriptar } from '../../classes/Encriptacion';

export default class login{

  async login( parametros ?: any  ) {  
    try {
     let conexionSql = new DbHelper();
     if ( parametros ) {
       // console.log( parametros.usuario )
             conexionSql.parametros = [
               {
                 parametro : 'usuario',
                 valor : parametros.usuario
               },
               {
                parametro : 'password',
                valor : parametros.password
              }
             ]
     }

     let respuestaLogin : any = await conexionSql.Ejecutar(`dbo.sp_login`);
     

      if (respuestaLogin.data.Table0[0].contrasena){
        let passwordCheck = desencriptar(parametros['password'],respuestaLogin.data.Table0[0].contrasena);
        if( passwordCheck ){
              let informacion = respuestaLogin.data
              let token = generarToken(respuestaLogin.data.Table0 );
              // let menus = await this.descomponerRespuesta( respuestaLogin.data.Table1, respuestaLogin.data.Table2, respuestaLogin.data.Table3 )
              // this.armadoCompletoMenus(this.menusOficiales, respuestaLogin.data.Table3 )
              this.menusOficiales = respuestaLogin.data.Table1;
              return { 
                data : {
                token,
                dataUsuario: {
                    id_usuario: respuestaLogin.data.Table0[0].id_usuario,
                    id_departamentoFisico: respuestaLogin.data.Table0[0].id_departamentoFisico,
                    id_sexo: respuestaLogin.data.Table0[0].id_sexo,
                    id_usuarioRansa: respuestaLogin.data.Table0[0].id_usuarioRansa,
                    correo: respuestaLogin.data.Table0[0].correo,
                    nombreCompleto: respuestaLogin.data.Table0[0].nombreCompleto,
                    telefono: respuestaLogin.data.Table0[0].telefono,
                    puestoRansa: respuestaLogin.data.Table0[0].puestoRansa,
                    id_area: respuestaLogin.data.Table0[0].id_area,
                    id_rol: respuestaLogin.data.Table0[0].id_rol,
                    imgPerfil : respuestaLogin.data.Table0[0].url_imagen  },
                modulosPermitidos : this.menusOficiales },
                errors :  respuestaLogin.errors ,
                hasError : false
                }
        }else{
          return { 
            data : {
            token: '',
            dataUsuario:[],
            modulosPermitidos : [] },
            errors :  'Usuario y/o contraseña incorrecta' ,
            hasError : true
            }
        }
      }else{
        return { 
          data : {
          token: '',
          dataUsuario:[],
          modulosPermitidos : [] },
          errors :  'Usuario y/o contraseña incorrecta' ,
          hasError : true
          }
      }

   
     


 } catch ( error ) {
         errorMensaje(error)
 }
 }


 public menusOficiales : moduloInterface[] = [];

}

export interface moduloInterface {
  id_modulo ?: number,
  modulo    ?: string,
  imagen    ?: string,
}[]