import { Component, OnInit } from "@angular/core";

// Modals
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { NgbdModalConfirm } from "@shared/modals/modal.confirm/modal.confirm";
import { Cliente } from "@core/models/cliente";
import { ClienteService } from "@core/services/cliente.service";
import { EditClienteComponent } from "../edit/edit-cliente.component";

@Component({
  selector: "app-list-cliente",
  templateUrl: "./list-cliente.component.html",
  styleUrls: ["./list-cliente.component.scss"],
})
export class ListClienteComponent implements OnInit {
  clientes: Cliente[];
  clientesShown: Cliente[];

  constructor(private service: ClienteService, private modalService: NgbModal) {}

  ngOnInit(): void {
    
    this.service.getClientes().subscribe((res) => {
      this.clientes = res;
      this.collectionSize = this.clientes.length;
      this.refreshTable();
    });
  }

  page = 1;
  pageSize = 10;
  collectionSize = 0;

  refreshTable() {
    console.log("ENTRE clientes-->", this.clientes)
    this.clientesShown = this.clientes
      .map((codigo, i) => ({ id: i + 1, ...codigo }))
      .slice(
        (this.page - 1) * this.pageSize,
        (this.page - 1) * this.pageSize + this.pageSize
      );
  }

  openModalConfirm(elemento: Cliente) {
    let modal = this.modalService.open(NgbdModalConfirm);

    modal.result.then(
      (elemento: any) => {
        this.deleteElement(elemento);
      },
      (reason: any) => {
        // Aunque la acción Dismiss no realice acciones, debe capturarse el evento
      }
    );

    modal.componentInstance.elemento = elemento;
  }

  deleteElement(cliente: Cliente) {
    const index = this.clientes.findIndex((item) => {
      return item.id === cliente.id;
    });

    if (index > -1) {
      this.clientes.splice(index, 1);
      // TODO eliminar permanentemente
      this.refreshTable();
    }
  }

  showModalCreateClient(){
    console.log("showModalCreateClient")
    this.modalService.open(EditClienteComponent);
  }
}
