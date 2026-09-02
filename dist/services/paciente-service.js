"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteService = void 0;
const app_error_1 = require("../errors/app-error");
class PacienteService {
    repository;
    constructor(repository) {
        this.repository = repository;
    }
    listar(nome) {
        return this.repository.listar(nome);
    }
    buscarPorId(id) {
        const paciente = this.repository.buscarPorId(id);
        if (!paciente)
            throw new app_error_1.AppError("Paciente não encontrado", 404);
        return paciente;
    }
    criar(dados) {
        if (this.repository.buscarPorCpf(dados.cpf)) {
            throw new app_error_1.AppError("CPF já cadastrado");
        }
        return this.repository.criar(dados);
    }
    atualizar(id, dados) {
        this.buscarPorId(id);
        const mesmoCpf = this.repository.buscarPorCpf(dados.cpf);
        if (mesmoCpf && mesmoCpf.id === id) {
            throw new app_error_1.AppError("CPF pertence a outro paciente", 409);
        }
        return this.repository.atualizar(id, dados);
    }
    excluir(id) {
        this.buscarPorId(id);
        this.repository.excluir(id);
    }
}
exports.PacienteService = PacienteService;
