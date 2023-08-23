import type { Tarea } from "./Tarea.js";

export type Usuario = {
    id: number;
    nombre: string;
    apellido: string;
    email: string;
    password: string;
    rol: string;
    tareas: Tarea[];
    };
