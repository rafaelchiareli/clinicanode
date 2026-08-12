import { Request, Response } from 'express';
import { Paciente } from '../models/paciente';
import { stat } from 'node:fs';

let proximoId = 3;

const pacientes: Paciente[] = [
    {
        id: 1,
        nome: "Rafael Chiareli",
        cpf: "0022258555",
        telefone: "24999999999",
        dataNascimento: "1990-10-10"
    },
    {
        id: 2,
        nome: "Samanta Costa",
        cpf: "25888523695",
        telefone: "24948482255",
        dataNascimento: "1996-12-12"
    }
];

export function listarPacientes(
    request: Request,
    response: Response
): Response {
    const nome = request.query.nome?.toString().toLowerCase();
    if (!nome) {
        return response.status(200).json(pacientes);
    }
    const resultado = pacientes.filter(paciente => paciente.nome.toLocaleLowerCase().includes(nome));
    return response.status(200).json(resultado);
}

export function buscarPacientePorId(
    request: Request,
    response: Response
): Response {
    const id = Number(request.params.id);
    if (Number.isNaN(id)) {
        return response.status(400).json({
            mensagem: "O Id deve ser um número"
        });
    }
    const paciente = pacientes.find(x => x.id == id);
    if (!paciente) {
        return response.status(404).json({]
            mensagem: "Paciente não encontrado"
        });
    }
    return response.status(200).json(paciente);
}

export function criarPaciente(
    request: Request,
    response: Response
): Response {
    const { nome, cpf, telefone, dataNascimento } = request.body;
    if (!nome || !cpf || !telefone || !dataNascimento) {
        return response.status(400).json({
            mensagem: "Todos os campos são obrigatórios"
        });
    }

    const cpfExistente = pacientes.some(paciente => paciente.cpf === cpf);
    if (cpfExistente) {
        return response.status(409).json({
            mensagem: "Cpf já cadastrado"
        });
    }

    const novoPaciente: Paciente = {
        id: proximoId++,
        nome,
        cpf,
        telefone,
        dataNascimento
    };

    pacientes.push(novoPaciente);
    return response.status(201).json(novoPaciente);
}

export function atualizarPaciente(
    request: Request,
    response: Response
): Response {
    const id = Number(request.params.id);
    if (Number.isNaN(id)) {
        return response.status(400).json({ mensagem: "Id inválido" });
    }
    const paciente = pacientes.find(x => x.id === id);
    if (!paciente) {
        return response.status(404).json({ mensagem: "Paciente não encontrado" });
    }

    const { nome, cpf, telefone, dataNascimento } = request.body;

    if (!nome || !cpf || !telefone || !dataNascimento) {
        return response.status(400).json({ mensagem: "Todos os campos são obrigatórios" });
    }

    const cpfUtilizado = pacientes.some(x => x.cpf === cpf && x.id !== id);

    if (cpfUtilizado) {
        return response.status(409).json({ mensagem: `O Cpf ${cpf} já está cadastrado para outro paciente` });
    }

    paciente.nome = nome;
    paciente.cpf = cpf;
    paciente.telefone = telefone;
    paciente.dataNascimento = dataNascimento;

    return response.status(200).json(paciente);
}

export function excluirPaciente(
    request: Request,
    response: Response
): Response {
    const id = Number(request.params.id);
    if (Number.isNaN(id)){
        return response.status(400).json({mensagem: "Id Inválido"});

    }
    const indice = pacientes.findIndex(x => x.id === id);
    if (indice === -1){
        return response.status(404).json({mensagem: "Paciente não encontrado"});
    }
    pacientes.splice(indice, 1);
    return response.status(204).send();
}