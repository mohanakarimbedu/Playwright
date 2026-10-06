import { test } from '@playwright/test'

test('Handling Iframe with Name', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_input_form')
    //const iframe =  page.frame('iframeResult')
    //await iframe?.fill('#fname', 'Test Automation Playwright')
    await page.frame('iframeResult')?.fill('#fname', 'Test Automation Playwright')
})

test('Handling Iframe with URl', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    const iframe = page.frame({ url: 'https://www.w3schools.com/html/default.asp' }) // or default.asp(src)
    await iframe?.getByRole('button', { name: 'Button to open search field' }).click()
    await iframe?.getByRole('textbox', { name: 'Search field' }).fill('Test Automation Playwright')
})

test('handling Iframe with frameLocator', async ({ page }) => {
    await page.goto('https://www.w3schools.com/html/html_iframe.asp')
    // const iframe = page.frameLocator("[title='W3Schools HTML Tutorial']")
    // await iframe?.getByRole('button', { name: 'Button to open search field' }).click()
    // await iframe?.getByRole('textbox', { name: 'Search field' }).fill('Test Automation Playwright')
    await page.frameLocator("[title='W3Schools HTML Tutorial']").getByRole('button', { name: 'Button to open search field' }).click()
})