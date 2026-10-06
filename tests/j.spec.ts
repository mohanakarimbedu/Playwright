import { test, expect, Page } from '@playwright/test'

let page: Page
test.beforeAll(async ({ browser }) => {
    page = await browser.newPage()
    //login
    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
})

test.afterAll(async ({ browser }) => {
    //logout
    await page.getByRole('button', { name: 'Open Menu' }).click()
    await page.locator('[data-test="logout-sidebar-link"]').click()
})

test('Adding items to Cart and Verifying', async ({ }) => {

    // add and remove items from cart
    await page.getByText('Sauce Labs Backpack').click()
    await page.click('#add-to-cart')
    await page.click('.shopping_cart_link')
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).toHaveText('Sauce Labs Backpack')
    await expect(page.locator('[data-test="remove-sauce-labs-backpack"]')).toBeVisible()
    await page.locator('[data-test="remove-sauce-labs-backpack"]').click()
    await expect(page.getByRole('link', { name: 'Sauce Labs Backpack' })).not.toBeVisible()
})

test('Empty Cart Verification', async ({ }) => {
    //Checking empty cart
    await page.click('.shopping_cart_link')
    await expect(page.locator('.inventory_item_name')).not.toBeVisible()
})