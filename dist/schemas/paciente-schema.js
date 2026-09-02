"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteIdSchema = exports.pacienteInputSchema = void 0;
const zod_1 = require("zod");
exports.pacienteInputSchema = zod_1.z.object({
    nome: zod_1.z
        .string({ error: "O Nome é obrigatório" })
        .trim()
        .min(3, "O nome deve possuir no mínimo 3 caracteres")
        .max(100, "O nome deve possuir no máximo 100 caracters"),
    cpf: zod_1.z
        .string({ error: "O campo cpf é obrigatório" })
        .regex(/^\d{11}$/, "O CPF deve possiuir 11 dígitos"),
    telefone: zod_1.z
        .string({ error: "O campo telefone é obrigatório" })
        .trim()
        .min(8, "Por favor informe um telefone válido")
        .max(20, "O telefone deve possuir no máximo 20 caracteres"),
    dataNascimento: zod_1.z
        .iso.date({ error: "Informe uma data no formato AAAA-MM-DD" })
        .refine(valor => new Date(`${valor}T00:00:00`) <= new Date(), "a data de nascinento não pode estar no futuro")
});
exports.pacienteIdSchema = zod_1.z.object({
    id: zod_1.z.coerce.number().int().positive("O id deve ser positivo")
});
