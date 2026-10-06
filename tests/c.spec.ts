import { test } from '@playwright/test'

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