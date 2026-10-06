import { test, expect } from '@playwright/test'

test('Title Verification', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/')
    await expect(page).toHaveTitle('Swag Labs')
})

test('Successful login Verification', async ({ page }) => {
    test.slow() // This is used to mark a test as slow.// one of the annotations in playwright
    // // It is used when a test is expected to take long time to run.
    // // it triples the timeout for the test.
    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'secret_sauce')
    await page.click('#login-button')
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible()
})

test.fail('UnSuccessful login Verification', async ({ page }) => {
    // test.fail()// This is used to mark a test as expected to fail.
    // // It is used when a test is known to be failing.
    // // but you want to keep it in the test suite for future reference. 
    await page.goto('https://www.saucedemo.com/')
    await page.fill('#user-name', 'standard_user')
    await page.fill('#password', 'wrong_password')
    await page.click('#login-button')
    await expect(page.getByTestId('shopping-cart-link')).toBeVisible()
})

// test.setTimeout(10000)
// This is used to set the timeout for a test
// It is used to specify maximum time a test should take to run
// if the test takes longer than the specific time, it will be marked as failed