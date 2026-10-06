import { test, expect } from '@playwright/test'

test('Practice of radio button', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium')

    // Radio button
    const maleRadioButton = page.locator('#male')
    await maleRadioButton.check()
    await expect(maleRadioButton).toBeChecked()

    const femaleRadioButton = page.locator('#female')
    await femaleRadioButton.check()
    //await expect(femaleRadioButton).toBeChecked()
    //await expect(maleRadioButton).toBeChecked()
    await expect(maleRadioButton).not.toBeChecked()

})

test('Practice of check box', async ({ page }) => {

    await page.goto('https://artoftesting.com/samplesiteforselenium')

    // Check box
    const automationCheck =  page.getByRole('checkbox').first()
    await automationCheck.check()
    await expect(automationCheck).toBeChecked()
    await automationCheck.uncheck()
    await expect(automationCheck).not.toBeChecked()

    const perfomanceCheck = page.getByRole('checkbox').nth(1)
    await perfomanceCheck.check()
    await expect(perfomanceCheck).toBeChecked()
    await perfomanceCheck.uncheck()
    await expect(perfomanceCheck).not.toBeChecked()

})