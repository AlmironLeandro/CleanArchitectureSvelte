import type { Usuario } from "./Usuario.js";

export type Tarea = {
    id: number;
    titulo: string;
    descripcion: string;
    fecha: string;
    estado: string;
    usuarioId: number;
    usuario: Usuario;
    };