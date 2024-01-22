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

  libro:FormGroup;

  constructor(private formBuilder:FormBuilder, private apiService: ApiService ) {
    this.libro = formBuilder.group({
      id:[""],
      img: [""],
      title: [""],
      autor: [""],
      year: [0],
      genre: [""]
    })
  }
  
  getLibro() {
    this.apiService.postProducts(this.libro.value).subscribe(response=>{console.log('Solicitud POST exitosa:', response)})
        console.log(this.libro.value);
    }
  }

