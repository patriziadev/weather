import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TodayPreviewComponent } from './today-preview/today-preview.component';
import { TodayHighlightComponent } from './today-highlight/today-highlight.component';
import { PreviousPreviewComponent } from './previous-preview/previous-preview.component';
import { TemperatureChangerComponent } from './previous-preview/temperature-changer/temperature-changer.component';
import { TodayPreviewEffects} from './today-preview/store/today-preview.effects';
import { environment } from './../environments/environment';
import * as fromApp from './store/app.reducer';
import { CustomDatePipe } from './pipes/custom-date.pipe';
import { DotToCommaPipe } from './pipes/dot-to-comma.pipe';
import { CelsiusToFarenheitPipe } from './pipes/celsius-to-farenheit.pipe';
import { SpinnerComponent } from './spinner/spinner.component';
import { SearchComponent } from './search/search.component';
import { SearchToolbarComponent } from './search/search-toolbar/search-toolbar.component';
import { SearchFieldComponent } from './search/search-field/search-field.component';
import { SearchResultsComponent } from './search/search-results/search-results.component';
import { SearchEffects } from './search/store/search.effects';

@NgModule({
  declarations: [
    AppComponent,
    TodayPreviewComponent,
    TodayHighlightComponent,
    PreviousPreviewComponent,
    CustomDatePipe,
    DotToCommaPipe,
    TemperatureChangerComponent,
    CelsiusToFarenheitPipe,
    SpinnerComponent,
    SearchComponent,
    SearchToolbarComponent,
    SearchFieldComponent,
    SearchResultsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot(fromApp.appReducer),
    EffectsModule.forRoot([TodayPreviewEffects, SearchEffects]),
    StoreDevtoolsModule.instrument({logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
