// Assertions
// Auto-retrying Assertions(Webfirst assertion) and non retrying Assertions.
// Playwright includes test assertionsin form of expect function.


import { test, expect } from '@playwright/test'

test('Assertions', async ({ page }) => {

    await page.goto('https://www.saucedemo.com')

    // Auto-retrying assertions
    await expect(page.locator('[data-test="login-button"]')).toBeEnabled()
    await expect(page.locator('[data-test="login-button"]')).toHaveCount(1)
    await expect(page.locator('[data-test="login-button"]')).toBeVisible()
    await expect(page.locator('[data-test="login-button"]')).toHaveText('Login')
    await expect(page.locator('[data-test="login-button"]')).toHaveAttribute('name', 'login-button')
    await expect(page.locator('[data-test="login-button"]')).toHaveClass(/btn/)
    await expect(page).toHaveURL('https://www.saucedemo.com')
    await expect(page).toHaveTitle('Swag Labs')

    //Non-retryting Assertions
    // mainly use to check the ok status of a response
    // and to check that a element has a screenshot
    const title = await page.title()
    expect(title).toBe('Swag Labs')

    // Negative Assertions
    await expect.soft(page.locator('[data-test="login-button"]')).not.toBeDisabled()
    await expect(page.locator('[data-test="login-button"]')).not.toBeHidden()
    await expect(page.locator('[data-test="login-button"]')).not.toHaveText('Logout')

    // Custom expect message
    await expect(page, "Expected title not to be 'Swag labs'").not.toHaveTitle('Swag Labssss')


    // default timeout 30 sec
    // default expect timeout 5 sec
    // if u want change go to playwright.config.ts
    // timeout: 10 * 1000, // 10 seconds // default 30 sec
    //   expect : {
    //     timeout: 2000 // 2 seconds // default 5 sec
    //   },
})