# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket hyd to blr
- Location: tests\test\spiceJetTestCase.spec.ts:11:9

# Error details

```
Error: locator.click: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('checkbox', { name: 'Family & Friends' })

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | 
  4  | export class passengers_Details {
  5  |     
  6  |     readonly page: Page;
  7  |     readonly passengers: Locator;
  8  |     readonly adult_plus: Locator;
  9  |     readonly childrens_plus: Locator;
  10 |     readonly done: Locator;
  11 |     readonly currency: Locator;
  12 |     readonly currency_usd: Locator;
  13 |     readonly family_friends: Locator;
  14 |     readonly search_flights: Locator;
  15 | 
  16 |     constructor(page: Page) { 
  17 |         this.page = page;
  18 |         this.passengers = page.locator('//div[text()="Passengers"]');
  19 |         this.adult_plus = page.locator('//div[@data-testid="Adult-testID-plus-one-cta"]');
  20 |         this.childrens_plus = page.locator('//div[@data-testid="Children-testID-plus-one-cta"]');
  21 |         // this.done = page.getByText('Done', { exact: true });
  22 |         this.done = page.locator('//div[@data-testid="home-page-travellers-done-cta"]');
  23 |         this.currency = page.locator('[data-testid="application-id"]').getByText('Currency');
  24 |         this.currency_usd = page.locator('//div[text()="USD"]');
  25 | 
  26 |         this.family_friends = page.getByRole('checkbox', { name: 'Family & Friends' });
  27 |         this.search_flights = page.getByRole('button', { name: 'Search Flight' });
  28 | 
  29 |     }
  30 |    
  31 |     async Booking() { 
  32 |        await  this.passengers.click();
  33 |         await this.adult_plus.click();
  34 |         await this.adult_plus.click();
  35 |         await this.childrens_plus.click();
  36 |         await this.childrens_plus.click();
  37 |         await this.done.scrollIntoViewIfNeeded();
  38 |         await this.page.mouse.wheel(0, 300);
  39 |         await this.done.click();
  40 |         await this.currency.click();
  41 |         await this.currency_usd.click();
> 42 |         await this.family_friends.click();
     |                                   ^ Error: locator.click: Target page, context or browser has been closed
  43 |         await this.search_flights.click();
  44 |     }
  45 | 
  46 | }
```