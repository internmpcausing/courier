
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatInputModule, 
  MatDialogModule, 
  MatButtonModule, 
  MatIconModule,
  MatProgressSpinnerModule,
  MatSelectModule,
  MatSidenavModule,
  MatTableModule,
  MatListModule,
  MatMenuModule,
  MatCheckboxModule,
  MatCardModule,
  MatTabsModule,
  MatAutocompleteModule} from '@angular/material';



@NgModule({
  imports: [
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  exports: [
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatSelectModule,
    MatMenuModule,
    MatSidenavModule,
    MatTableModule,
    MatListModule,
    MatAutocompleteModule,
    MatCardModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  declarations: []
})
export class MaterialModule { }
