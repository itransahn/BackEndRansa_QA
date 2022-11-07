import express from 'express';

import correo from './ejemploRoutes'
//Autenticación
import auth from './auth/auth';
import menu from './auth/menu';

//Excelencia
import llantas     from './Excelencia/Llantas/llantas';
import utilitario  from './Excelencia/Llantas/utilitario'

//Asignacion de Maquinas
import asignacion     from './Operaciones/Asignacion Maquinas/asignacion'

//RRHH
import credito from './RRHH/Crédito/credito';
import dolar   from './RRHH/Dolar/dolar';

//Seguridad
import seguridad      from './Seguridad/seguridad';
import permisos       from './Seguridad/permisos';
import administracion from './Administración/administracion';
import roles          from './Administración/roles';
import modulos        from './Administración/modulosPadre';
import menus          from './Administración/menus';

//Administracion
import mantenimientos from './Administración/mantenimientos';


//Fleje
import fleje from './Operaciones/Fleje/Fleje';


//const index = express();

let app: express.Application = express();

//let index = Server.getIntance();
// app.use(ejemploRoutes);

//Autenticación
app.use('/auth', auth, menu, correo);

//Seguridad
app.use('/seguridad', permisos, seguridad, administracion, roles, modulos, menus);

//Administración
app.use('/administracion', mantenimientos )

//Excelencia
app.use('/excelencia',llantas, utilitario)

//Operaciones
app.use('/operaciones', asignacion, fleje)

//RRHH
app.use('/rrhh', credito, dolar)

export default app;







