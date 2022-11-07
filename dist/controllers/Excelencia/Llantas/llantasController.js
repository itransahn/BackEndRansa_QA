"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const app = (0, express_1.Router)();
const DbHelper_1 = __importDefault(require("../../../helpers/DbHelper"));
const classes_1 = require("../../../classes/classes");
class Llantas {
    /* CARGAR LOTES POR TIPO */
    lotesPorTipo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cargarLotesTipo`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* CANTIDADES POR LOTE */
    cantidadesLotes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'tipollanta',
                            valor: parametros.tipollanta
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verCantidadLotes`);
                console.log(respuesta);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Maquinas por Tipo */
    maquinasTipo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoMaquina',
                            valor: parametros.tipoMaquina
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMaquinasTipo`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Stock por Lotes */
    stockLotes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoLlantas',
                            valor: parametros.tipoLlantas
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verlotesTipos`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Stock General */
    stockGeneral(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_stockGeneral`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Ver Cambios de Llantas */
    cambiosLlanta(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    // console.log( parametros.usuario )
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_VercambiosLlanta`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Ver Movimiento de llantas */
    movimentoLlantas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'accion',
                            valor: parametros.accion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMovimientosLlantas`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* MAquina Llanta */
    valMaquinaLlanta(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'maquina',
                            valor: parametros.maquina
                        },
                        {
                            parametro: 'nombreMaquina',
                            valor: parametros.nombreMaquina
                        },
                        {
                            parametro: 'ladoLlanta',
                            valor: parametros.ladoLlanta
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_validacionMaqLlanta`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* INGRESOS POST Y PUT  */
    /* Ajuste de Llanta */
    ajusteLlantas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'accion',
                            valor: parametros.accion
                        },
                        {
                            parametro: 'cantidad',
                            valor: parametros.cantidad
                        },
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'maquina',
                            valor: parametros.maquina
                        },
                        {
                            parametro: 'id_Cambio',
                            valor: parametros.id_Cambio
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_ajusteLlantas`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Entrada de Llanta */
    entradaLlantas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'cantidad',
                            valor: parametros.cantidad
                        },
                        {
                            parametro: 'idTipoLlanta',
                            valor: parametros.idTipoLlanta
                        },
                        {
                            parametro: 'precio',
                            valor: parametros.precio
                        },
                        {
                            parametro: 'proveedor',
                            valor: parametros.proveedor
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_entradaLlantas`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Salida de Llanta */
    salidaLlantas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'maquina',
                            valor: parametros.maquina
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'comentario',
                            valor: parametros.comentario
                        },
                        {
                            parametro: 'DetalleCambio',
                            valor: parametros.DetalleCambio
                        },
                        {
                            parametro: 'id_stockDetalle',
                            valor: parametros.id_stockDetalle
                        },
                        {
                            parametro: 'fecha',
                            valor: parametros.fecha
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cambioLlantas`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* UTILITARIOS */
    /* Tipos de Llanta */
    tiposDeLlantas(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_vertipodeLlantas`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Tipos de Maquinas */
    tiposdeMaquina(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_vertipodeMaquina`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    /* Maquinas de RANSA*/
    maquinasCorto(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMaquinasCorto`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    maquinasDetalle(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verMaquinasDetalle`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    tiposLlantaF(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoMaquina',
                            valor: parametros.tipoMaquina
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`SP_tipollanta`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    stockLoteTipo(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_VerDispLote`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    //insertar Ajustes
    insAjustes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoAjuste',
                            valor: parametros.tipoAjuste
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'cantidad',
                            valor: parametros.cantidad
                        },
                        {
                            parametro: 'comentario',
                            valor: parametros.comentario
                        },
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_InsertAprobaAjustes`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Ver ajustes solicitados por usuario
    ajstesSolicitados(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verAjustesUsuSolicitante`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Editar ajustes por usuario
    editarAjustes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idAjuste',
                            valor: parametros.idAjuste
                        },
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                        {
                            parametro: 'cantidad',
                            valor: parametros.cantidad
                        },
                        {
                            parametro: 'comentario',
                            valor: parametros.comentario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_cambiosAjustes`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Eliminar ajustes por usuario
    deleteAjustes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idAjuste',
                            valor: parametros.idAjuste
                        },
                        {
                            parametro: 'idUsuario',
                            valor: parametros.idUsuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_deleteAjuste`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Ver ajustes para aprobación
    ajustesAprobados(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verAprobAjusteDet`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Aprobación de Ajustes
    aprobarAjuste(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'TipoAjuste',
                            valor: parametros.TipoAjuste
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'idllanta',
                            valor: parametros.idllanta
                        },
                        {
                            parametro: 'cantidad',
                            valor: parametros.cantidad
                        },
                        {
                            parametro: 'comentario',
                            valor: parametros.comentario
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'idAjuste',
                            valor: parametros.idAjuste
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_ajusteLlantas2`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Anulación de Ajustes
    anularAjuste(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idAjuste',
                            valor: parametros.idAjuste
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                        {
                            parametro: 'idTipoLlanta',
                            valor: parametros.idTipoLlanta
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'fechaCambio',
                            valor: parametros.fechaCambio
                        },
                        {
                            parametro: 'comentario',
                            valor: parametros.comentario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_anularAjuste`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Anulación de Ajustes
    ajustesRealizados(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verAjustesRealizados`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Actualización a cambios de llanta
    updCambiosLlanta(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idCambio',
                            valor: parametros.idCambio
                        },
                        {
                            parametro: 'idMaquina',
                            valor: parametros.idMaquina
                        },
                        {
                            parametro: 'ladoCambiar',
                            valor: parametros.ladoCambiar
                        },
                        {
                            parametro: 'fecha',
                            valor: parametros.fecha
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_actualizarCambio`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Bitacora para los actualización de datos a un cambio de llanta ( maquina, fecha, lado a cambiar y comentario)
    bitacoraUpdCambiosLlanta(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoMaquina',
                            valor: parametros.tipoMaquina
                        },
                        {
                            parametro: 'maquinaAnterior',
                            valor: parametros.maquinaAnterior
                        },
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'ladoanterior',
                            valor: parametros.ladoanterior
                        },
                        {
                            parametro: 'ladoActual',
                            valor: parametros.ladoActual
                        },
                        {
                            parametro: 'fechaAnterior',
                            valor: parametros.fechaAnterior
                        },
                        {
                            parametro: 'fechaModificacion',
                            valor: parametros.fechaModificacion
                        },
                        {
                            parametro: 'usuarioModifica',
                            valor: parametros.usuarioModifica
                        },
                        {
                            parametro: 'idCambioLlanta',
                            valor: parametros.idCambioLlanta
                        },
                        {
                            parametro: 'motivoCambio',
                            valor: parametros.motivoCambio
                        },
                        {
                            parametro: 'maquinaNueva',
                            valor: parametros.maquinaNueva
                        },
                        {
                            parametro: 'accion',
                            valor: parametros.accion
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_LlenarBitacoraCambiosActualizacion`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Eliminación de cambios de llanta
    deleteCambios(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'idCambio',
                            valor: parametros.idCambio
                        },
                        {
                            parametro: 'idTipoLlanta',
                            valor: parametros.idTipoLlanta
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'maquina',
                            valor: parametros.maquina
                        },
                        {
                            parametro: 'ladoaCambiar',
                            valor: parametros.ladoaCambiar
                        },
                        {
                            parametro: 'fechaCambio',
                            valor: parametros.fechaCambio
                        },
                        {
                            parametro: 'comentario',
                            valor: parametros.comentario
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        },
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_deleteCambio`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Ver cambios a registros previamente ingresados
    cambiosBitacora(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_verCambiosBitacora`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Modificaciones a lotes
    updLote(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [
                        {
                            parametro: 'tipoLlanta',
                            valor: parametros.tipoLlanta
                        },
                        {
                            parametro: 'lote',
                            valor: parametros.lote
                        },
                        {
                            parametro: 'proveedor',
                            valor: parametros.proveedor
                        },
                        {
                            parametro: 'precioAnterior',
                            valor: parametros.precioAnterior
                        },
                        {
                            parametro: 'precioNuevo',
                            valor: parametros.precioNuevo
                        },
                        {
                            parametro: 'usuario',
                            valor: parametros.usuario
                        }
                    ];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_actualizarCostoLote`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
    // Ver Modificaciones a lotes
    ModificacionesLotes(parametros) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let conexionSql = new DbHelper_1.default();
                if (parametros) {
                    conexionSql.parametros = [];
                }
                let respuesta = yield conexionSql.Ejecutar(`sp_VerCambiosaLotes`);
                if (!respuesta.hasError) {
                    return {
                        data: respuesta.data,
                        errors: respuesta.errors,
                        hasError: respuesta.hasError
                    };
                }
                else {
                    return respuesta;
                }
            }
            catch (error) {
                (0, classes_1.errorMensaje)(error);
            }
        });
    }
}
exports.default = Llantas;
