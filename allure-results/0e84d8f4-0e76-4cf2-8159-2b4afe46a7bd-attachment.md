# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket
- Location: tests\test\spiceJetTestCase.spec.ts:6:5

# Error details

```
Error: locator.check: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('checkbox', { name: 'one way' })

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
  12 |         this.round_trip = page.getByRole('checkbox', { name: 'round trip' });
  13 |         this.oneWay = page.getByRole('checkbox', { name: 'one way' });
  14 |     }
  15 | 
  16 |     async goToUrl() { 
  17 | 
  18 |         if (process.env.TEST_EXECUTION_ENV_QA == 'qa') {
  19 |             await this.page.goto(`${process.env.url}`);
  20 |             console.log(`${process.env.Test_Execution_Env}`);
  21 |         }
  22 |         else if (process.env.TEST_EXECUTION_ENV_DEV == 'dev') {
  23 |             await this.page.goto(`${process.env.devurl}`);
  24 |         }
  25 |        
  26 |     }
  27 | 
  28 |     async Allround() { 
> 29 |         await this.oneWay.check();
     |                           ^ Error: locator.check: Target page, context or browser has been closed
  30 |        await this.round_trip.check();
  31 | 
  32 |     }
  33 | } 
```