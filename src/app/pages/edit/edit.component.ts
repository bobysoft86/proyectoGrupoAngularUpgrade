import { LibrosInterface } from './../../interface/libros-interface';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
  
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
