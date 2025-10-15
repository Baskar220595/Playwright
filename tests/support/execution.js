import { setWorldConstructor } from "@cucumber/cucumber";
import { chromium } from "@playwright/test";

class Execution{
    constructor(){
        this.browser = null;
        this.context = null;
        this.page = null;
    }
    async launchBrowser(){
        this.browser = await chromium.launch({headless:false});
        this.context = await this.browser.newContext();
        this.page = await this.context.newPage(); 
    }
    async closeBrowser(){
        // await this.browser.close();
    }
}
setWorldConstructor(Execution)