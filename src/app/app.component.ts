import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { CharactersComponent } from "./characters/characters.component";
import { MarvelQueriesBinnacleComponent } from './marvelqueriesbinnacle/marvelqueriesbinnacle.component';
import { MatDialog } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CharactersComponent, MatButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'openpaytest-gui';

  constructor(public dialog: MatDialog){}

  openBinnacle() : void {
    this.dialog.open(MarvelQueriesBinnacleComponent);
  }
}
