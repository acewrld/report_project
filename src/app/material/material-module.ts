import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatIcon, MatIconModule } from '@angular/material/icon';
import { MatMenu, MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';

const MaterialComponent = [
  MatSidenavModule,
  MatIconModule,
  MatCheckboxModule,
  MatMenuModule,
  MatButtonModule,
  MatMenuTrigger,
  MatMenu,
  MatIcon,

]

@NgModule({
  declarations: [],
  imports: [MaterialComponent],
  exports: [MaterialComponent]
})
export class MaterialModule {}
