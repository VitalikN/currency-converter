import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CurrencyConverterComponent } from './currency-converter/currency-converter.component';

import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CurrencyConverterComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
