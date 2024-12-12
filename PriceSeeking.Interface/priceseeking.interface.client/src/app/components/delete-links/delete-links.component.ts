import { AfterViewInit, Component, ViewChild, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { NgIf } from '@angular/common';
import { DeleteInputComponent } from '../delete-input/delete-input.component';

/**
 * @title Table with pagination
 */
@Component({
  selector: 'table-pagination-example',
  styleUrl: 'delete-links.component.css',
  standalone: true,
  templateUrl: 'delete-links.component.html',
  imports: [MatTableModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, FormsModule, DeleteInputComponent],
})

export class DeleteLinksComponent implements AfterViewInit {
  displayedColumns: string[] = ['position', 'name', 'link'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
    paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
};
export interface PeriodicElement {
  name: string;
  position: number
  link: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'Hydrogen', link: "1.007"},
  { position: 2, name: 'Helium', link: "4.0026"},
  { position: 3, name: 'Lithium', link: "6.941"},
  { position: 4, name: 'Beryllium', link: "9.0122"},
  { position: 5, name: 'Boron', link: "10.8" },
  { position: 6, name: 'Carbon', link: "12.010"},
  { position: 7, name: 'Nitrogen', link: "14.006"},
  { position: 8, name: 'Oxygen', link: "12.010" },
  { position: 9, name: 'Fluorine', link: "12.010" },
  { position: 10, name: 'Neon', link: "12.010" },
  { position: 11, name: 'Sodium', link: "12.010" },
  { position: 12, name: 'Magnesium', link: "12.010" },
  { position: 13, name: 'Aluminum', link: "12.010" },
  { position: 14, name: 'Silicon', link: "12.010" },
  { position: 15, name: 'Phosphorus', link: "12.010" },
  { position: 16, name: 'Sulfur', link: "12.010" },
  { position: 17, name: 'Chlorine', link: "12.010" },
  { position: 18, name: 'Argon', link: "12.010" },
  { position: 19, name: 'Potassium', link: "12.010" },
  { position: 20, name: 'Calcium', link: "40.078"},
];
