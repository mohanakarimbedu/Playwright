# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> Launch Browser
- Location: tests\tech.spec.ts:3:5

# Error details

```
Error: browser.newContext: "deviceScaleFactor" option is not supported with null "viewport"
```

# Test source

```ts
  1   | import {test,chromium} from '@playwright/test';
  2   | 
  3   | test('Launch Browser', async({page})=>{	
  4   | const browser = await chromium.launch({
  5   |     headless: false,
  6   |     args: ['--start-maximized']
  7   | });
> 8   |      const context = await browser.newContext({
      |                      ^ Error: browser.newContext: "deviceScaleFactor" option is not supported with null "viewport"
  9   |     viewport: null
  10  |   });
  11  | 
  12  |  // const page = await context.newPage();
  13  | })
  14  | 
  15  | test('Launch Browser and Open Application', async({page})=>{
  16  | 
  17  | 	await page.goto('https://www.techlearn.in');
  18  | 
  19  | })
  20  | 
  21  | test('Navigation Methods', async ({ page }) => {
  22  |     await page.goto('https://www.google.com');
  23  |     await page.goto('https://www.techlearn.in');
  24  |   
  25  |     await page.goBack();
  26  |  
  27  |     await page.goForward();
  28  |    
  29  |     await page.reload;
  30  | 
  31  | })
  32  | 
  33  | test('Clear Existing Data', async ({ page }) => {
  34  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php');
  35  | 
  36  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('Playwright');
  37  |     await page.waitForTimeout(2000);
  38  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).clear();
  39  |     await page.waitForTimeout(2000);
  40  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('selenium');
  41  |      
  42  |     // No need to clear method use unlike Selenium
  43  | })
  44  | 
  45  | test('Fill and  Click Differnt Way to wright', async ({ page }) => {
  46  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php');
  47  | 
  48  |     await page.fill("#user_login", "Techlearn");
  49  |     
  50  |     await page.fill("input[name='pwd']", "Test@321");
  51  | 
  52  |     await page.check('#rememberme');
  53  | 
  54  |   //await page.click(getByRole('link', { name: 'Lost your password?' })); // Won't Work
  55  |     
  56  |     await page.getByRole('link', { name: 'Lost your password?' }).click();
  57  |      
  58  | })
  59  | 
  60  | test('Select Drop Down Options Local', async ({ page }) => {
  61  |     await page.goto('http://localhost:5173/demo/dropdown');
  62  | // ### Visbile Text
  63  |     //  await page.locator('.demo-select').selectOption('Kerala');  
  64  |     //### Value
  65  |     // await page.locator('#practice-state-select').selectOption({value:'KL'});
  66  |     // ### Index
  67  |     //  await page.locator('#practice-state-select').selectOption({index:6});
  68  |     // ### Label
  69  |   //  await page.locator('.demo-select').selectOption({label:'Kerala'})
  70  |   
  71  |     // Multiple Options using value
  72  |    // await page.locator('#practice-course-select').selectOption([{ value: 'api' }, { value: 'ai' }, {value:'automation'}]);
  73  |     // Multiple Options using label
  74  |     await page.locator('#practice-course-select').selectOption([{ label: 'Mobile Testing' }, { label: 'Manual Testing' }]);       
  75  |     await page.waitForTimeout(3000);})
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
```