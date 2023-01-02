"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const body_parser_1 = __importDefault(require("body-parser"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
if (process.env.NODE_ENV != 'production') {
    require('dotenv').config();
}
dotenv_1.default.config({
    path: path_1.default.resolve(__dirname, process.env.NODE_ENV + '.env')
});
console.log(path_1.default.resolve(__dirname, process.env.NODE_ENV + '.env'));
const app = (0, express_1.default)();
//usar el parseo de json
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
//configurar CORS
// app.use((req: Request, res: Response, next: NextFunction) => {
//     res.header('Access-Control-Allow-Origin', '*', );
//     res.setHeader('Access-Control-Allow-Origin','http://10.130.65.146:4200');
//     res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
//     res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
//     res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
//     next();
// });
// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});
//usar las rutas
app.use("/apiRansa/", indexRoutes_1.default);
const port = process.env.PORT;
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE, OPTIONS");
//     res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
//     next(); // Important
// })
// Cors
app.use((0, cors_1.default)());
//server listening 
app.listen(port, () => {
    console.log(`corriendo en ambiente ${process.env.NODE_ENV}`);
});
