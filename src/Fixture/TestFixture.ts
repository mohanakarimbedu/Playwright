import { test as base } from '@playwright/test';
import { BasePage } from '../Pages/Base';
import { DashboardPage } from '../Pages/Dashboard';
import { CheckInandOutCompleted } from '../Pages/CheckInandOut';
import { passengers_Details } from '../Pages/Passengers';
import { TestRecord } from '../Utils/ExcelHelper';
import { loadTestData } from '../Utils/TestData';

export { loadTestData };

export const test = base.extend<{
    saveLogs: void;
    basePage: BasePage;
    dashboardPage: DashboardPage;
    checkInandOut: CheckInandOutCompleted;
    passengers_Detail: passengers_Details;
    testData: TestRecord[];
}>({
    saveLogs: [async ({ }, use) => {
        console.log('Global beforeEach is running...');
        await use();
        console.log('Global afterEach is running...');
    },
    { auto: true }],

    basePage: async ({ page }, use) => {
        // await use(new BasePage(page));
        const basePage = new BasePage(page)
        await use(basePage);
    },
    dashboardPage: async ({ page }, use) => {
        await use(new DashboardPage(page));
    },
    checkInandOut: async ({ page }, use) => {
        await use(new CheckInandOutCompleted(page));
    },
    passengers_Detail: async ({ page }, use) => {
        await use(new passengers_Details(page));
    },
    testData: async ({ }, use) => {
        await use(loadTestData());
    },
});

export { expect } from '@playwright/test';