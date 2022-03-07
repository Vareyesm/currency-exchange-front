import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertCurrencyExchangeComponent } from './convert-currency-exchange.component';

describe('ConvertCurrencyExchangeComponent', () => {
  let component: ConvertCurrencyExchangeComponent;
  let fixture: ComponentFixture<ConvertCurrencyExchangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConvertCurrencyExchangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConvertCurrencyExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
