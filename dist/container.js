"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pacienteService = void 0;
const paciente_repository_memoria_1 = require("./repostitories/paciente-repository-memoria");
const paciente_service_1 = require("./services/paciente-service");
const pacienteRepository = new paciente_repository_memoria_1.PacienteRepositoryMemoria();
exports.pacienteService = new paciente_service_1.PacienteService(pacienteRepository);
