# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tech.spec.ts >> Iframes
- Location: tests\tech.spec.ts:224:5

# Error details

```
Error: locator.fill: Error: strict mode violation: locator('.iframes-practice-frame') resolved to 2 elements:
    1) <iframe class="iframes-practice-frame" title="Single iFrame form practice" sandbox="allow-forms allow-scripts" srcdoc="<!doctype html>↵<html lang="en">↵<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>↵  * { box-sizing: border-box; }↵  body { margin: 0; padding: 20px; color: #17213b; font: 15px/1.5 Arial, sans-serif; background: #fff; }↵  h2 { margin: 0 0 14px; color: #18294d; font-size: 20px; }↵  h3 { margin: 0 0 12px; color: #18294d; font-size: 1…></iframe> aka locator('iframe[title="Single iFrame form practice"]')
    2) <iframe title="Outer iFrame containing a nested inner iFrame" class="iframes-practice-frame iframes-practice-frame--nested" srcdoc="<!doctype html>↵<html lang="en">↵<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><style>↵  * { box-sizing: border-box; }↵  body { margin: 0; padding: 20px; color: #17213b; font: 15px/1.5 Arial, sans-serif; background: #fff; }↵  h2 { margin: 0 0 14px; color: #18294d; font-size: 20px; }↵  h3 { margin: 0 0 12px; color: #18294d;…></iframe> aka locator('iframe[title="Outer iFrame containing a nested inner iFrame"]')

Call log:
  - waiting for locator('.iframes-practice-frame').contentFrame().getByPlaceholder('Enter your name')

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
      - paragraph [ref=e105]: $ Practice / Iframes
      - heading "Iframes Practice" [level=1] [ref=e106]
      - paragraph [ref=e107]: Practice locating and interacting with form controls inside single and nested browser frames.
    - generic [ref=e109]:
      - generic [ref=e110]:
        - region [ref=e111]:
          - paragraph [ref=e112]: // Practice 1
          - heading "Single iFrame" [level=2] [ref=e113]
          - paragraph [ref=e114]: Interact with the form controls inside this frame, then submit it to see a confirmation.
          - iframe [ref=e115]:
            - generic [ref=f1e1]:
              - heading "Single iFrame Form" [level=2] [ref=f1e2]
              - generic [ref=f1e3]:
                - generic [ref=f1e4]:
                  - text: Full name
                  - textbox "Full name" [ref=f1e5]:
                    - /placeholder: Enter your name
                - generic [ref=f1e6]:
                  - text: Email address
                  - textbox "Email address" [ref=f1e7]:
                    - /placeholder: name@example.com
                - group "Preferred session" [ref=f1e8]:
                  - generic [ref=f1e10]:
                    - generic [ref=f1e11]:
                      - radio "Online" [ref=f1e12]
                      - text: Online
                    - generic [ref=f1e13]:
                      - radio "Classroom" [ref=f1e14]
                      - text: Classroom
                - group "Topics of interest" [ref=f1e15]:
                  - generic [ref=f1e17]:
                    - generic [ref=f1e18]:
                      - checkbox "Selenium" [ref=f1e19]
                      - text: Selenium
                    - generic [ref=f1e20]:
                      - checkbox "Playwright" [ref=f1e21]
                      - text: Playwright
                - generic [ref=f1e22]:
                  - text: Choose a course
                  - combobox "Choose a course" [ref=f1e23]:
                    - option "Select a course" [selected]
                    - option "Automation Testing"
                    - option "API Testing"
                - button "Submit Frame Form" [ref=f1e24] [cursor=pointer]
                - status [ref=f1e25]
        - region [ref=e116]:
          - paragraph [ref=e117]: // Practice 2
          - heading "Nested iFrames" [level=2] [ref=e118]
          - paragraph [ref=e119]: Interact with the outer form and its inner frame to practice switching frame context.
          - iframe [ref=e120]:
            - generic [ref=f2e1]:
              - heading "Outer iFrame" [level=2] [ref=f2e2]
              - generic [ref=f2e3]:
                - generic [ref=f2e4]:
                  - text: Outer frame name
                  - textbox "Outer frame name" [ref=f2e5]:
                    - /placeholder: Enter a value in the outer frame
                - generic [ref=f2e6]:
                  - generic [ref=f2e7]:
                    - radio "Outer choice one" [ref=f2e8]
                    - text: Outer choice one
                  - generic [ref=f2e9]:
                    - radio "Outer choice two" [ref=f2e10]
                    - text: Outer choice two
                  - generic [ref=f2e11]:
                    - checkbox "Confirm outer frame" [ref=f2e12]
                    - text: Confirm outer frame
                - button "Submit Outer Form" [ref=f2e13] [cursor=pointer]
                - status [ref=f2e14]
              - iframe [ref=f2e15]:
                - generic [ref=f3e1]:
                  - heading "Inner iFrame" [level=3] [ref=f3e2]
                  - generic [ref=f3e3]:
                    - generic [ref=f3e4]:
                      - text: Inner frame name
                      - textbox "Inner frame name" [ref=f3e5]:
                        - /placeholder: Enter a value in the inner frame
                    - generic [ref=f3e6]:
                      - generic [ref=f3e7]:
                        - radio "Inner choice one" [ref=f3e8]
                        - text: Inner choice one
                      - generic [ref=f3e9]:
                        - radio "Inner choice two" [ref=f3e10]
                        - text: Inner choice two
                    - generic [ref=f3e12]:
                      - checkbox "Confirm inside inner frame" [ref=f3e13]
                      - text: Confirm inside inner frame
                    - button "Submit Inner Form" [ref=f3e14] [cursor=pointer]
                    - status [ref=f3e15]
      - link "Back to Practice" [ref=e122] [cursor=pointer]:
        - /url: /practice
  - contentinfo [ref=e123]:
    - generic [ref=e124]:
      - generic [ref=e125]:
        - img "Techlearn.in - Software Training and Placement Institute" [ref=e127]
        - paragraph [ref=e128]: Techlearn.in is a professional software testing training institute focused on practical, industry-oriented learning. We provide Manual Testing, Automation Testing, API Testing, and Job Support training through Offline, Online, One-to-One, and Home Training programs, helping learners build real-world skills and achieve their career goals in IT. Since 2013.
        - generic [ref=e129]:
          - link "LinkedIn" [ref=e130] [cursor=pointer]:
            - /url: https://linkedin.com
            - text: in
          - link "Instagram" [ref=e131] [cursor=pointer]:
            - /url: https://instagram.com
            - text: ig
          - link "YouTube" [ref=e132] [cursor=pointer]:
            - /url: https://youtube.com
            - text: yt
      - generic [ref=e133]:
        - heading "Navigate" [level=4] [ref=e134]
        - list [ref=e135]:
          - listitem [ref=e136]:
            - text: ➜
            - link "All Courses" [ref=e137] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e138]:
            - text: ➜
            - link "Placements" [ref=e139] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=e140]:
            - text: ➜
            - link "Sample Resumes" [ref=e141] [cursor=pointer]:
              - /url: /resume
          - listitem [ref=e142]:
            - text: ➜
            - link "Our Team" [ref=e143] [cursor=pointer]:
              - /url: /about
          - listitem [ref=e144]:
            - text: ➜
            - link "Job Portals" [ref=e145] [cursor=pointer]:
              - /url: /jobs
          - listitem [ref=e146]:
            - text: ➜
            - link "Clients" [ref=e147] [cursor=pointer]:
              - /url: /placements
          - listitem [ref=e148]:
            - text: ➜
            - link "Student Reviews" [ref=e149] [cursor=pointer]:
              - /url: /
          - listitem [ref=e150]:
            - text: ➜
            - link "Contact Us" [ref=e151] [cursor=pointer]:
              - /url: /contact
          - listitem [ref=e152]:
            - text: ➜
            - link "About Us" [ref=e153] [cursor=pointer]:
              - /url: /about
      - generic [ref=e154]:
        - heading "Skills & Tools" [level=4] [ref=e155]
        - list [ref=e156]:
          - listitem [ref=e157]:
            - text: ➜
            - link "Playwright with TypeScript" [ref=e158] [cursor=pointer]:
              - /url: /playwright
          - listitem [ref=e159]:
            - text: ➜
            - link "Selenium with Core Java" [ref=e160] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e161]:
            - text: ➜
            - link "Manual Testing" [ref=e162] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e163]:
            - text: ➜
            - link "AI Testing" [ref=e164] [cursor=pointer]:
              - /url: /services
          - listitem [ref=e165]:
            - text: ➜
            - link "API Testing" [ref=e166] [cursor=pointer]:
              - /url: /api
          - listitem [ref=e167]:
            - text: ➜
            - link "GitHub" [ref=e168] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e169]:
            - text: ➜
            - link "Jenkins" [ref=e170] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e171]:
            - text: ➜
            - link "TestNG + Junit" [ref=e172] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e173]:
            - text: ➜
            - link "BDD Cucumber" [ref=e174] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e175]:
            - text: ➜
            - link "MySQL" [ref=e176] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e177]:
            - text: ➜
            - link "Jira" [ref=e178] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e179]:
            - text: ➜
            - link "Agile Methodology" [ref=e180] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e181]:
            - text: ➜
            - link "Maven" [ref=e182] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e183]:
            - text: ➜
            - link "Postman" [ref=e184] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e185]:
            - text: ➜
            - link "Swagger" [ref=e186] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e187]:
            - text: ➜
            - link "Sikuli" [ref=e188] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e189]:
            - text: ➜
            - link "Log4j" [ref=e190] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e191]:
            - text: ➜
            - link "Real-Time Framework" [ref=e192] [cursor=pointer]:
              - /url: /#tools
      - generic [ref=e193]:
        - heading "Contact" [level=4] [ref=e194]
        - list [ref=e195]:
          - listitem [ref=e196]:
            - link "9000109120" [ref=e199] [cursor=pointer]:
              - /url: tel:9000109120
          - listitem [ref=e200]:
            - link "techlearn.india@gmail.com" [ref=e204] [cursor=pointer]:
              - /url: mailto:techlearn.india@gmail.com
          - listitem [ref=e205]:
            - generic [ref=e209]: Techlearn.in, Rajiv Gandhi Colony Road, SN Puram, Tirupati - 517507
    - generic [ref=e210]: © 2012-2026 Techlearn.in. All rights reserved.
```

# Test source

```ts
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
  190 |    page.once('dialog', alert => {
  191 |         alert.accept();
  192 |    })
  193 |     await page.getByRole('button', { name: 'Simple Alert' }).click(); 
  194 | 
  195 | await page.waitForTimeout(3000);
  196 | 
  197 |     // Confirmation Alert
  198 |     
  199 |     page.once('dialog', alert => {
  200 |         //  alert.accept();
  201 |         alert.dismiss();
  202 |     })
  203 | 
  204 |     await page.getByRole('button', { name: 'Confirm Dialog' }).click();  
  205 | 
  206 |     await page.waitForTimeout(3000);  
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
  222 | });
  223 |   
  224 | test('Iframes', async ({ page }) => {
  225 |     await page.goto('https://www.techlearn.in/practice/iframes');
  226 |     await page.waitForTimeout(3000);
  227 |    const iframe = page.frameLocator('.iframes-practice-frame');
  228 |   await page.waitForTimeout(3000);
> 229 |   await iframe.getByPlaceholder('Enter your name').fill('Purushotham');
      |                                                    ^ Error: locator.fill: Error: strict mode violation: locator('.iframes-practice-frame') resolved to 2 elements:
  230 |   await page.waitForTimeout(3000);
  231 |   });
  232 | 
  233 | 
  234 | 
  235 | 
  236 | 
  237 | 
  238 | 
  239 | 
  240 | 
  241 | 
```