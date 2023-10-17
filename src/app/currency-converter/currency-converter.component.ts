import { Component, OnInit } from '@angular/core';
import { CurrencyService } from '../currency.service';

@Component({
  selector: 'app-currency-converter',
  templateUrl: './currency-converter.component.html',
  styleUrls: ['./currency-converter.component.scss'],
})
export class CurrencyConverterComponent implements OnInit {
  rates: any;
  amount1 = 1;
  amount2: number = 0;
  currency1 = 'USD';
  currency2 = 'EUR';
  usdToUah: number = 0;
  eurToUah: number = 0;

  constructor(private currencyService: CurrencyService) {}
  truncateToThreeDecimals(value: number): number {
    return Math.trunc(value * 1000) / 1000;
  }
  ngOnInit(): void {
    this.currencyService.getRates().subscribe(
      (data: any) => {
        this.rates = data.conversion_rates;
        this.usdToUah = this.truncateToThreeDecimals(1 / this.rates.USD);
        this.eurToUah = this.truncateToThreeDecimals(1 / this.rates.EUR);
        this.convert();
      },
      (error) => {
        console.error('Error fetching rates:', error);
      }
    );
  }

  convert(): void {
    if (
      this.rates &&
      this.rates[this.currency2] &&
      this.rates[this.currency1]
    ) {
      const rate = this.rates?.[this.currency2] / this.rates?.[this.currency1];
      this.amount2 = this.truncateToThreeDecimals(this.amount1 * rate);
    }
  }

  onAmount1Change(value: number): void {
    this.amount1 = value;
    this.convert();
  }

  onCurrency1Change(currency: string): void {
    this.currency1 = currency;
    this.convert();
  }

  onCurrency2Change(currency: string): void {
    this.currency2 = currency;
    this.convert();
  }
}
