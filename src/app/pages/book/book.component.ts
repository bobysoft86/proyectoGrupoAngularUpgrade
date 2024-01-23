import { Component } from '@angular/core';
import { LibreriaComponent } from '../libreria/libreria.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  id!: number;
  producto!: any;

  constructor(
    private servicio: ApiService,
    private rutaActiva: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      console.log(Number(params.get('id')));
      console.log(this.id)
    });
 
    this.servicio.getProductsid(this.id).subscribe((data: any) => {
      this.producto = data;
      console.log(this.producto);
    });
  }
  deleteProducto() {
    this.servicio.deleteProduct(this.id).subscribe();
    alert('Producto eliminado');
  }
}
