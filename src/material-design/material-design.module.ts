import { NgModule } from '@angular/core';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MAT_MOMENT_DATE_FORMATS, MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import {
  MatStepperModule,
  MatTabsModule,
  MatButtonToggleModule,
  MatInputModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatTooltipModule,
  MatButtonModule,
  MatSelectModule,
  MatDatepickerModule,
  MatRadioModule,
  MatCardModule,
  MatToolbarModule,
  MatDialogModule,
  MatSidenavModule,
  MatExpansionModule,
  MatListModule,
  MatMenuModule,
  MatProgressBarModule,
  MatSortModule,
  MatTableModule,
  MatPaginatorModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatProgressSpinnerModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatSortModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    DragDropModule
  ],
  exports: [
    MatStepperModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatInputModule,
    MatFormFieldModule,
    MatSortModule,
    MatCheckboxModule,
    MatTooltipModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatDialogModule,
    MatSidenavModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatProgressBarModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    DragDropModule
  ],
  providers: [
    { provide: DateAdapter, useClass: MomentDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS }
  ],
  declarations: []
})
export class MaterialDesignModule { }