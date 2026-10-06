// import { test, expect } from '@playwright/test'

// test('launch browser', async ({ page }) => {
//     await page.goto('https://www.google.com');
// });

import { chromium, test } from '@playwright/test'


test("Basic test to start with playwright", async () => {

    const browser = await chromium.launch()
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://www.google.com")

});

test("My Second test script", async ({ page }) => {
    await page.goto("https://www.facebook.com")
})