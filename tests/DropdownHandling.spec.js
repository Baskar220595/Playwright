import {test} from "@playwright/test";

test("DDH", async({page})=>{

    await page.goto("https://letcode.in/dropdowns");
    const fruits = await page.locator("//select[@id='fruits']");
    await fruits.selectOption({label : "Mango"})
    const selectedFruit = await fruits.locator("option:checked").textContent();
    console.log(selectedFruit)
    const SH = await page.locator("//select[@id='superheros']");
    await SH.selectOption([{label :"Ant-Man"},{label:"Batman"}]);
    const selectedSH = await SH.locator("option:checked").allTextContents();
    console.log(selectedSH)
    //await page.waitForTimeout(5000)
    })