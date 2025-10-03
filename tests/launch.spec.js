import {test, expect} from "@playwright/test";

test("First Day Task", async({page})=>{
await page.goto("https://www.myntra.com/")
const url = await page.url()
await expect(page).toHaveURL("https://www.myntra.com/")
await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra")
console.log(url)
const title = await page.title()
console.log(title)
})