import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListClienteComponent } from "./list/list-cliente.component";
import { EditClienteComponent } from "./edit/edit-cliente.component";

const routes: Routes = [
  {
    path: "",
    component: ListClienteComponent,
  },
  {
    path: "edit-cliente",
    component: EditClienteComponent,
  },
  // Not found
  { path: "**", redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClienteRoutingModule {}
