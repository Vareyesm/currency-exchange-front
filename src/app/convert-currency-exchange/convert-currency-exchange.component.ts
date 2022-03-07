import { Component, OnInit } from '@angular/core';
import {CurrencyExchangeService} from "../_services/currency-exchange.service";

@Component({
  selector: 'app-convert-currency-exchange',
  templateUrl: './convert-currency-exchange.component.html',
  styleUrls: ['./convert-currency-exchange.component.scss']
})
export class ConvertCurrencyExchangeComponent implements OnInit {
  form: any = {
    sourceCurrencyId: null,
    destinationCurrencyId: null,
    exchangeRateValue: null,
    amountConvert: null
  };
  convertedValue: number = 0;
  message: string = '';

  constructor(private currencyExchangeService: CurrencyExchangeService) { }

  ngOnInit(): void {}
  onChange(): void {
    const { sourceCurrencyId, destinationCurrencyId } = this.form;
    this.form.exchangeRateValue = null;
    this.convertedValue = 0;
    if ((sourceCurrencyId && destinationCurrencyId) && sourceCurrencyId !== destinationCurrencyId) {
      this.currencyExchangeService.getExchangeRateValue(sourceCurrencyId, destinationCurrencyId).subscribe(
        data => {
          this.message = '';
          this.form.exchangeRateValue = data.result;
        },
        error => this.message = error.error.message || error.error.error
      )
    }
  }
  onSubmit(): void {
    this.currencyExchangeService.convertCurrency(this.form).subscribe(
      data => {
        this.message = '';
        this.convertedValue = data.result;
      },
      error => this.message = error.error.message || error.error.error
    )
  }
}
