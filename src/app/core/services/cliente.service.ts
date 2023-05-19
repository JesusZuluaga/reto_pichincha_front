import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Cliente } from "@core/models/cliente";

//import { environment as env } from "@environments/environment";

//const BASE: string = env.serverUrl;

@Injectable({
  providedIn: "root",
})
export class ClienteService {
  constructor(private httpClient: HttpClient) {}

  public getClientes() {
    return this.httpClient.get<Cliente[]>("http://localhost:8080/clientes");
  }

  public saveCliente(cliente: Cliente) {
    return this.httpClient.post<Cliente>("http://localhost:8080/clientes", cliente).subscribe(data => {
      console.log("LLEGO Cliente saved--->"+data);
    });
  }

  public deleteCliente(clienteId: string) {
    return this.httpClient.post<void>("http://localhost:8080/clientes", clienteId).subscribe(data => {
      console.log("LLEGO Cliente saved--->"+data);
    });
  }
}
