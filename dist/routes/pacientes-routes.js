"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacientesRoutes = void 0;
const express_1 = require("express");
const pacientes_controller_1 = require("../controllers/pacientes-controller");
const pacientesRoutes = (0, express_1.Router)();
exports.pacientesRoutes = pacientesRoutes;
/**
 * @openapi
 * /pacientes:
 *   get:
 *     summary: Lista os pacientes
 *     tags: [Pacientes]
 *     parameters:
 *       - in: query
 *         name: nome
 *         required: false
 *         schema:
 *           type: string
 *         description: Filtra os pacientes pelo nome
 *     responses:
 *       200:
 *         description: Lista de pacientes
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Paciente'
 */
pacientesRoutes.get("/", pacientes_controller_1.listarPacientes);
/**
 * @openapi
 * /pacientes/{id}:
 *   get:
 *     summary: Busca um paciente pelo ID
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Paciente encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Paciente não encontrado
 */
pacientesRoutes.get("/:id", pacientes_controller_1.buscarPacientePorId);
/**
 * @openapi
 * /pacientes:
 *   post:
 *     summary: Cadastra um paciente
 *     tags: [Pacientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PacienteInput'
 *     responses:
 *       201:
 *         description: Paciente cadastrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Paciente'
 *       400:
 *         description: Dados obrigatórios ausentes
 *       409:
 *         description: CPF já cadastrado
 */
pacientesRoutes.post("/", pacientes_controller_1.criarPaciente);
/**
 * @openapi
 * /pacientes/{id}:
 *   put:
 *     summary: Atualiza um paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/PacienteInput'
 *     responses:
 *       200:
 *         description: Paciente atualizado
 *       400:
 *         description: Dados ou ID inválidos
 *       404:
 *         description: Paciente não encontrado
 *       409:
 *         description: CPF pertencente a outro paciente
 */
pacientesRoutes.put("/:id", pacientes_controller_1.atualizarPaciente);
/**
 * @openapi
 * /pacientes/{id}:
 *   delete:
 *     summary: Exclui um paciente
 *     tags: [Pacientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: Paciente excluído
 *       400:
 *         description: ID inválido
 *       404:
 *         description: Paciente não encontrado
 */
pacientesRoutes.delete("/:id", pacientes_controller_1.excluirPaciente);
