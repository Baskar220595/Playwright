import {test} from "@playwright/test";

test("Element Handle", async({page})=>{

    await page.goto("https://www.myntra.com/");
    const placeholder = await page.locator("//input[@placeholder='Search for products, brands and more']");
    await placeholder.fill ("iphone17");
    const submitBtn = await page.locator("//a[@class= 'desktop-submit']");
    await submitBtn.click();
    
})