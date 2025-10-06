import { expect, test } from "@playwright/test";
import path from "path";
test("Windows Handling", async({browser})=>{
    
    const context = await browser.newContext()
    const page = await context.newPage();
    await page.goto("https://www.amazon.in/ref=nav_logo")
    
    const AmazonSearch = await page.locator("//input[@id='twotabsearchtextbox']");
    await AmazonSearch.fill ("Iphone17")
    const searchbox = await page.locator("//input[@id='nav-search-submit-button']")
    await searchbox.click();

    const [newIphonePage] = await Promise.all([
    context.waitForEvent('page'),
    page.click("//h2[contains(@aria-label,'iPhone')][1]")
])
    const addcart = await newIphonePage.locator("//div[contains(@id,'twisterPlusPrice')]//following-sibling::div[@id='addToCart_feature_div']//descendant::input[@id='add-to-cart-button']")
    await addcart.click();
    await newIphonePage.waitForLoadState('domcontentloaded')
    await newIphonePage.screenshot({path:"screenshot/addtocart.png"})
})







    //await expect(page).toHaveURL("https://www.amazon.in/s?k=iphone+17&crid=XTQBWT53TMWO&sprefix=iphone+17%2Caps%2C249&ref=nb_sb_noss_2")
    // (//h2[contains(@aria-label,'iPhone')])[1]
    // const AmazonPageTwo = await page.locator("//input[@id='twotabsearchtextbox']");