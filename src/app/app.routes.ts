import { Routes } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { LibreriaComponent } from './pages/libreria/libreria.component';
import { BookComponent } from './pages/book/book.component';
import { EditComponent } from './pages/edit/edit.component';
import { CreateComponent } from './pages/create/create.component';

export const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'libreria',
    component: LibreriaComponent,
  },
  {
    path: 'book/:id',
    component: BookComponent,
  },
  {
    path: 'book/edit/:id',
    component: EditComponent,
  },
  {
    path: 'book/create',
    component: CreateComponent,
  },
];
