import { Cliente } from "./cliente";
import { Persona } from "./persona";

export interface Cuenta {
  id: number;
  numeroCuenta: string;
  tipoCuenta: string;
  saldoInicial: number;
  estado: string;
  cliente: Cliente;
}
