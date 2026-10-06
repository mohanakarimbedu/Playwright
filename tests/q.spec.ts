import { test, expect } from '@playwright/test'

test('Handle new page/tab', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/')
    await expect(page).toHaveTitle('Windows Links Test Page | Test Pages') // parent/current url
    const newPagePromise = context.waitForEvent('page')
    await page.getByRole('link', { name: 'Window with name in new tab' }).click()
    const newPage = await newPagePromise
    await expect(newPage.url()).toEqual('https://testpages.eviltester.com/pages/navigation/windows-names/window-with-name/')// new page url
})

test('Handle new page in new window', async ({ context }) => {
    const page = await context.newPage()
    await page.goto('https://testpages.eviltester.com/pages/navigation/windows-names/')// parent/current url
    await expect(page).toHaveTitle('Windows Links Test Page | Test Pages')
    const popupPromise = page.waitForEvent('popup')
    await page.getByRole('link', { name: 'Open Given Name Page In A New Browser Window From JavaScript (with name)' }).click()
    const popup = await popupPromise
    await expect(popup).toHaveTitle('Linked Page with A Given Name | Test Pages') // Verifying New window
})