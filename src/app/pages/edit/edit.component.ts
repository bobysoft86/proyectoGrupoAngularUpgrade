
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
    this.apiService.getProductsid(this.url[3]).subscribe((res: any) => {
      this.libro = res;
      console.log('soy la lista', this.libro);
    });
  };

  updateProduct(){
    this.apiService.updateProduct(this.url[3],this.libro).subscribe()

  console.log(this.libro);
  
}



}


// export interface LibrosInterface {
//   id:number;
//   img:string;
//   title:string;
//   autor:string;
//   year:string;
//   genre:string;
// }
