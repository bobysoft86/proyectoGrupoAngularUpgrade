import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GaleriaComponent } from '../../components/galeria/galeria.component';

@Component({
  selector: 'app-libreria',
  standalone: true,
  imports: [GaleriaComponent, RouterLink],
  templateUrl: './libreria.component.html',
  styleUrl: './libreria.component.scss',
})
export class LibreriaComponent {}
