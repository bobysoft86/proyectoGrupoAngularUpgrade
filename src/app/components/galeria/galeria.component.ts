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
  allProducts!: LibrosInterface[];



  constructor(private servicio: ApiService) {
    this.servicio.getProducts(this.page).subscribe((data: any) => {
      this.productos = data.data;

    });

    this.servicio.getAllProducts().subscribe((data: any) => {
      this.allProducts = data.data;
    });
    
  }
filter(){
  console.log(this.productos);
  this.result = this.allProducts.filter((search)=> search.title.toLowerCase().includes(this.Search.toLowerCase()));

  this.productos = this.result;
  
}

  updatePage(page:number) {
    this.page = page;
    this.servicio.getProducts(page).subscribe((data: any) => {
      this.productos = data;
    });
  }
  
}
