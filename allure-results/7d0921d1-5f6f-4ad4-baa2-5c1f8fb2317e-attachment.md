# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> Select Drop Down Options Local
- Location: tests\tech.spec.ts:60:5

# Error details

```
Error: locator.selectOption: Error: Element is not a <select> element
Call log:
  - waiting for locator('#practice-course-trigger')
    - locator resolved to <button type="button" aria-expanded="false" id="practice-course-trigger" class="dropdown-multiselect-trigger" aria-controls="practice-course-options">…</button>
  - attempting select option action
    - waiting for element to be visible and enabled

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
          - /url: /demo
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
      - paragraph [ref=e105]: $ Demo / Dropdown practice
      - heading "Drop Down Feature" [level=1] [ref=e106]
      - paragraph [ref=e107]: Practice single-select, multi-select, and searchable dropdown interactions.
    - generic [ref=e109]:
      - generic [ref=e110]:
        - region [ref=e111]:
          - paragraph [ref=e112]: // Task 1
          - heading "Single-Select State Dropdown" [level=2] [ref=e113]
          - paragraph [ref=e114]: Choose one state from the list of Indian states.
          - generic [ref=e115]:
            - generic [ref=e116]: Select Country
            - combobox "Select Country" [ref=e117]:
              - option "Select State" [selected]
              - option "Andhra Pradesh"
              - option "Arunachal Pradesh"
              - option "Assam"
              - option "Bihar"
              - option "Chhattisgarh"
              - option "Goa"
              - option "Gujarat"
              - option "Haryana"
              - option "Himachal Pradesh"
              - option "Jharkhand"
              - option "Karnataka"
              - option "Kerala"
              - option "Madhya Pradesh"
              - option "Maharashtra"
              - option "Manipur"
              - option "Meghalaya"
              - option "Mizoram"
              - option "Nagaland"
              - option "Odisha"
              - option "Punjab"
              - option "Rajasthan"
              - option "Sikkim"
              - option "Tamil Nadu"
              - option "Telangana"
              - option "Tripura"
              - option "Uttar Pradesh"
              - option "Uttarakhand"
              - option "West Bengal"
            - paragraph [ref=e118]: Select one state to see your choice.
        - region [ref=e119]:
          - paragraph [ref=e120]: // Task 2
          - heading "Multi-Select Course Dropdown" [level=2] [ref=e121]
          - paragraph [ref=e122]: Select any number of courses. Uncheck a course to remove it.
          - generic [ref=e123]:
            - group "Select Course" [ref=e124]:
              - button "Select Course" [ref=e127] [cursor=pointer]:
                - generic [aria-hidden] [ref=e129]: ▾
            - generic [ref=e130]:
              - strong [ref=e131]: "Selected courses:"
              - text: None
        - region [ref=e132]:
          - paragraph [ref=e133]: // Task 3
          - heading "Searchable Dropdown / Combo Box" [level=2] [ref=e134]
          - paragraph [ref=e135]: Type to filter the options, or open the list and choose one.
          - generic [ref=e136]:
            - generic [ref=e137]: Search and select an option
            - combobox "Search and select an option" [ref=e139]
            - paragraph [ref=e140]: Choose an option from the list.
      - generic [ref=e141]:
        - link "Back to Demo" [ref=e142] [cursor=pointer]:
          - /url: /demo
        - link "Open Demo Site" [ref=e143] [cursor=pointer]:
          - /url: /demo-site
  - contentinfo [ref=e144]:
    - generic [ref=e145]:
      - generic [ref=e146]:
        - img "Techlearn.in - Software Training and Placement Institute" [ref=e148]
        - paragraph [ref=e149]: Techlearn.in is a professional software testing training institute focused on practical, industry-oriented learning. We provide Manual Testing, Automation Testing, API Testing, and Job Support training through Offline, Online, One-to-One, and Home Training programs, helping learners build real-world skills and achieve their career goals in IT. Since 2013.
        - generic [ref=e150]:
          - link "LinkedIn" [ref=e151] [cursor=pointer]:
            - /url: https://linkedin.com
            - text: in
          - link "Instagram" [ref=e152] [cursor=pointer]:
            - /url: https://instagram.com
            - text: ig
          - link "YouTube" [ref=e153] [cursor=pointer]:
            - /url: https://youtube.com
            - text: yt
      - generic [ref=e154]:
        - heading "Navigate" [level=4] [ref=e155]
        - list [ref=e156]:
          - listitem [ref=e157]:
            - text: ➜
            - link "All Courses" [ref=e158] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e159]:
            - text: ➜
            - link "Placements" [ref=e160] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=e161]:
            - text: ➜
            - link "Sample Resumes" [ref=e162] [cursor=pointer]:
              - /url: /resume
          - listitem [ref=e163]:
            - text: ➜
            - link "Our Team" [ref=e164] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e165]:
            - text: ➜
            - link "Job Portals" [ref=e166] [cursor=pointer]:
              - /url: /jobs
          - listitem [ref=e167]:
            - text: ➜
            - link "Clients" [ref=e168] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=e169]:
            - text: ➜
            - link "Student Reviews" [ref=e170] [cursor=pointer]:
              - /url: /
          - listitem [ref=e171]:
            - text: ➜
            - link "Contact Us" [ref=e172] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=e173]:
            - text: ➜
            - link "About Us" [ref=e174] [cursor=pointer]:
              - /url: /about
      - generic [ref=e175]:
        - heading "Skills & Tools" [level=4] [ref=e176]
        - list [ref=e177]:
          - listitem [ref=e178]:
            - text: ➜
            - link "Playwright with TypeScript" [ref=e179] [cursor=pointer]:
              - /url: /playwright
          - listitem [ref=e180]:
            - text: ➜
            - link "Selenium with Core Java" [ref=e181] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e182]:
            - text: ➜
            - link "Manual Testing" [ref=e183] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e184]:
            - text: ➜
            - link "AI Testing" [ref=e185] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e186]:
            - text: ➜
            - link "API Testing" [ref=e187] [cursor=pointer]:
              - /url: /api
          - listitem [ref=e188]:
            - text: ➜
            - link "GitHub" [ref=e189] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e190]:
            - text: ➜
            - link "Jenkins" [ref=e191] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e192]:
            - text: ➜
            - link "TestNG + Junit" [ref=e193] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e194]:
            - text: ➜
            - link "BDD Cucumber" [ref=e195] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e196]:
            - text: ➜
            - link "MySQL" [ref=e197] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e198]:
            - text: ➜
            - link "Jira" [ref=e199] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e200]:
            - text: ➜
            - link "Agile Methodology" [ref=e201] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e202]:
            - text: ➜
            - link "Maven" [ref=e203] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e204]:
            - text: ➜
            - link "Postman" [ref=e205] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e206]:
            - text: ➜
            - link "Swagger" [ref=e207] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e208]:
            - text: ➜
            - link "Sikuli" [ref=e209] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e210]:
            - text: ➜
            - link "Log4j" [ref=e211] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e212]:
            - text: ➜
            - link "Real-Time Framework" [ref=e213] [cursor=pointer]:
              - /url: /#tools
      - generic [ref=e214]:
        - heading "Contact" [level=4] [ref=e215]
        - list [ref=e216]:
          - listitem [ref=e217]:
            - link "9000109120" [ref=e220] [cursor=pointer]:
              - /url: tel:9000109120
          - listitem [ref=e221]:
            - link "techlearn.india@gmail.com" [ref=e225] [cursor=pointer]:
              - /url: mailto:techlearn.india@gmail.com
          - listitem [ref=e226]:
            - generic [ref=e230]: Techlearn.in, Rajiv Gandhi Colony Road, SN Puram, Tirupati - 517507
    - generic [ref=e231]: © 2012-2026 Techlearn.in. All rights reserved.
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
  65  |     // await page.locator('#practice-state-select').selectOption({value:'KL'});
  66  |     // ### Index
  67  |     //  await page.locator('#practice-state-select').selectOption({index:6});
  68  |     // ### Label
  69  |   //  await page.locator('.demo-select').selectOption({label:'Kerala'})
  70  |   
  71  |     // Multiple Options using value
> 72  |     await page.locator('#practice-course-trigger').selectOption([{ value: 'API Testing' }, { value: 'Mobile Testing' }]);
      |                                                    ^ Error: locator.selectOption: Error: Element is not a <select> element
  73  |     // Multiple Options using label
  74  |    // await page.locator('#user_language').selectOption([{ label: 'Hebrew (עברית)' }, { label: 'Japanese (日本語)' }]);       
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
```