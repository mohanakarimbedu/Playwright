import { test } from '@playwright/test'

test('Launch browsers', async ({ page }) => {
    
    await page.goto('https://www.techlearn.in')

})

test('Navigation Methods', async({ page })=> {
    
    await page.goto('https://www.google.com')
    await page.goto('https://www.facebook.com')
    await page.goBack()
    await page.waitForTimeout(2000)
    await page.goForward()
    await page.waitForTimeout(2000)
    await page.reload()
    await page.waitForTimeout(2000)
})

test('Locators', async ({ page }) => {
    await page.goto("https://www.techlearn.in/admin")
    await page.locator('input#user_login').fill('playwright')   // id
    await page.locator('[name="pwd"]').fill('Test@12345')  // name
    await page.waitForTimeout(1000)
    await page.locator('[name="rememberme"]').click()  // name
    await page.waitForTimeout(1000)
    await page.locator('a.wp-login-lost-password').click()  // class
    await page.waitForTimeout(2000)
    await page.locator('#user_login').pressSequentially('HelloPlayWrightwithTS',{delay:100})
    await page.waitForTimeout(2000)
})

test.only('Drop Down Options', async ({ page }) => {
    
    await page.goto('https://www.redmine.org');
    await page.locator('//a[@class="registers"]').click();
   // await page.locator('//*[@id="user_language"]').selectOption('Polish (Polski)');
    // await page.locator('//*[@id="user_language"]').selectOption('pl');
    //  await page.locator('//*[@id="user_language"]').selectOption({label:'Polish (Polski)'})
    await page.locator('//*[@id="user_language"]').selectOption({index:7})
    await page.waitForTimeout(2000)
    

})

test.only('File Upload', async ({ page }) => {
    
    await page.goto('https://www.techlearn.in/demo-site');
    await page.locator('input#file-1').setInputFiles('tests/testdata/abc.txt');
})

