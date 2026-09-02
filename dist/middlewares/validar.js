"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validar = validar;
function validar(schema, origem) {
    return (request, response, next) => {
        const resultado = schema.safeParse(request[origem]);
        if (!resultado.success) {
            return response.status(400).json({
                mensagem: "Dados inválidos",
                erros: resultado.error.issues.map(erro => ({
                    campo: erro.path.join("."),
                    mensagem: erro.message
                }))
            });
        }
        Object.assign(request[origem], resultado.data);
        return next();
    };
}
