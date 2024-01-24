import { Component } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LibrosInterface } from '../../interface/libros-interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule,CommonModule,],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.scss'
})
export class EditComponent {
 url:Array <any> = window.location.pathname.split('/');
 libro!: LibrosInterface;

  newLibro!:LibrosInterface;


  constructor( private apiService: ApiService, private router: Router) {}
 

  ngOnInit() {
    this.apiService.getProductsid(this.url[2]).subscribe((res: any) => {
      this.libro = res.data;
      console.log(this.libro);
      console.log('soy la lista', this.libro);
    });
  };

  updateProduct(){
    this.apiService.updateProduct(this.url[2],this.libro).subscribe(response=>{
      console.log('Solicitud POST exitosa:', response)
      alert(`Edicion en libro ${this.libro.title} realizada exitosamente`)
      this.router.navigate(['/libreria'])
    })

    }



}