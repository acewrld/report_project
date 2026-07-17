import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatSelectModule} from '@angular/material/select';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatTableModule} from '@angular/material/table';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';

const MaterialComponent = [
  MatSidenavModule,
  MatIconModule,
  MatCheckboxModule,
  MatMenuModule,
  MatButtonModule,
  MatMenuTrigger,
  MatMenu,
  MatIcon,
  MatSelectModule,
  MatFormFieldModule,
  MatCardModule,
  MatTableModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatButtonModule,
  MatIconModule,
  MatDividerModule

]

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {}
