import { test } from '@playwright/test'

test('Different Click Operations Practice', async ({ page }) => {

    // await page.goto('https://the-internet.herokuapp.com/add_remove_elements/')

    // await page.getByRole('button', { name: 'Add Element' }).click() // Single Click
    // await page.getByRole('button', { name: 'Add Element' }).dblclick() // double click
    // await page.getByRole('button', { name: 'Add Element' }).click({ clickCount: 3}) //Triple click(u can change the value)

    // await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html')
    // await page.getByText('right click me', { exact: true }).click({ button: 'right' }) //Right Click

    // await page.goto('https://www.google.com')
    // await page.getByText('Gmail', { exact: true }).click({ button: 'right' })

    // Programmatic click
    await page.goto('https://www.fssai.gov.in/')
    await page.getByRole('link', { name: 'Media', exact: true }).dispatchEvent('click')

})