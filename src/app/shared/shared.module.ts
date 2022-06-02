import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageComponent } from './components/message/message.component';

@NgModule({
  declarations: [MessageComponent],
  imports: [CommonModule],
  exports: [MessageComponent],
})
export class SharedModule {}
