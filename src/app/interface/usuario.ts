import { Sucursal } from "./sucursal";

export interface Usuario {
    usuarioId: number;
    firstName: string;
    lastName: string;
    username: string;
    clave: string;
    sucursal: Sucursal;
}