import { test } from '@playwright/test'

test('Fill Press and PressSequence Practice', async ({ page }) => {
    // await page.goto('https://ultimateqa.com/filling-out-forms/')
    // await page.locator('#et_pb_contact_name_0').fill('TestCodeandAutomate')
    // await page.locator('#et_pb_contact_message_0').fill('This is test message for filling out forms')

    await page.goto('https://www.google.com/')
    const chromeButton = page.getByRole('combobox', { name: 'Search' })

    if (await chromeButton.isEnabled()) {
        await chromeButton.click()
    }

    await page.locator('#APjFqb').pressSequentially('Playwright', { delay: 100 })
    await page.locator('#APjFqb').press('ArrowDown+ArrowDown+ArrowDown+Enter')

})