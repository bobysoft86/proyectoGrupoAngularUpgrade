import { Component } from '@angular/core';
import { LibreriaComponent } from '../libreria/libreria.component';
import { ApiService } from '../../services/api.service';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-book',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book.component.html',
  styleUrl: './book.component.scss',
})
export class BookComponent {
  id!: any;
  producto!: any;

  constructor(
    private servicio: ApiService,
    private rutaActiva: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit(): void {
    this.rutaActiva.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log(params);
      console.log(this.id);
    });
 
    this.servicio.getProductsid(this.id).subscribe((data: any) => {
      this.producto = data.data;
      console.log(data);
    });
  }
  
  deleteProducto() {
    this.servicio.deleteProduct(this.id).subscribe();
    alert('Producto eliminado');
    this.router.navigate(['/libreria'])
  }
}
