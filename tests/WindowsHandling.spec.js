import { expect, test } from "@playwright/test";
test("Windows Handling", async({browser})=>{
    
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/")
    
    const amazonHomePage = await page.locator("//input[@id='twotabsearchtextbox']");
    await amazonHomePage.fill ("iphone17")
    const submitBtn = await page.locator("//input[@id='nav-search-submit-button']");
    await submitBtn.click();


    })

