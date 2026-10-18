# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test\spiceJetTestCase.spec.ts >> SpiceJetBooking_Ticket
- Location: tests\test\spiceJetTestCase.spec.ts:6:5

# Error details

```
Error: page.goto: Test ended.
Call log:
  - navigating to "https://www.spicejet.com/", waiting until "load"
  - operation was aborted: Test ended.

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
> 17 |          this.page.goto(`${process.env.url}`);
     |                    ^ Error: page.goto: Test ended.
  18 |         // if (`${process.env.Test_Execution_Env == 'qa'}`) {
  19 |         //     this.page.goto(`${process.env.url}`);
  20 |         //     console.log(`${process.env.Test_Execution_Env}`);
  21 |         // }
  22 |         // else if (`${process.env.Test_Execution_Env == 'dev'}`) { 
  23 |         //     this.page.goto(`${process.env.devurl}`);
  24 |         // }
  25 |     }
  26 | 
  27 |     async Allround() { 
  28 |         this.round_trip.check();
  29 |         this.oneWay.check();
  30 | 
  31 |     }
  32 | } 
```