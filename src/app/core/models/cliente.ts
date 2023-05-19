import { Persona } from "./persona";

export interface Cliente {
  id: number;
  password: string;
  usuario: string;
  estado: string;
  persona: Persona;
}
