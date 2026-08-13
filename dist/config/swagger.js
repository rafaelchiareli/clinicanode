"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.swaggerSpec = void 0;
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const node_path_1 = __importDefault(require("node:path"));
const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "API da Clínica",
            version: "1.0.0",
            description: "API desenvolvida nas aulas de Node.js"
        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Ambiente de desenvolvimento"
            }
        ],
        tags: [
            {
                name: "Pacientes",
                description: "Operações relacionadas aos pacientes"
            }
        ],
        components: {
            schemas: {
                Paciente: {
                    type: "object",
                    properties: {
                        id: { type: "integer", example: 1 },
                        nome: { type: "string", example: "Maria Silva" },
                        cpf: { type: "string", example: "11111111111" },
                        telefone: { type: "string", example: "21999990001" },
                        dataNascimento: {
                            type: "string",
                            format: "date",
                            example: "1990-05-10"
                        }
                    }
                },
                PacienteInput: {
                    type: "object",
                    required: ["nome", "cpf", "telefone", "dataNascimento"],
                    properties: {
                        nome: { type: "string", example: "Ana Oliveira" },
                        cpf: { type: "string", example: "33333333333" },
                        telefone: { type: "string", example: "21999990003" },
                        dataNascimento: {
                            type: "string",
                            format: "date",
                            example: "1995-08-15"
                        }
                    }
                },
                MensagemErro: {
                    type: "object",
                    properties: {
                        mensagem: {
                            type: "string",
                            example: "Paciente não encontrado"
                        }
                    }
                }
            }
        }
    },
    apis: [
        node_path_1.default.resolve(process.cwd(), "src/routes/*.ts"),
        node_path_1.default.resolve(process.cwd(), "dist/routes/*.js")
    ]
};
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
exports.swaggerSpec = swaggerSpec;
