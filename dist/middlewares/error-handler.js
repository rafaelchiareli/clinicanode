"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.erroHandler = void 0;
const app_error_1 = require("../errors/app-error");
const erroHandler = (error, request, response, next) => {
    if (error instanceof app_error_1.AppError) {
        response.status(error.statusCode).json({ mensagem: error.message });
        return;
    }
    console.log(error);
    response.status(500).json({ mensagem: "Erro interno de servidor" });
};
exports.erroHandler = erroHandler;
