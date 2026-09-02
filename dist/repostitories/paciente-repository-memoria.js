"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PacienteRepositoryMemoria = void 0;
class PacienteRepositoryMemoria {
    proximoId = 3;
    pacientes = [
        {
            id: 1,
            nome: "João das neves",
            cpf: "03525856969",
            telefone: "24999988555",
            dataNascimento: "1990-10-04"
        },
        {
            id: 2,
            nome: "Daynerys Targarian",
            cpf: "52569852159",
            telefone: "2485412555",
            dataNascimento: "1988-11-30"
        }
    ];
    listar(nome) {
        if (!nome)
            return [...this.pacientes];
        return this.pacientes.filter(paciente => paciente.nome.toLowerCase()
            .includes(nome.toLowerCase()));
    }
    buscarPorId(id) {
        return this.pacientes.find(paciente => paciente.id === id);
    }
    buscarPorCpf(cpf) {
        return this.pacientes.find(paciente => paciente.cpf === cpf);
    }
    criar(dados) {
        const paciente = { id: this.proximoId++, ...dados };
        this.pacientes.push(paciente);
        return paciente;
    }
    atualizar(id, dados) {
        const paciente = this.buscarPorId(id);
        if (!paciente)
            return undefined;
        Object.assign(paciente, dados);
        return paciente;
    }
    excluir(id) {
        const indice = this.pacientes.findIndex(paciente => paciente.id === id);
        if (indice === -1)
            return false;
        this.pacientes.splice(indice, 1);
        return true;
    }
}
exports.PacienteRepositoryMemoria = PacienteRepositoryMemoria;
