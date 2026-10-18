# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> Select Drop Down Options Local
- Location: tests\tech.spec.ts:60:5

# Error details

```
Error: page.waitForTimeout: Target page, context or browser has been closed
```

# Test source

```ts
  1   | import {test} from '@playwright/test';
  2   | 
  3   | test('Launch Browser and Open Application', async({page})=>{
  4   | 
  5   | 	await page.goto('https://www.techlearn.in');
  6   | 
  7   | })
  8   | 
  9   | test('Navigation Methods', async ({ page }) => {
  10  |     await page.goto('https://www.google.com');
  11  |     await page.goto('https://www.techlearn.in');
  12  |   
  13  |     await page.goBack();
  14  |  
  15  |     await page.goForward();
  16  |    
  17  |     await page.reload;
  18  | 
  19  | })
  20  | 
  21  | test('Clear Existing Data', async ({ page }) => {
  22  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php');
  23  | 
  24  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('Playwright');
  25  |     await page.waitForTimeout(2000);
  26  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).clear();
  27  |     await page.waitForTimeout(2000);
  28  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('selenium');
  29  |      
  30  |     // No need to clear method use unlike Selenium
  31  | })
  32  | 
  33  | test('Fill and  Click Differnt Way to wright', async ({ page }) => {
  34  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php');
  35  | 
  36  |     await page.fill("#user_login", "Techlearn");
  37  |     
  38  |     await page.fill("input[name='pwd']", "Test@321");
  39  | 
  40  |     await page.check('#rememberme');
  41  | 
  42  |   //await page.click(getByRole('link', { name: 'Lost your password?' })); // Won't Work
  43  |     
  44  |     await page.getByRole('link', { name: 'Lost your password?' }).click();
  45  |      
  46  | })
  47  | 
  48  | test('Select Drop Down Options', async ({ page }) => {
  49  |     await page.goto('https://www.redmine.org/account/register');
  50  | 
  51  |     //  await page.locator('#user_language').selectOption('Japanese (日本語)');
  52  |     //  await page.locator("#user_language").selectOption({ index: 7 });
  53  |     await page.locator('#user_language').selectOption({ value: 'he' });
  54  |     // Multiple Options using value
  55  |     await page.locator('#user_language').selectOption([{ value: 'he' }, { value: 'ja' }]);
  56  |     // Multiple Options using label
  57  |     await page.locator('#user_language').selectOption([{ label: 'Hebrew (עברית)' }, { label: 'Japanese (日本語)' }]);       
  58  | })
  59  | 
  60  | test('Select Drop Down Options Local', async ({ page }) => {
  61  |     await page.goto('http://localhost:5173/demo/dropdown');
  62  | // ### Visbile Text
  63  |     //  await page.locator('.demo-select').selectOption('Kerala');  
  64  |     //### Value
  65  |      await page.locator('#practice-state-select').selectOption({value:'KL'});
  66  |     // ### Index
  67  |     //  await page.locator('#practice-state-select').selectOption({index:6});
  68  |     // ### Label
  69  |   //  await page.locator('.demo-select').selectOption({label:'Kerala'})
  70  |   
  71  |     // Multiple Options using value
  72  |    // await page.locator('#user_language').selectOption([{ value: 'he' }, { value: 'ja' }]);
  73  |     // Multiple Options using label
  74  |    // await page.locator('#user_language').selectOption([{ label: 'Hebrew (עברית)' }, { label: 'Japanese (日本語)' }]);       
> 75  |     await page.waitForTimeout(3000);})
      |                ^ Error: page.waitForTimeout: Target page, context or browser has been closed
  76  | 
  77  | test('check box and click', async ({ page }) => {
  78  |     await page.goto('https://www.techlearn.in/demo-site');
  79  | 
  80  |     await page.getByLabel('Automation Testing').click();
  81  | 
  82  |     await page.waitForTimeout(3000);
  83  | 
  84  |     await page.getByLabel('Manual Testing').check();
  85  | })
  86  | 
  87  | test('File Upload Feature', async ({ page }) => {
  88  |     await page.goto('https://www.techlearn.in/demo-site');
  89  |     await page.waitForTimeout(3000);
  90  |     await page.getByLabel('Attach supporting document').setInputFiles('D:/Arijit/TestNG.png');
  91  |     await page.waitForTimeout(3000);
  92  | 
  93  |     // Upload multiple files
  94  | 
  95  |     await page.locator('input[type="file"]').setInputFiles([
  96  |   'test-data/resume.pdf',
  97  |   'test-data/photo.jpg'
  98  |     ]);
  99  |     
  100 |     // Not an important
  101 | 
  102 |     // File chooser approach : If clicking a button opens the file chooser
  103 | 
  104 |     const fileChooserPromise = page.waitForEvent('filechooser');
  105 | 
  106 |     await page.getByRole('button', { name: 'Upload File' }).click();
  107 | 
  108 |     const fileChooser = await fileChooserPromise;
  109 | 
  110 |     await fileChooser.setFiles('test-data/resume.pdf');
  111 |     
  112 |   //  Interview answer
  113 | 
  114 | // In Playwright, we use setInputFiles() to upload files. If the application opens a file chooser after clicking a button, we can handle it using the filechooser event and then call setFiles().
  115 | 
  116 |     
  117 |     // Important for below the one to remember for interviews.
  118 |      await page.locator('input[type="file"]').setInputFiles('test-data/resume.pdf');
  119 | })
  120 | 
  121 | test('Screenshot for Selected WebElement, Current DisplayPage, Full Page,Failed TCs', async ({ page }) => {
  122 |     
  123 |     await page.goto('https://www.techlearn.in');
  124 | 
  125 |     // Selected webelement screenshot
  126 |     // await page.getByRole('link', { name: 'Enroll Now' }).screenshot({ path: 'screenshot/enroll.png' });
  127 | 
  128 |     // Curent display page
  129 |     // await page.screenshot({ path: 'screenshot/display.jpg' });
  130 | 
  131 |     // Full Page
  132 |     // await page.screenshot({ path: 'screenshot/fullpage.png', fullPage: true });
  133 | 
  134 |     // Failed Screenshot
  135 | 
  136 |     /*
  137 |     Failed Screenshot in Playwright with TypeScript
  138 | 
  139 | If you want Playwright to automatically capture a screenshot when a test fails, the recommended approach is to configure it in 
  140 | playwright.config.ts.
  141 | 
  142 |    Recommended configuration
  143 | 
  144 |    import { defineConfig } from '@playwright/test';
  145 | 
  146 | export default defineConfig({
  147 |   use: {
  148 |     screenshot: 'only-on-failure',
  149 |   },
  150 | });
  151 | 
  152 | Now, whenever a test fails, Playwright automatically captures a screenshot.
  153 | 
  154 | The screenshot will be available in the test-results folder.
  155 |     */
  156 | 
  157 |     // Full example
  158 | 
  159 |     /*
  160 |     import { defineConfig } from '@playwright/test';
  161 | 
  162 | export default defineConfig({
  163 |   testDir: './tests',
  164 | 
  165 |   use: {
  166 |     screenshot: 'only-on-failure',
  167 |     video: 'retain-on-failure',
  168 |     trace: 'retain-on-failure',
  169 |   },
  170 | });
  171 |     */
  172 | 
  173 | })
  174 | 
  175 | test('Alerts - Simple, Confirmation, Prompt', async ({ page }) => {
```