import { RouterLink } from '@angular/router';
import { Component, Input } from '@angular/core';
import { LibrosInterface } from '../../interface/libros-interface';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss',
})
export class ProductComponent {
  @Input() product!: LibrosInterface;
}
