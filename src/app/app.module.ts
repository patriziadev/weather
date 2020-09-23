import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { TodayPreviewComponent } from './today-preview/today-preview.component';
import { TodayHighlightComponent } from './today-highlight/today-highlight.component';
import { PreviousPreviewComponent } from './previous-preview/previous-preview.component';
import { TodayPreviewEffects} from './today-preview/store/today-preview.effects';
import * as fromApp from './store/app.reducer';

@NgModule({
  declarations: [
    AppComponent,
    TodayPreviewComponent,
    TodayHighlightComponent,
    PreviousPreviewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([TodayPreviewEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
