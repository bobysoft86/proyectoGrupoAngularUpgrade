import { LibrosInterface } from './../../interface/libros-interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from '../../services/api.service';


@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  libro!:FormGroup;

  constructor(private formBuilder:FormBuilder, private apiService: ApiService ) {
    this.libro = formBuilder.group({
      img: ["", [Validators.required]],
      title: ["", [Validators.required]],
      autor: ["", [Validators.required]],
      year: [0, [Validators.required]],
      genre: ["", [Validators.required]]
    })
  }
  
  getLibro() {
    this.apiService.postProducts(this.libro).subscribe(response=>{console.log('Solicitud POST exitosa:', response)})
    alert("articulo creado satisfactoriamente")
    window.location.reload()
        console.log(this.libro);
    }
    }

