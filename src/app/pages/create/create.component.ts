import { LibrosInterface } from './../../interface/libros-interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})
export class CreateComponent {

  libro!:FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.libro = formBuilder.group({
      img: ["", [Validators.required]],
      title: ["", [Validators.required]],
      autor: ["", [Validators.required]],
      year: [0, [Validators.required]],
      genre: ["", [Validators.required]]
    })
  }
  
  getLibro() {
    console.log(this.libro.value)
  }


}
