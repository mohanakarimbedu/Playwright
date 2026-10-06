import { test, expect } from '@playwright/test'


test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
})

test("Add item to Cart Verification", async ({ page }) => {
    await page.locator('[data-test="item-4-title-link"]').click()
    await page.locator('[data-test="add-to-cart"]').click()
    await page.locator('[data-test="shopping-cart-link"]').click()
    await expect(page.locator('[data-test="item-4-title-link"]')).toHaveText('Sauce Labs Backpack')
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible()
})

test("Empty Cart Verification", async ({ page }) => {
    await page.locator('[data-test="shopping-cart-link"]').click()
    await expect(page.locator('.cart_item')).toHaveCount(0)
    await expect(page.locator('[data-test="shopping-cart-badge"]')).toHaveCount(0)
})