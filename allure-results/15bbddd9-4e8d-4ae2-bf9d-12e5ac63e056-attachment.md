# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket
- Location: tests\test\spiceJetTestCase.spec.ts:6:5

# Error details

```
TimeoutError: locator.click: Timeout 10000ms exceeded.
Call log:
  - waiting for locator('[data-testid="round-trip-radio-button"] circle')

```

# Test source

```ts
  1  | import { Page, Locator } from '@playwright/test';
  2  | 
  3  | export class DashboardPage { 
  4  |     
  5  |     readonly page: Page;
  6  | 
  7  |     readonly round_trip: Locator;
  8  |     readonly oneWay: Locator;
  9  | 
  10 |     constructor(page: Page) { 
  11 |         this.page = page;
  12 |         this.round_trip = page.locator('[data-testid="round-trip-radio-button"] circle');
  13 |         this.oneWay = page.locator('circle').first();
  14 |     }
  15 | 
  16 |     async goToUrl() { 
  17 | 
  18 |         if (process.env.TEST_EXECUTION_ENV_QA == 'qa') {
  19 |             await this.page.goto(`${process.env.url}`);
  20 |             // await this.page.keyboard.press('Escape');
  21 |             console.log(`${process.env.Test_Execution_Env}`);
  22 |         }
  23 |         else if (process.env.TEST_EXECUTION_ENV_DEV == 'dev') {
  24 |             await this.page.goto(`${process.env.devurl}`);
  25 |             // await this.page.keyboard.press('Escape');
  26 |         }
  27 |        
  28 |     }
  29 | 
  30 |     async Allround() { 
  31 |         // await this.page.keyboard.press('Escape');
> 32 |         await this.round_trip.click();
     |                               ^ TimeoutError: locator.click: Timeout 10000ms exceeded.
  33 |         await this.oneWay.click();
  34 | 
  35 |     }
  36 | } 
```