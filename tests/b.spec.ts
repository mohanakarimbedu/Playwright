import { test } from '@playwright/test'

test.skip("Test with locators", async ({ page }) => {

    await page.goto("https://www.saucedemo.com")

    // xpath - //tagname[@attribute = 'value']
    await page.locator("//*[@name= 'user-name']").fill('standard_user')

    // css Selector - tagname#id, tagname.classname, tagname[attribute = value]
    await page.locator('input#password').fill('secret_sauce')

    //await page.locator('input.submit-button').click()
    await page.locator('input[value=Login]').click()

    // text Selector
    // text = 'textValue' - Case Sensitive
    // text = "textValue" - Case Sensitive
    // text = textValue - Case Insensitive

    //await page.locator("text='Sauce Labs Backpack'").click()
    await page.locator("text=Sauce LAbs bACkpack").click()

    // id, data-testid, data-test-id, data-test, .... and so on.
    await page.locator("data-test=add-to-cart").click()
})

// Locator method usage with Options argument (Optional argument) in playwright
// Syntax:- page.locator(selector, options) 
test("Practice of locator method with options", async ({ page }) => {
    await page.goto("https://www.saucedemo.com")

    // has Locator
    const user_name = await page.locator(".form_group", { has: page.locator("input#user-name") })
    await user_name.click()
    //await user_name.pressSequentially('standard_user')
    await user_name.pressSequentially('standard_user', {
        delay: 200, // 200ms between keystrokes
    })
    // hasNot Locator
    const password = await page.locator(".form_group", { hasNot: page.locator("input#user-name") })
    await password.click()
    //await user_name.pressSequentially('standard_user')
    await password.pressSequentially('secret_sauce', {
        delay: 200, // 200ms between keystrokes
    })

    await page.locator(".submit-button").click()

    // hasText Locator
    //await page.locator("//a", { hasText: "Sauce Labs Backpack" }).click()

    // hasNotText Locator
    // await page.locator(".inventory_item_name", { hasNotText: /Sauce.*/ }).click()
    await page.locator(".inventory_item_name", { hasNotText: "Sauce.*" }).click()
})

/*
getByLabel
getByPlaceholder
getByText
getByAltText
getByTitle
getByRole

getByTestId

*/

test('Get by methods', async ({ page }) => {
    await page.goto('https://www.techlearn.in/wp-login.php')
    await page.getByLabel("Username or Email Address", { exact: true }).fill("testcodeautomate@gmail.com")

})

test('Get by methods for facebook', async ({ page }) => {
    // await page.goto('https://www.amazon.in')
    // await page.getByPlaceholder("Search Amazon.in").fill("Mobile")
    // console.log(await page.getByText("Fresh", { exact: true }).textContent())
    // await page.getByText("Fresh", { exact: true }).click()
    // await page.getByAltText("Figurines, vases & more", {exact: true}).click() // image or area based (find alt attribute)

    // // await page.goto('https://www.google.com')
    // // await page.getByTitle('World Cup 2026: The art of the bicycle kick').click()


    // getByRole- ARIA role, ARIA attribute,and accessible name
    await page.goto('https://www.jobshorn.com/')
    //await page.getByRole('button', { name: 'Resume Builder'}).click()
    await page.getByRole('button', { name: 'Employers' }).click()
})
test.only('Get by methods data-test', async({page}) =>{

    await page.goto('https://www.saucedemo.com')
    await page.getByTestId('username').fill('XYZ')

})