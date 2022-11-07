"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exitoMensaje = exports.errorMensajePersonaliado = exports.errorMensaje = void 0;
function errorMensaje(mensaje) {
    let respuesta = {
        data: [],
        errors: [{ mensaje }],
        hasError: true
    };
    return respuesta;
}
exports.errorMensaje = errorMensaje;
function errorMensajePersonaliado(mensaje, citricidad = 1000) {
    if (citricidad === 1000) {
        mensaje = 'ocurrio un error interno, Notifique al Administrador';
    }
    let respuesta = { data: null, errors: [{ codigo: -1, descripcion: mensaje, citricidad }], hasError: true };
}
exports.errorMensajePersonaliado = errorMensajePersonaliado;
function exitoMensaje(mensaje) {
    let respuesta = {
        data: [mensaje], errors: [], hasError: false
    };
    return respuesta;
}
exports.exitoMensaje = exitoMensaje;
