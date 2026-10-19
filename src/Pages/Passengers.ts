import { Page, Locator } from '@playwright/test';


export class passengers_Details {
    
    readonly page: Page;
    readonly passengers: Locator;
    readonly adult_plus: Locator;
    readonly childrens_plus: Locator;
    readonly done: Locator;
    readonly currency: Locator;
    readonly currency_usd: Locator;
    readonly search_flights: Locator;

    constructor(page: Page) { 
        this.page = page;
        this.passengers = page.locator('//div[text()="Passengers"]');
        this.adult_plus = page.locator('//div[@data-testid="Adult-testID-plus-one-cta"]');
        this.childrens_plus = page.locator('//div[@data-testid="Children-testID-plus-one-cta"]');
        // this.done = page.getByText('Done', { exact: true });
        this.done = page.locator('//div[@data-testid="home-page-travellers-done-cta"]');
        this.currency = page.locator('[data-testid="application-id"]').getByText('Currency');
        this.currency_usd = page.locator('//div[text()="USD"]');

        this.search_flights = page.locator('[data-testid="home-page-flight-cta"]')

    }
   
    async Booking() { 
       await  this.passengers.click();
        await this.adult_plus.click();
        await this.adult_plus.click();
        await this.childrens_plus.click();
        await this.childrens_plus.click();
        // await this.done.scrollIntoViewIfNeeded();
        // await this.page.mouse.wheel(0, 300);
        await this.done.click();
        await this.currency.click();
        await this.currency_usd.click();
        await this.search_flights.click();
    }

}