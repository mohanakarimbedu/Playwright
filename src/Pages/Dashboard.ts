import { Page, Locator, expect } from '@playwright/test';

export class DashboardPage { 
    
    readonly page: Page
    readonly round_trip: Locator;
    readonly oneWay: Locator;
    readonly welcomeaboard: Locator;

    constructor(page: Page) { 
        this.page = page;
        this.welcomeaboard = page.locator('//div[contains(text(),"Welcome aboard")]');
        this.round_trip = page.locator('[data-testid="round-trip-radio-button"] circle');
        this.oneWay = page.locator('circle').first();

    }

    async Allround() { 
        // await this.page.keyboard.press('Escape');
        await expect(this.welcomeaboard).toBeVisible();
        await this.round_trip.click();
        await this.oneWay.click();

    }
} 