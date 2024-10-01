import { Routes } from '@angular/router';
import { CharactersDialogComponent } from './characters-dialog/characters-dialog.component';
import { CharactersComponent } from './characters/characters.component';

export const routes: Routes = [
  { path: 'character', component: CharactersComponent },
  { path: 'character/detail', component: CharactersDialogComponent },
];
