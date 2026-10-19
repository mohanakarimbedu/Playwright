import { Page, Locator } from '@playwright/test';

export class DashboardPage { 
    
    readonly page: Page
    readonly round_trip: Locator;
    readonly oneWay: Locator;

    constructor(page: Page) { 
        this.page = page;
        this.round_trip = page.locator('[data-testid="round-trip-radio-button"] circleXYZ');
        this.oneWay = page.locator('circle').first();
    }


    async Allround() { 
        // await this.page.keyboard.press('Escape');
        await this.round_trip.click();
        await this.oneWay.click();

    }
} 