"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const swagger_1 = require("./config/swagger");
const pacientes_routes_1 = require("./routes/pacientes-routes");
const error_handler_1 = require("./middlewares/error-handler");
const app = (0, express_1.default)();
exports.app = app;
app.use(express_1.default.json());
app.get("/", (request, response) => {
    return response.status(200).json({
        nome: "Api da, Clinica",
        versao: "1.0.0",
        documentacao: "/docs"
    });
});
app.use("/docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swagger_1.swaggerSpec, {
    swaggerOptions: {
        supportedSubmitMethods: [
            "get",
            "post",
            "put",
            "patch",
            "delete"
        ]
    }
}));
app.use("/pacientes", pacientes_routes_1.pacientesRoutes);
app.use(error_handler_1.erroHandler);
