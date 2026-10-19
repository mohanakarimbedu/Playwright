import { Page } from "@playwright/test";

export class BasePage { 
    readonly page: Page;

    constructor(page: Page) { 
        this.page = page;
    }

    async goToUrl() { 

        if (process.env.TEST_EXECUTION_ENV_QA == 'qa') {
            await this.page.goto(`${process.env.qaurl}`);
            // await this.page.keyboard.press('Escape');
            console.log(`${process.env.Test_Execution_Env}`);
        }
        else if (process.env.TEST_EXECUTION_ENV_DEV == 'dev') {
            await this.page.goto(`${process.env.devurl}`);
            // await this.page.keyboard.press('Escape');
        }
    
    }
}
