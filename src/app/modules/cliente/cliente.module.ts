import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgbPaginationModule } from "@ng-bootstrap/ng-bootstrap";
import { ClienteRoutingModule } from "./cliente-routing.module";
import { ClienteComponent } from "./cliente.component";
import { EditClienteComponent } from "./edit/edit-cliente.component";
import { ListClienteComponent } from "./list/list-cliente.component";

@NgModule({
  declarations: [ClienteComponent, EditClienteComponent, ListClienteComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    NgbPaginationModule,
    FormsModule,
    ClienteRoutingModule,
    ReactiveFormsModule
  ],
})
export class ClienteModule {}
