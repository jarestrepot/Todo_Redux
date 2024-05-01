import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './components/title/title.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    TitleComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TitleComponent,
    FooterComponent
  ]
})
export class SharedModule { }
