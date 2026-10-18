# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> File Upload Feature
- Location: tests\tech.spec.ts:98:5

# Error details

```
Error: locator.setInputFiles: Error: strict mode violation: getByLabel('Upload Photo') resolved to 2 elements:
    1) <section class="upload-practice-card" aria-labelledby="upload-photo-title">…</section> aka getByRole('region', { name: 'Upload Photo' })
    2) <input type="file" id="upload-photo" class="upload-practice-input" aria-describedby="upload-photo-message" accept=".jpg,.jpeg,.png,image/jpeg,image/png"/> aka getByRole('button', { name: 'Upload Photo' })

Call log:
  - waiting for getByLabel('Upload Photo')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e6]:
      - generic [ref=e7]:
        - link "+91 9000109120" [ref=e8] [cursor=pointer]:
          - /url: tel:+919000109120
        - link "techlearn.india@gmail.com" [ref=e11] [cursor=pointer]:
          - /url: mailto:techlearn.india@gmail.com
        - generic "Location" [ref=e15]: Techlearn.in, Rajiv Gandhi Colony Road, SN Puram, Tirupati - 517507
      - generic "Social media" [ref=e19]:
        - link "LinkedIn" [ref=e20] [cursor=pointer]:
          - /url: https://www.linkedin.com
        - link "Instagram" [ref=e23] [cursor=pointer]:
          - /url: https://www.instagram.com
        - link "Facebook" [ref=e28] [cursor=pointer]:
          - /url: https://www.facebook.com
        - link "X" [ref=e31] [cursor=pointer]:
          - /url: https://x.com
        - link "YouTube" [ref=e34] [cursor=pointer]:
          - /url: https://www.youtube.com
    - generic [ref=e39]:
      - link [ref=e40] [cursor=pointer]:
        - /url: /
        - img "Techlearn.in - Software Training and Placement Institute" [ref=e41]
      - navigation [ref=e42]:
        - link [ref=e43] [cursor=pointer]:
          - /url: /
        - link [ref=e47] [cursor=pointer]:
          - /url: /about
        - link [ref=e52] [cursor=pointer]:
          - /url: /placements
        - link [ref=e57] [cursor=pointer]:
          - /url: /gallery
        - link [ref=e63] [cursor=pointer]:
          - /url: /resume
        - link [ref=e68] [cursor=pointer]:
          - /url: /services
        - link [ref=e73] [cursor=pointer]:
          - /url: /practice
        - link [ref=e78] [cursor=pointer]:
          - /url: /jobs
        - link [ref=e83] [cursor=pointer]:
          - /url: /faq
        - link [ref=e88] [cursor=pointer]:
          - /url: /contact
        - link "Tools" [ref=e93] [cursor=pointer]:
          - /url: /#tools
          - generic [aria-hidden] [ref=e101]: ▾
  - main [ref=e102]:
    - generic [ref=e104]:
      - paragraph [ref=e105]: $ Practice / File uploads
      - heading "Upload File Practice" [level=1] [ref=e106]
      - paragraph [ref=e107]: Select files to practice upload controls and client-side file validation. Files are not sent to a server.
    - generic [ref=e109]:
      - generic [ref=e110]:
        - region [ref=e111]:
          - paragraph [ref=e112]: // Practice 1
          - heading "Upload Photo" [level=2] [ref=e113]
          - paragraph [ref=e114]: Select a JPG, JPEG, or PNG image to see its filename and preview.
          - button "Upload Photo" [ref=e116]
          - status [ref=e117]: Choose a JPG, JPEG, or PNG image.
        - region [ref=e118]:
          - paragraph [ref=e119]: // Practice 2
          - heading "Upload Resume" [level=2] [ref=e120]
          - paragraph [ref=e121]: Select a PDF, DOC, or DOCX resume to verify the accepted document formats.
          - button "Upload Resume" [ref=e123]
          - status [ref=e124]: Choose a PDF, DOC, or DOCX document.
        - region [ref=e125]:
          - paragraph [ref=e126]: // Practice 3
          - heading "Upload Any File" [level=2] [ref=e127]
          - paragraph [ref=e128]: Select any file type. No file-extension restrictions are applied.
          - button "Upload Any File" [ref=e130]
          - status [ref=e131]: Choose any file to see its details.
      - link "Back to Practice" [ref=e133] [cursor=pointer]:
        - /url: /practice
  - contentinfo [ref=e134]:
    - generic [ref=e135]:
      - generic [ref=e136]:
        - img "Techlearn.in - Software Training and Placement Institute" [ref=e138]
        - paragraph [ref=e139]: Techlearn.in is a professional software testing training institute focused on practical, industry-oriented learning. We provide Manual Testing, Automation Testing, API Testing, and Job Support training through Offline, Online, One-to-One, and Home Training programs, helping learners build real-world skills and achieve their career goals in IT. Since 2013.
        - generic [ref=e140]:
          - link "LinkedIn" [ref=e141] [cursor=pointer]:
            - /url: https://linkedin.com
            - text: in
          - link "Instagram" [ref=e142] [cursor=pointer]:
            - /url: https://instagram.com
            - text: ig
          - link "YouTube" [ref=e143] [cursor=pointer]:
            - /url: https://youtube.com
            - text: yt
      - generic [ref=e144]:
        - heading "Navigate" [level=4] [ref=e145]
        - list [ref=e146]:
          - listitem [ref=e147]:
            - text: ➜
            - link "All Courses" [ref=e148] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e149]:
            - text: ➜
            - link "Placements" [ref=e150] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=e151]:
            - text: ➜
            - link "Sample Resumes" [ref=e152] [cursor=pointer]:
              - /url: /resume
          - listitem [ref=e153]:
            - text: ➜
            - link "Our Team" [ref=e154] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e155]:
            - text: ➜
            - link "Job Portals" [ref=e156] [cursor=pointer]:
              - /url: /jobs
          - listitem [ref=e157]:
            - text: ➜
            - link "Clients" [ref=e158] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=e159]:
            - text: ➜
            - link "Student Reviews" [ref=e160] [cursor=pointer]:
              - /url: /
          - listitem [ref=e161]:
            - text: ➜
            - link "Contact Us" [ref=e162] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=e163]:
            - text: ➜
            - link "About Us" [ref=e164] [cursor=pointer]:
              - /url: /about
      - generic [ref=e165]:
        - heading "Skills & Tools" [level=4] [ref=e166]
        - list [ref=e167]:
          - listitem [ref=e168]:
            - text: ➜
            - link "Playwright with TypeScript" [ref=e169] [cursor=pointer]:
              - /url: /playwright
          - listitem [ref=e170]:
            - text: ➜
            - link "Selenium with Core Java" [ref=e171] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e172]:
            - text: ➜
            - link "Manual Testing" [ref=e173] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e174]:
            - text: ➜
            - link "AI Testing" [ref=e175] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e176]:
            - text: ➜
            - link "API Testing" [ref=e177] [cursor=pointer]:
              - /url: /api
          - listitem [ref=e178]:
            - text: ➜
            - link "GitHub" [ref=e179] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e180]:
            - text: ➜
            - link "Jenkins" [ref=e181] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e182]:
            - text: ➜
            - link "TestNG + Junit" [ref=e183] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e184]:
            - text: ➜
            - link "BDD Cucumber" [ref=e185] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e186]:
            - text: ➜
            - link "MySQL" [ref=e187] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e188]:
            - text: ➜
            - link "Jira" [ref=e189] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e190]:
            - text: ➜
            - link "Agile Methodology" [ref=e191] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e192]:
            - text: ➜
            - link "Maven" [ref=e193] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e194]:
            - text: ➜
            - link "Postman" [ref=e195] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e196]:
            - text: ➜
            - link "Swagger" [ref=e197] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e198]:
            - text: ➜
            - link "Sikuli" [ref=e199] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e200]:
            - text: ➜
            - link "Log4j" [ref=e201] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e202]:
            - text: ➜
            - link "Real-Time Framework" [ref=e203] [cursor=pointer]:
              - /url: /#tools
      - generic [ref=e204]:
        - heading "Contact" [level=4] [ref=e205]
        - list [ref=e206]:
          - listitem [ref=e207]:
            - link "9000109120" [ref=e210] [cursor=pointer]:
              - /url: tel:9000109120
          - listitem [ref=e211]:
            - link "techlearn.india@gmail.com" [ref=e215] [cursor=pointer]:
              - /url: mailto:techlearn.india@gmail.com
          - listitem [ref=e216]:
            - generic [ref=e220]: Techlearn.in, Rajiv Gandhi Colony Road, SN Puram, Tirupati - 517507
    - generic [ref=e221]: © 2012-2026 Techlearn.in. All rights reserved.
```

# Test source

```ts
  1   | import {test,chromium} from '@playwright/test';
  2   | 
  3   | test('Launch Browser', async({page})=>{	
  4   | 
  5   | })
  6   | 
  7   | test('Launch Browser and Open Application', async({page})=>{
  8   | 
  9   | 	await page.goto('https://www.techlearn.in');
  10  | 
  11  | })
  12  | 
  13  | test('Navigation Methods', async ({ page }) => {
  14  |     await page.goto('https://www.google.com');
  15  |     await page.goto('https://www.techlearn.in');
  16  |   
  17  |     await page.goBack();
  18  |  
  19  |     await page.goForward();
  20  |    
  21  |     await page.reload;
  22  | 
  23  | })
  24  | 
  25  | test('Clear Existing Data', async ({ page }) => {
  26  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php');
  27  | 
  28  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('Playwright');
  29  |     await page.waitForTimeout(2000);
  30  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).clear();
  31  |     await page.waitForTimeout(2000);
  32  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('selenium');
  33  |      
  34  |     // No need to clear method use unlike Selenium
  35  | })
  36  | test('Fill, Type, Clear, Check, Uncheck, Click', async ({ page }) => {
  37  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php')
  38  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).fill('Sanvith Dev')
  39  |     await page.waitForTimeout(3000)
  40  |     await page.getByLabel('Username or Email Address').fill('Karimbedu')
  41  |     await page.waitForTimeout(3000)
  42  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).clear()
  43  |     await page.waitForTimeout(3000)
  44  |     await page.getByRole('textbox', { name: 'Username or Email Address' }).type('Sanvith Dev')
  45  |     await page.waitForTimeout(3000)
  46  |     await page.getByLabel('Username or Email Address').type('Karimbedu')
  47  |     await page.waitForTimeout(3000)
  48  |     await page.locator('[name="rememberme"]').check()
  49  |     await page.waitForTimeout(3000)
  50  |     await page.locator('[name="rememberme"]').uncheck();
  51  |     await page.waitForTimeout(1000)
  52  |     await page.locator('[name="wp-submit"]').click()
  53  |     await page.waitForTimeout(2000)
  54  | })
  55  | 
  56  | test('Fill and  Click Differnt Way to wright', async ({ page }) => {
  57  |     await page.goto('https://www.bharatdigitalnews.com/wp-login.php');
  58  | 
  59  |     await page.fill("#user_login", "Techlearn");
  60  |     
  61  |     await page.fill("input[name='pwd']", "Test@321");
  62  | 
  63  |     await page.check('#rememberme');
  64  | 
  65  |   //await page.click(getByRole('link', { name: 'Lost your password?' })); // Won't Work
  66  |     
  67  |     await page.getByRole('link', { name: 'Lost your password?' }).click();
  68  |      
  69  | })
  70  | 
  71  | test('Select Drop Down Options Local', async ({ page }) => {
  72  |     await page.goto('https://www.techlearn.in/practice/dropdown');
  73  | // ### Visbile Text
  74  |     //  await page.locator('.demo-select').selectOption('Kerala');  
  75  |     //### Value
  76  |     // await page.locator('#practice-state-select').selectOption({value:'KL'});
  77  |     // ### Index
  78  |     //  await page.locator('#practice-state-select').selectOption({index:6});
  79  |     // ### Label
  80  |   //  await page.locator('.demo-select').selectOption({label:'Kerala'})
  81  |   
  82  |     // Multiple Options using value
  83  |    // await page.locator('#practice-course-select').selectOption([{ value: 'api' }, { value: 'ai' }, {value:'automation'}]);
  84  |     // Multiple Options using label
  85  |     await page.locator('#practice-course-select').selectOption([{ label: 'Mobile Testing' }, { label: 'Manual Testing' }]);       
  86  |     await page.waitForTimeout(3000);})
  87  | 
  88  | test('check box and click', async ({ page }) => {
  89  |     await page.goto('https://www.techlearn.in/practice/selection-practice');
  90  | 
  91  |     await page.getByLabel('Automation Testing').click();
  92  | 
  93  |     await page.waitForTimeout(3000);
  94  | 
  95  |     await page.getByLabel('Manual Testing').check();
  96  | })
  97  | 
  98  | test('File Upload Feature', async ({ page }) => {
  99  |     await page.goto('https://www.techlearn.in/practice/upload-file');
  100 |     await page.waitForTimeout(3000);
> 101 |     await page.getByLabel('Upload Photo').setInputFiles('D:\\Selenium\\Alerts.png');
      |     ^ Error: locator.setInputFiles: Error: strict mode violation: getByLabel('Upload Photo') resolved to 2 elements:
  102 |     await page.waitForTimeout(3000);
  103 | 
  104 |     // Upload multiple files
  105 | 
  106 |     await page.locator('input[type="file"]').setInputFiles([
  107 |   'test-data/resume.pdf',
  108 |   'test-data/photo.jpg'
  109 |     ]);
  110 |     
  111 |     // Not an important
  112 | 
  113 |     // File chooser approach : If clicking a button opens the file chooser
  114 | 
  115 |     const fileChooserPromise = page.waitForEvent('filechooser');
  116 | 
  117 |     await page.getByRole('button', { name: 'Upload File' }).click();
  118 | 
  119 |     const fileChooser = await fileChooserPromise;
  120 | 
  121 |     await fileChooser.setFiles('test-data/resume.pdf');
  122 |     
  123 |   //  Interview answer
  124 | 
  125 | // In Playwright, we use setInputFiles() to upload files. If the application opens a file chooser after clicking a button, we can handle it using the filechooser event and then call setFiles().
  126 | 
  127 |     
  128 |     // Important for below the one to remember for interviews.
  129 |      await page.locator('input[type="file"]').setInputFiles('test-data/resume.pdf');
  130 | })
  131 | 
  132 | test('Screenshot for Selected WebElement, Current DisplayPage, Full Page,Failed TCs', async ({ page }) => {
  133 |     
  134 |     await page.goto('https://www.techlearn.in');
  135 | 
  136 |     // Selected webelement screenshot
  137 |     // await page.getByRole('link', { name: 'Enroll Now' }).screenshot({ path: 'screenshot/enroll.png' });
  138 | 
  139 |     // Curent display page
  140 |     // await page.screenshot({ path: 'screenshot/display.jpg' });
  141 | 
  142 |     // Full Page
  143 |     // await page.screenshot({ path: 'screenshot/fullpage.png', fullPage: true });
  144 | 
  145 |     // Failed Screenshot
  146 | 
  147 |     /*
  148 |     Failed Screenshot in Playwright with TypeScript
  149 | 
  150 | If you want Playwright to automatically capture a screenshot when a test fails, the recommended approach is to configure it in 
  151 | playwright.config.ts.
  152 | 
  153 |    Recommended configuration
  154 | 
  155 |    import { defineConfig } from '@playwright/test';
  156 | 
  157 | export default defineConfig({
  158 |   use: {
  159 |     screenshot: 'only-on-failure',
  160 |   },
  161 | });
  162 | 
  163 | Now, whenever a test fails, Playwright automatically captures a screenshot.
  164 | 
  165 | The screenshot will be available in the test-results folder.
  166 |     */
  167 | 
  168 |     // Full example
  169 | 
  170 |     /*
  171 |     import { defineConfig } from '@playwright/test';
  172 | 
  173 | export default defineConfig({
  174 |   testDir: './tests',
  175 | 
  176 |   use: {
  177 |     screenshot: 'only-on-failure',
  178 |     video: 'retain-on-failure',
  179 |     trace: 'retain-on-failure',
  180 |   },
  181 | });
  182 |     */
  183 | 
  184 | })
  185 | 
  186 | test('Alerts - Simple, Confirmation, Prompt', async ({ page }) => {
  187 |     await page.goto('https://www.techlearn.in/demo-site');
  188 |     await page.waitForTimeout(3000);
  189 |     // Simple Alert
  190 | /*    page.once('dialog', alert => {
  191 |         alert.accept();
  192 |    })
  193 |     await page.getByRole('button', { name: 'Simple Alert' }).click(); */
  194 | 
  195 |     // Confirmation Alert
  196 |     
  197 |     page.once('dialog', alert => {
  198 |         alert.dismiss();
  199 |     })
  200 | 
  201 |     await page.getByRole('button', { name: 'Confirm Dialog' }).click();
```