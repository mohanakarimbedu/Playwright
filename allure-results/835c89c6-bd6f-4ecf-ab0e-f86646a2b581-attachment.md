# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> Alerts - Simple, Confirmation, Prompt
- Location: tests\tech.spec.ts:186:5

# Error details

```
Error: dialog.dismiss: Cannot dismiss dialog which is already handled!
```

```
Error: page.waitForTimeout: Test ended.
Call log:
  - operation was aborted: Test ended.

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - banner [ref=f2e4]:
    - generic [ref=f2e6]:
      - generic [ref=f2e7]:
        - link "+91 9000109120" [ref=f2e8] [cursor=pointer]:
          - /url: tel:+919000109120
        - link "techlearn.india@gmail.com" [ref=f2e11] [cursor=pointer]:
          - /url: mailto:techlearn.india@gmail.com
        - generic "Location" [ref=f2e15]: Techlearn.in, Rajiv Gandhi Colony Road, SN Puram, Tirupati - 517507
      - generic "Social media" [ref=f2e19]:
        - link "LinkedIn" [ref=f2e20] [cursor=pointer]:
          - /url: https://www.linkedin.com
        - link "Instagram" [ref=f2e23] [cursor=pointer]:
          - /url: https://www.instagram.com
        - link "Facebook" [ref=f2e28] [cursor=pointer]:
          - /url: https://www.facebook.com
        - link "X" [ref=f2e31] [cursor=pointer]:
          - /url: https://x.com
        - link "YouTube" [ref=f2e34] [cursor=pointer]:
          - /url: https://www.youtube.com
    - generic [ref=f2e39]:
      - link [ref=f2e40] [cursor=pointer]:
        - /url: /
        - img "Techlearn.in - Software Training and Placement Institute" [ref=f2e41]
      - navigation [ref=f2e42]:
        - link [ref=f2e43] [cursor=pointer]:
          - /url: /
        - link [ref=f2e47] [cursor=pointer]:
          - /url: /about
        - link [ref=f2e52] [cursor=pointer]:
          - /url: /placements
        - link [ref=f2e57] [cursor=pointer]:
          - /url: /gallery
        - link [ref=f2e63] [cursor=pointer]:
          - /url: /resume
        - link [ref=f2e68] [cursor=pointer]:
          - /url: /services
        - link [ref=f2e73] [cursor=pointer]:
          - /url: /practice
        - link [ref=f2e78] [cursor=pointer]:
          - /url: /jobs
        - link [ref=f2e83] [cursor=pointer]:
          - /url: /faq
        - link [ref=f2e88] [cursor=pointer]:
          - /url: /contact
        - link "Tools" [ref=f2e93] [cursor=pointer]:
          - /url: /#tools
          - generic [aria-hidden] [ref=f2e101]: ▾
  - main [ref=f2e102]:
    - generic [ref=f2e104]:
      - paragraph [ref=f2e105]: $ Practice / Alerts
      - heading "Alerts & Dialogs Practice" [level=1] [ref=f2e106]
      - paragraph [ref=f2e107]: Choose a dialog to open it, complete the action, and review your result.
    - generic [ref=f2e109]:
      - generic [ref=f2e110]:
        - region [ref=f2e111]:
          - paragraph [ref=f2e112]: // Practice 1
          - heading "Simple Alert" [level=2] [ref=f2e113]
          - paragraph [ref=f2e114]: Open a message and acknowledge it by selecting OK.
          - button "Simple Alert" [ref=f2e115] [cursor=pointer]
        - region [ref=f2e116]:
          - paragraph [ref=f2e117]: // Practice 2
          - heading "Confirmation Dialog Box" [level=2] [ref=f2e118]
          - paragraph [ref=f2e119]: Choose OK to confirm the action or Cancel to reject it.
          - button "Confirm Dialog" [active] [ref=f2e120] [cursor=pointer]
        - region [ref=f2e121]:
          - paragraph [ref=f2e122]: // Practice 3
          - heading "Prompt Dialog Box" [level=2] [ref=f2e123]
          - paragraph [ref=f2e124]: Enter your name in the prompt, then submit it or cancel.
          - button "Prompt Dialog" [ref=f2e125] [cursor=pointer]
      - status [ref=f2e126]: "Confirmation Dialog: You selected OK to confirm the action."
      - link "Back to Practice" [ref=f2e128] [cursor=pointer]:
        - /url: /practice
  - contentinfo [ref=f2e129]:
    - generic [ref=f2e130]:
      - generic [ref=f2e131]:
        - img "Techlearn.in - Software Training and Placement Institute" [ref=f2e133]
        - paragraph [ref=f2e134]: Techlearn.in is a professional software testing training institute focused on practical, industry-oriented learning. We provide Manual Testing, Automation Testing, API Testing, and Job Support training through Offline, Online, One-to-One, and Home Training programs, helping learners build real-world skills and achieve their career goals in IT. Since 2013.
        - generic [ref=f2e135]:
          - link "LinkedIn" [ref=f2e136] [cursor=pointer]:
            - /url: https://linkedin.com
            - text: in
          - link "Instagram" [ref=f2e137] [cursor=pointer]:
            - /url: https://instagram.com
            - text: ig
          - link "YouTube" [ref=f2e138] [cursor=pointer]:
            - /url: https://youtube.com
            - text: yt
      - generic [ref=f2e139]:
        - heading "Navigate" [level=4] [ref=f2e140]
        - list [ref=f2e141]:
          - listitem [ref=f2e142]:
            - text: ➜
            - link "All Courses" [ref=f2e143] [cursor=pointer]:
              - /url: /services
          - listitem [ref=f2e144]:
            - text: ➜
            - link "Placements" [ref=f2e145] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=f2e146]:
            - text: ➜
            - link "Sample Resumes" [ref=f2e147] [cursor=pointer]:
              - /url: /resume
          - listitem [ref=f2e148]:
            - text: ➜
            - link "Our Team" [ref=f2e149] [cursor=pointer]:
              - /url: /about
          - listitem [ref=f2e150]:
            - text: ➜
            - link "Job Portals" [ref=f2e151] [cursor=pointer]:
              - /url: /jobs
          - listitem [ref=f2e152]:
            - text: ➜
            - link "Clients" [ref=f2e153] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=f2e154]:
            - text: ➜
            - link "Student Reviews" [ref=f2e155] [cursor=pointer]:
              - /url: /
          - listitem [ref=f2e156]:
            - text: ➜
            - link "Contact Us" [ref=f2e157] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=f2e158]:
            - text: ➜
            - link "About Us" [ref=f2e159] [cursor=pointer]:
              - /url: /about
      - generic [ref=f2e160]:
        - heading "Skills & Tools" [level=4] [ref=f2e161]
        - list [ref=f2e162]:
          - listitem [ref=f2e163]:
            - text: ➜
            - link "Playwright with TypeScript" [ref=f2e164] [cursor=pointer]:
              - /url: /playwright
          - listitem [ref=f2e165]:
            - text: ➜
            - link "Selenium with Core Java" [ref=f2e166] [cursor=pointer]:
              - /url: /services
          - listitem [ref=f2e167]:
            - text: ➜
            - link "Manual Testing" [ref=f2e168] [cursor=pointer]:
              - /url: /services
          - listitem [ref=f2e169]:
            - text: ➜
            - link "AI Testing" [ref=f2e170] [cursor=pointer]:
              - /url: /services
          - listitem [ref=f2e171]:
            - text: ➜
            - link "API Testing" [ref=f2e172] [cursor=pointer]:
              - /url: /api
          - listitem [ref=f2e173]:
            - text: ➜
            - link "GitHub" [ref=f2e174] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e175]:
            - text: ➜
            - link "Jenkins" [ref=f2e176] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e177]:
            - text: ➜
            - link "TestNG + Junit" [ref=f2e178] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e179]:
            - text: ➜
            - link "BDD Cucumber" [ref=f2e180] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e181]:
            - text: ➜
            - link "MySQL" [ref=f2e182] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e183]:
            - text: ➜
            - link "Jira" [ref=f2e184] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e185]:
            - text: ➜
            - link "Agile Methodology" [ref=f2e186] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e187]:
            - text: ➜
            - link "Maven" [ref=f2e188] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e189]:
            - text: ➜
            - link "Postman" [ref=f2e190] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e191]:
            - text: ➜
            - link "Swagger" [ref=f2e192] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e193]:
            - text: ➜
            - link "Sikuli" [ref=f2e194] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e195]:
            - text: ➜
            - link "Log4j" [ref=f2e196] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=f2e197]:
            - text: ➜
            - link "Real-Time Framework" [ref=f2e198] [cursor=pointer]:
              - /url: /#tools
      - generic [ref=f2e199]:
        - heading "Contact" [level=4] [ref=f2e200]
        - list [ref=f2e201]:
          - listitem [ref=f2e202]:
            - link "9000109120" [ref=f2e205] [cursor=pointer]:
              - /url: tel:9000109120
          - listitem [ref=f2e206]:
            - link "techlearn.india@gmail.com" [ref=f2e210] [cursor=pointer]:
              - /url: mailto:techlearn.india@gmail.com
          - listitem [ref=f2e211]:
            - generic [ref=f2e215]: Techlearn.in, Rajiv Gandhi Colony Road, SN Puram, Tirupati - 517507
    - generic [ref=f2e216]: © 2012-2026 Techlearn.in. All rights reserved.
```

# Test source

```ts
  106 | /*    await page.locator('input[type="file"]').setInputFiles([
  107 |   'test-data/resume.pdf',
  108 |   'test-data/photo.jpg'
  109 |     ]); */
  110 |     
  111 |     // Not an important
  112 | 
  113 |     // File chooser approach : If clicking a button opens the file chooser
  114 | 
  115 |  /*   const fileChooserPromise = page.waitForEvent('filechooser');
  116 | 
  117 |     await page.getByRole('button', { name: 'Upload File' }).click();
  118 | 
  119 |     const fileChooser = await fileChooserPromise;
  120 | 
  121 |     await fileChooser.setFiles('test-data/resume.pdf');  */
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
  187 |     await page.goto('https://www.techlearn.in/practice/alerts');
  188 |     await page.waitForTimeout(3000);
  189 |     // Simple Alert
  190 |    page.on('dialog', alert => {
  191 |         alert.accept();
  192 |    })
  193 |     await page.getByRole('button', { name: 'Simple Alert' }).click(); 
  194 | 
  195 | await page.waitForTimeout(3000);
  196 | 
  197 |     // Confirmation Alert
  198 |     
  199 |     page.on('dialog', alert => {
  200 |         //  alert.accept();
  201 |         alert.dismiss();
  202 |     })
  203 | 
  204 |     await page.getByRole('button', { name: 'Confirm Dialog' }).click();  
  205 | 
> 206 |     await page.waitForTimeout(3000);  
      |                ^ Error: page.waitForTimeout: Test ended.
  207 |     
  208 |     
  209 |        //Prompt Alert
  210 |         page.on('dialog', dialog => {
  211 |         //    expect(dialog.type()).toEqual('prompt')
  212 |           //  expect(dialog.message()).toEqual('I am a JS prompt')
  213 |             console.log(dialog.message())
  214 |           //  expect(dialog.defaultValue()).toEqual('')// by default there is no text in the prompt
  215 |             dialog.accept('Hello, Playwright!')// handle prompt by clicking ok button and
  216 |                                                 // passing some text in the prompt
  217 |             
  218 |         })
  219 |   await page.getByRole('button', { name: 'Prompt Dialog' }).click();
  220 |           
  221 |         await page.waitForTimeout(3000);
  222 |   });
  223 | 
  224 | 
  225 | 
  226 | 
  227 | 
```