import { test } from '@playwright/test';

test('Launch Browser', async ({ page }) => {
    await page.goto('https://www.techlearn.in')
})

test('Navigation methods', async ({ page }) => {
    await page.goto('https://www.techlearn.in')
    await page.goto('https://www.playwright.dev')
    await page.goBack()
    await page.goForward()
    await page.reload()
})

test('Fill, Type, Clear, Check, Uncheck, Click', async ({ page }) => {
    await page.goto('https://www.bharatdigitalnews.com/wp-login.php')
    await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('Sanvith Dev')
    await page.waitForTimeout(1000)
    await page.getByLabel('Username or Email Address').fill('Karimbedu')
    await page.waitForTimeout(1000)
    await page.getByRole('textbox', { name: 'Username or Email Address' }).clear()
    await page.waitForTimeout(1000)
    await page.getByRole('textbox', { name: 'Username or Email Address' }).type('Sanvith Dev')
    await page.waitForTimeout(1000)
    await page.getByLabel('Username or Email Address').type('Karimbedu')
    await page.waitForTimeout(1000)
    await page.locator('[name="rememberme"]').check()
    await page.waitForTimeout(1000)
    await page.locator('[name="rememberme"]').uncheck();
    await page.waitForTimeout(1000)
    await page.locator('[name="wp-submit"]').click()
    await page.waitForTimeout(2000)



})