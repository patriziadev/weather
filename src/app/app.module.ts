import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { TodayPreviewComponent } from './today-preview/today-preview.component';
import { TodayHighlightComponent } from './today-highlight/today-highlight.component';
import { PreviousPreviewComponent } from './previous-preview/previous-preview.component';
import { TodayPreviewEffects} from './today-preview/store/today-preview.effects';
import { environment } from './../environments/environment';
import * as fromApp from './store/app.reducer';
import { CustomDatePipe } from './pipes/custom-date.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TodayPreviewComponent,
    TodayHighlightComponent,
    PreviousPreviewComponent,
    CustomDatePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([TodayPreviewEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
