import { routes } from './../app.routes';
import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../service/character.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CharactersDialogComponent } from '../characters-dialog/characters-dialog.component';
import { MatButtonModule } from '@angular/material/button';
import {ProgressSpinnerMode, MatProgressSpinnerModule} from '@angular/material/progress-spinner';


@Component({
  selector: 'app-characters',
  standalone: true,
  imports: [NgFor, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './characters.component.html',
  styleUrl: './characters.component.css'
})
export class CharactersComponent implements OnInit {

  characters : any
  loaded : boolean = false

  constructor(private characterService: CharacterService, private router : Router,
    public dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.characterService.getData().subscribe((result) => {
        this.characters = result;
        if(this.characters){
          this.loaded = true
        }
    });
  }

  open(event: Event, item: object) : void {
    this.dialog.open(CharactersDialogComponent, {
      data : {
        character : item
      }
    });
  }

}
