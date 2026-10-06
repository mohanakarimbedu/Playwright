import { test, expect } from '@playwright/test'


test('Handle Simple Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Simple Alert
    page.on('dialog', dialog => {
        expect(dialog.type()).toEqual('alert')
        expect(dialog.message()).toEqual('I am a JS Alert')
        console.log(dialog.message())
        dialog.accept() // handle alert by clicking ok button
    })
    await page.getByRole('button', { name: 'Click for JS Alert' }).click()
    await expect(page.locator('#result')).toHaveText('You successfully clicked an alert')
})

test('Handle Confirm Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Confirm Alert
    page.on('dialog', dialog => {
        expect(dialog.type()).toEqual('confirm')
        expect(dialog.message()).toEqual('I am a JS Confirm')
        console.log(dialog.message())
        dialog.dismiss() // handle alert by clicking cancel button
    })
    await page.getByRole('button', { name: 'Click for JS Confirm' }).click()
    await expect(page.locator('#result')).toHaveText('You clicked: Cancel')
})

test('Handle Prompt Alert', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    //Prompt Alert
    page.on('dialog', dialog => {
        expect(dialog.type()).toEqual('prompt')
        expect(dialog.message()).toEqual('I am a JS prompt')
        console.log(dialog.message())
        expect(dialog.defaultValue()).toEqual('')// by default there is no text in the prompt
        dialog.accept('Hello, Playwright!')// handle prompt by clicking ok button and
                                            // passing some text in the prompt
        
    })
    await page.getByRole('button', { name: 'Click for JS Prompt' }).click()
    await expect(page.locator('#result')).toHaveText('You entered: Hello, Playwright!')
})