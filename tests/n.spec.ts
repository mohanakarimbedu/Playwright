import { test } from '@playwright/test'

test('Handle select Dropdown with value and visible text', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium')

    //await page.locator('#testingDropdown').selectOption('Manual Testing')
    //await page.locator('#testingDropdown').selectOption({ label: 'Performance Testing' })

    //await page.locator('#testingDropdown').selectOption({ value: 'Database' })
    await page.locator('#testingDropdown').selectOption({ index: 2 })
})

test('Handle select Dropdown with Label', async ({ page }) => {
    await page.goto('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label')
    await page.frameLocator('iframe[name="iframeResult"]').getByLabel('Choose a car:').selectOption('Audi')
})

test('Handle Multi select Dropdown', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu')
    await page.locator('#cars').selectOption(['Volvo', 'Saab', 'Audi'])
})