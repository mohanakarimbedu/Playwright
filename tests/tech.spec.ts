import {test} from '@playwright/test';

test('Launch Browser and Open Application', async({page})=>{

	await page.goto('https://www.techlearn.in');

})

test('Navigation Methods', async ({ page }) => {
    await page.goto('https://www.google.com');
    await page.goto('https://www.techlearn.in');
  
    await page.goBack();
 
    await page.goForward();
   
    await page.reload;

})

test('Clear Existing Data', async ({ page }) => {
    await page.goto('https://www.bharatdigitalnews.com/wp-login.php');

    await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('Playwright');
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Username or Email Address' }).clear();
    await page.waitForTimeout(2000);
    await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('selenium');
     
    // No need to clear method use unlike Selenium
})

test('Fill and  Click Differnt Way to wright', async ({ page }) => {
    await page.goto('https://www.bharatdigitalnews.com/wp-login.php');

    await page.fill("#user_login", "Techlearn");
    
    await page.fill("input[name='pwd']", "Test@321");

    await page.check('#rememberme');

  //await page.click(getByRole('link', { name: 'Lost your password?' })); // Won't Work
    
    await page.getByRole('link', { name: 'Lost your password?' }).click();
     
})

test('Select Drop Down Options', async ({ page }) => {
    await page.goto('https://www.redmine.org/account/register');

    //  await page.locator('#user_language').selectOption('Japanese (日本語)');
    //  await page.locator("#user_language").selectOption({ index: 7 });
    await page.locator('#user_language').selectOption({ value: 'he' });
    // Multiple Options using value
    await page.locator('#user_language').selectOption([{ value: 'he' }, { value: 'ja' }]);
    // Multiple Options using label
    await page.locator('#user_language').selectOption([{ label: 'Hebrew (עברית)' }, { label: 'Japanese (日本語)' }]);       
})

test('check box and click', async ({ page }) => {
    await page.goto('https://www.techlearn.in/demo-site');

    await page.getByLabel('Automation Testing').click();

    await page.waitForTimeout(3000);

    await page.getByLabel('Manual Testing').check();
})

test('File Upload Feature', async ({ page }) => {
    await page.goto('https://www.techlearn.in/demo-site');
    await page.waitForTimeout(3000);
    await page.getByLabel('Attach supporting document').setInputFiles('D:/Arijit/TestNG.png');
    await page.waitForTimeout(3000);

    // Upload multiple files

    await page.locator('input[type="file"]').setInputFiles([
  'test-data/resume.pdf',
  'test-data/photo.jpg'
    ]);
    
    // Not an important

    // File chooser approach : If clicking a button opens the file chooser

    const fileChooserPromise = page.waitForEvent('filechooser');

    await page.getByRole('button', { name: 'Upload File' }).click();

    const fileChooser = await fileChooserPromise;

    await fileChooser.setFiles('test-data/resume.pdf');
    
  //  Interview answer

// In Playwright, we use setInputFiles() to upload files. If the application opens a file chooser after clicking a button, we can handle it using the filechooser event and then call setFiles().

    
    // Important for below the one to remember for interviews.
     await page.locator('input[type="file"]').setInputFiles('test-data/resume.pdf');
})

test('Screenshot for Selected WebElement, Current DisplayPage, Full Page,Failed TCs', async ({ page }) => {
    
    await page.goto('https://www.techlearn.in');

    // Selected webelement screenshot
    // await page.getByRole('link', { name: 'Enroll Now' }).screenshot({ path: 'screenshot/enroll.png' });

    // Curent display page
    // await page.screenshot({ path: 'screenshot/display.jpg' });

    // Full Page
    // await page.screenshot({ path: 'screenshot/fullpage.png', fullPage: true });

    // Failed Screenshot

    /*
    Failed Screenshot in Playwright with TypeScript

If you want Playwright to automatically capture a screenshot when a test fails, the recommended approach is to configure it in 
playwright.config.ts.

   Recommended configuration

   import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    screenshot: 'only-on-failure',
  },
});

Now, whenever a test fails, Playwright automatically captures a screenshot.

The screenshot will be available in the test-results folder.
    */

    // Full example

    /*
    import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  use: {
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});
    */

})

test('Alerts - Simple, Confirmation, Prompt', async ({ page }) => {
    await page.goto('https://www.techlearn.in/demo-site');
    await page.waitForTimeout(3000);
    // Simple Alert
/*    page.once('dialog', alert => {
        alert.accept();
   })
    await page.getByRole('button', { name: 'Simple Alert' }).click(); */

    // Confirmation Alert
    
    page.once('dialog', alert => {
        alert.dismiss();
    })

    await page.getByRole('button', { name: 'Confirm Dialog' }).click();

    await page.waitForTimeout(3000);

})


