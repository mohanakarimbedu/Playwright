import {test, expect} from '@playwright/test';

test('GitHub Demo', async ({ page }) => {
    await page.goto('https://www.techlearn.in/demo');
    await page.waitForTimeout(8000);
});