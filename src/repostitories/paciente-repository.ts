import { Paciente } from "../models/paciente";
import { PacienteInput } from "../schemas/paciente-schema";

export interface PacienteRepository {
    listar(nome?: string): Paciente[];
    buscarPorId(id: number) : Paciente | undefined;
    buscarPorCpf(cpf: string) : Paciente | undefined;
    criar(dados: PacienteInput) : Paciente;
    atualizar(id: number, dados: PacienteInput) : Paciente | undefined;
    excluir(id:number) : boolean;

}