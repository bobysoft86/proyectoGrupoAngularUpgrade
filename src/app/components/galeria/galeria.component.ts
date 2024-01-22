import { Component } from '@angular/core';
import { ProductComponent } from '../product/product.component';
import { LibrosInterface } from '../../interface/libros-interface';
import { ApiService } from '../../services/api.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [ProductComponent, RouterLink],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.scss',
})
export class GaleriaComponent {
  productos!: LibrosInterface[];

  constructor(private servicio: ApiService) {}
  ngOnInit(): void {
    console.log(this.productos);

    this.servicio.getProducts().subscribe((data: any) => {
      this.productos = data;
    });
  }
}
