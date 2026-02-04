import {test} from "@playwright/test"

test("Dynamic", async({page})=>{
    await page.locator("https://www.amazon.in/")
    await page.locator("//select[@id='searchDropdownBox']").click()
    await page.waitForTimeout(3000)
})