import { prisma } from "../lib/prisma";
import { Paciente } from "../models/paciente";  
import { PacienteInput } from "../schemas/paciente-schema";
import { PacienteRepository } from "./paciente-repository";


function convertetrData(data: string) : Date{
    return new Date(`${data}T00:00:00`);
}

function mapearPaciente(registro: {
    id: number;
    nome: string;
    cpf :string;
    telefone: string;
    dataNascimento:Date;
}) : Paciente {
    return {
        id: registro.id,
        nome: registro.nome,
        cpf: registro.cpf,
        dataNascimento : registro.dataNascimento.toISOString().slice(0,10),
        telefone : registro.telefone
    }
}