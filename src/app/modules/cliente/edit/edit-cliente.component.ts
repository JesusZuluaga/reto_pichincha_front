import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Cliente } from '@core/models/cliente';
import { ClienteService } from '@core/services/cliente.service';

@Component({
  selector: 'app-edit-cliente',
  templateUrl: './edit-cliente.component.html',
  styleUrls: ['./edit-cliente.component.scss']
})
export class EditClienteComponent implements OnInit {
  action: string;
  cliente: Cliente;
  formulario: FormGroup;
  
  constructor(private service: ClienteService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.formulario = this.formBuilder.group({
      password: '',
      usuario: '',
      estado: 'ACTIVO',
      persona: this.formBuilder.group({
        numeroDocumento: '',
        tipoDocumento: '',
        nombre: '',
        apellido: '',
        genero: '',
        direccion: '',
        telefono: ''
      })
    });
  }

  onSubmit() {
    // Aquí puedes implementar la lógica para guardar los datos del formulario
    //console.log(this.formulario.value);
    this.service.saveCliente(this.formulario.value);
  }

}
