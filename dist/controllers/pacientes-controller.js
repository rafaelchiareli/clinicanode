"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarPacientes = listarPacientes;
exports.buscarPacientePorId = buscarPacientePorId;
exports.criarPaciente = criarPaciente;
exports.atualizarPaciente = atualizarPaciente;
exports.excluirPaciente = excluirPaciente;
const container_1 = require("../container");
function listarPacientes(req, res) {
    const nome = req.query.nome?.toString();
    return res.status(200).json(container_1.pacienteService.listar(nome));
}
function buscarPacientePorId(req, res) {
    return res.status(200).json(container_1.pacienteService.buscarPorId(Number(req.params.id)));
}
function criarPaciente(req, res) {
    return res.status(201).json(container_1.pacienteService.criar(req.body));
}
function atualizarPaciente(req, res) {
    return res.status(200).json(container_1.pacienteService.atualizar(Number(req.params.id), req.body));
}
function excluirPaciente(req, res) {
    container_1.pacienteService.excluir(Number(req.params.id));
    return res.status(204).send();
}
