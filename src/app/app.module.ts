import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { TodayPreviewComponent } from './today-preview/today-preview.component';
import { TodayHighlightComponent } from './today-highlight/today-highlight.component';
import { PreviousPreviewComponent } from './previous-preview/previous-preview.component';

@NgModule({
  declarations: [
    AppComponent,
    TodayPreviewComponent,
    TodayHighlightComponent,
    PreviousPreviewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
