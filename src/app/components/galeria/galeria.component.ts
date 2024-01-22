import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { LibrosInterface } from '../../interface/libros-interface';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';
import { PaginacionComponent } from '../paginacion/paginacion.component';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [ProductComponent, RouterLink, PaginacionComponent,FormsModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  productos!: LibrosInterface[];
  page:number = 1;
  result!: LibrosInterface[];
  Search:any="";
  



  constructor(private servicio: ApiService) {
    this.servicio.getProducts(this.page).subscribe((data: any) => {
      this.productos = data;
    });
  }
filter(){
  this.result = this.productos.filter((search)=> search.autor.includes(this.Search));
  this.productos = this.result;
  console.log(this.Search)
  
}
  updatePage(page:number) {
    this.servicio.getProducts(page).subscribe((data: any) => {
      this.productos = data;
    });
  }
  
}
