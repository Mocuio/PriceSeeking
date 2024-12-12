import { Component, OnChanges, OnInit, SimpleChanges, inject } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { FormsModule, ReactiveFormsModule,FormGroup, UntypedFormBuilder, Validators } from '@angular/forms';
import { CommonModule, NgIf } from '@angular/common';


@Component({
  selector: 'app-delete-input',
  templateUrl: './delete-input.component.html',
  styleUrl: './delete-input.component.css',
  standalone: true,

  imports: [ReactiveFormsModule, CommonModule, NgIf]
})
export class DeleteInputComponent implements OnInit {
    formBuilderService = inject(UntypedFormBuilder);

    form = this.formBuilderService.group({
    product: ['', Validators.required],

  })

  ngOnInit(): void {
    this.form.valueChanges.subscribe(input => console.log(input));
    }
}

