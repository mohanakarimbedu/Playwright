import { test } from '@playwright/test'

// This is a describe block, it is used to group related tests together
// It can contain multiple test cases and even nested describe blocks
test.describe.only('Practice of Describe', async () => {

    // applied on all the test cases of describe block
    test.skip(({browserName}) => browserName === 'firefox', 'Skipping test on firefox')

    test.skip('Practice test 1', async ({ page }) => {
        console.log('Starting Practice test 1')
        console.log('Ending Practice test 1')
    })

    test('Practice test 2', async ({ page }) => {
        console.log('Starting Practice test 2')
        console.log('Ending Practice test 2')
    })

    test('Practice test 3', async ({ page, browserName }) => {
        test.skip(browserName === "webkit", 'Skipping test on WebKit')
        console.log('Starting Practice test 3')
        console.log('Ending Practice test 3')
    })
})

test.fixme('Practice test 4', async ({ page }) => {
    console.log('Starting Practice test 4')
    console.log('Ending Practice test 4')
})

test.only('Practice test 5', async ({ page }) => {
    console.log('Starting Practice test 5')
    console.log('Ending Practice test 5')
})

test('Practice test 6', async ({ page }) => {
    console.log('Starting Practice test 6')
    console.log('Ending Practice test 6')
})
// test.fixme() is used to mark a test as expected to fail.
// It is used when there is a known issue that is causing the fail.
// and we want to temporarily disable the test until the issue is resolved.