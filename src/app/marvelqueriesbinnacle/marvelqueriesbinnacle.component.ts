import { QueriesService } from './../service/queries.service';
import { JsonPipe, KeyValuePipe, NgFor } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogContent, MatDialogRef } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';
import {CdkCopyToClipboard, ClipboardModule} from '@angular/cdk/clipboard';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-marvelqueriesbinnacle',
  standalone: true,
  imports: [ NgFor, ClipboardModule, MatDialogContent, MatTableModule, MatButtonModule, FormsModule],
  templateUrl: './marvelqueriesbinnacle.component.html',
  styleUrl: './marvelqueriesbinnacle.component.css'
})
export class MarvelQueriesBinnacleComponent implements OnInit{

  queries : any
  displayedColumns : string[] = ["statusCode", "requestType", "url", "hash", "info", "requestDateTime", "responseDateTime", "responseTime", "result"]

  constructor(public dialogRef: MatDialogRef<MarvelQueriesBinnacleComponent>, private queriesService : QueriesService) { }

  ngOnInit(): void {
    this.queriesService.getData().subscribe((result) => {
      this.queries = result;
      console.log(this.queries);
  });
  }

  onClose(): void {
    this.dialogRef.close();
  }
}
