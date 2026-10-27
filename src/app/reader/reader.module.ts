import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular/lazy';

import { ReaderPageRoutingModule } from './reader-routing.module';

import { ReaderPage } from './reader.page';

import { PdfViewerModule } from 'ng2-pdf-viewer';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReaderPageRoutingModule,
    PdfViewerModule
  ],
  declarations: [ReaderPage]
})
export class ReaderPageModule {}
