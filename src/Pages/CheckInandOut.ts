import { Page, Locator } from "@playwright/test";
import path from 'path';
import { readExcelFile } from '../../src/Utils/ExcelHelper';

   const filepath = path.resolve(process.cwd(), 'test_data', 'qa', 'Test_Data1.xlsx');

export interface BookingRecord {
    fromCity: string;
    toCity: string;
}       
export const records = readExcelFile(filepath) as unknown as BookingRecord[];

export class CheckInandOutCompleted {

    readonly page: Page;
    readonly from: Locator;
    readonly To: Locator;
    readonly departure: Locator;
    readonly from_Select_Date: Locator;
    readonly returing: Locator;
    readonly to_Select_Date: Locator;

    constructor(page: Page) {
        this.page = page;
        // this.from = page.locator('//*[@id="main-container"]/div/div[1]/div[3]/div[2]/div[3]/div/div[1]/div[1]/div[2]/input');
        this.from = page.locator('[data-testid="to-testID-origin"] input');
        // this.To = page.locator('[data-testid="to-testID-destination"]');
        this.To = page.locator('[data-testid="to-testID-destination"] input');
        this.departure = page.locator('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep"])[3]');
        this.from_Select_Date = page.locator('(//div[@class="css-1dbjc4n r-1awozwy r-1pi2tsx r-1777fci r-13qz1uu"])[position() = 28]');
        this.returing = page.locator('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1wtj0ep"])[4]');
        this.to_Select_Date = page.locator('(//div[starts-with(@class,"css-76zvg2 r-homxoj r-ubezar r-16dba41")])[position() = 32]');
    }

    async spiceJet_Booking(fromCity: string, toCity: string) {
        await this.from.fill(fromCity);
        // await this.page.keyboard.press('Enter');
        await this.To.fill(toCity);
        // await this.page.keyboard.press('Enter');
    }

    async dates_Selection() {
        await this.departure.click();
        // await this.from_Select_Date.click();
        await this.returing.click();
        await this.to_Select_Date.click();
    }
}