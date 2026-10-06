import {test, expect} from '@playwright/test';

test('GitHub Demo', async ({ page }) => {
    await page.goto('https://www.techlearn.in/demo');
    await page.waitForTimeout(8000);
    await page.locator('input#user_login').fill('playwright');
    await page.locator('[name="pwd"]').fill('Test@12345');
    await page.waitForTimeout(1000);
    await page.locator('[name="rememberme"]').click();
    await page.waitForTimeout(1000);
    await page.locator('a.wp-login-lost-password').click();
    await page.waitForTimeout(2000);
});