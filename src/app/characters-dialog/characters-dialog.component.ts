import { Component, Inject, OnInit } from '@angular/core';
import {MatDialogRef} from'@angular/material/dialog';
import {MAT_DIALOG_DATA, MatDialogContent} from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table'
import { JsonPipe, KeyValuePipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-characters-dialog',
  standalone: true,
  imports: [MatTableModule, KeyValuePipe, JsonPipe, MatDialogContent, NgFor],
  templateUrl: './characters-dialog.component.html',
  styleUrl: './characters-dialog.component.css'
})
export class CharactersDialogComponent implements OnInit{
  displayedColumns: string[] = ['key' , 'value']
  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
  public dialogRef: MatDialogRef<CharactersDialogComponent>) { }

  ngOnInit(): void {
    console.log(this.data);
  }


  onClose(): void {
    this.dialogRef.close();
  }
}
