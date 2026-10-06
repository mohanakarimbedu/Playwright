# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> Alerts - Simple, Confirmation, Prompt
- Location: tests\tech.spec.ts:158:5

# Error details

```
Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
Call log:
  - navigating to "https://www.techlearn.in/demo-site", waiting until "load"

```

# Test source

```ts
  59  | 
  60  | test('check box and click', async ({ page }) => {
  61  |     await page.goto('https://www.techlearn.in/demo-site');
  62  | 
  63  |     await page.getByLabel('Automation Testing').click();
  64  | 
  65  |     await page.waitForTimeout(3000);
  66  | 
  67  |     await page.getByLabel('Manual Testing').check();
  68  | })
  69  | 
  70  | test('File Upload Feature', async ({ page }) => {
  71  |     await page.goto('https://www.techlearn.in/demo-site');
  72  |     await page.waitForTimeout(3000);
  73  |     await page.getByLabel('Attach supporting document').setInputFiles('D:/Arijit/TestNG.png');
  74  |     await page.waitForTimeout(3000);
  75  | 
  76  |     // Upload multiple files
  77  | 
  78  |     await page.locator('input[type="file"]').setInputFiles([
  79  |   'test-data/resume.pdf',
  80  |   'test-data/photo.jpg'
  81  |     ]);
  82  |     
  83  |     // Not an important
  84  | 
  85  |     // File chooser approach : If clicking a button opens the file chooser
  86  | 
  87  |     const fileChooserPromise = page.waitForEvent('filechooser');
  88  | 
  89  |     await page.getByRole('button', { name: 'Upload File' }).click();
  90  | 
  91  |     const fileChooser = await fileChooserPromise;
  92  | 
  93  |     await fileChooser.setFiles('test-data/resume.pdf');
  94  |     
  95  |   //  Interview answer
  96  | 
  97  | // In Playwright, we use setInputFiles() to upload files. If the application opens a file chooser after clicking a button, we can handle it using the filechooser event and then call setFiles().
  98  | 
  99  |     
  100 |     // Important for below the one to remember for interviews.
  101 |      await page.locator('input[type="file"]').setInputFiles('test-data/resume.pdf');
  102 | })
  103 | 
  104 | test('Screenshot for Selected WebElement, Current DisplayPage, Full Page,Failed TCs', async ({ page }) => {
  105 |     
  106 |     await page.goto('https://www.techlearn.in');
  107 | 
  108 |     // Selected webelement screenshot
  109 |     // await page.getByRole('link', { name: 'Enroll Now' }).screenshot({ path: 'screenshot/enroll.png' });
  110 | 
  111 |     // Curent display page
  112 |     // await page.screenshot({ path: 'screenshot/display.jpg' });
  113 | 
  114 |     // Full Page
  115 |     // await page.screenshot({ path: 'screenshot/fullpage.png', fullPage: true });
  116 | 
  117 |     // Failed Screenshot
  118 | 
  119 |     /*
  120 |     Failed Screenshot in Playwright with TypeScript
  121 | 
  122 | If you want Playwright to automatically capture a screenshot when a test fails, the recommended approach is to configure it in 
  123 | playwright.config.ts.
  124 | 
  125 |    Recommended configuration
  126 | 
  127 |    import { defineConfig } from '@playwright/test';
  128 | 
  129 | export default defineConfig({
  130 |   use: {
  131 |     screenshot: 'only-on-failure',
  132 |   },
  133 | });
  134 | 
  135 | Now, whenever a test fails, Playwright automatically captures a screenshot.
  136 | 
  137 | The screenshot will be available in the test-results folder.
  138 |     */
  139 | 
  140 |     // Full example
  141 | 
  142 |     /*
  143 |     import { defineConfig } from '@playwright/test';
  144 | 
  145 | export default defineConfig({
  146 |   testDir: './tests',
  147 | 
  148 |   use: {
  149 |     screenshot: 'only-on-failure',
  150 |     video: 'retain-on-failure',
  151 |     trace: 'retain-on-failure',
  152 |   },
  153 | });
  154 |     */
  155 | 
  156 | })
  157 | 
  158 | test('Alerts - Simple, Confirmation, Prompt', async ({ page }) => {
> 159 |     await page.goto('https://www.techlearn.in/demo-site');
      |                ^ Error: page.goto: net::ERR_ABORTED; maybe frame was detached?
  160 |     await page.waitForTimeout(3000);
  161 | 
  162 |     page.once('dialog', alert => {
  163 |         alert.accept();
  164 |    })
  165 |     await page.getByRole('button', { name: 'Simple Alert' }).click();
  166 |     await page.waitForTimeout(3000);
  167 | 
  168 | })
  169 | 
  170 | 
  171 | 
```