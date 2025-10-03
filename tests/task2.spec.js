import {expect, test} from "@playwright/test";

test("task", async({page})=>{
    await page.goto("https://adactinhotelapp.com/index.php");
    const UN = await page.locator("//input[@type='text']");
    await UN.fill("Baskar220595")
    const PW = await page.locator("//input[@id='password']");
    await PW.fill("7410TJ")
    const Log = await page.locator("//input[@id='login']");
    await Log.click();
    console.log(Log)
    await expect(page).toHaveURL("https://adactinhotelapp.com/SearchHotel.php")
    const LCT = await page.locator("//select[@id='location']");
    await LCT.selectOption([{label:"London"}]);
    const selectLCT = await LCT.locator("option:checked").textContent();
    console.log(selectLCT)
    const Hot = await page.locator("//select[@id='hotels']");
    await Hot.selectOption([{label: "Hotel Creek"}]);
    const selectedHot = await Hot.locator("option:checked").textContent();
    console.log(selectedHot)
    const RT = await page.locator("//select[@id='room_type']");
    await RT.selectOption([{label: "Super Deluxe"}]);
    const selectedRT = await RT.locator("option:checked").textContent();
    console.log(selectedRT)
    const NoR = await page.locator("//select[@id='room_nos']");
    await NoR.selectOption({value : "3"});
    const selectedNoR = await RT.locator("option:checked").textContent();
    console.log(selectedNoR)
    
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const year = today.getFullYear();

    const formattedDate = `${day}/${month}/${year}`;
    console.log("Today's date:", formattedDate);

    const CIN = await page.locator("//input[@id='datepick_in']");
    await CIN.fill("formattedDate");
    const selectedCIN = await CIN.locator("option:checked").textContent();
    console.log(selectedCIN)
})


    //test.setTimeout(90000);
    //await expect(page).toHaveTitle("Online Shopping for Women, Men, Kids Fashion & Lifestyle - Myntra")
    //await page.waitForTimeout(5000)
    // const selectedFruit = await fruits.locator("option:checked").textContent();
    // console.log(selectedFruit)
    // const SH = await page.locator("//select[@id='superheros']");
    // await SH.selectOption([{label :"Ant-Man"},{label:"Batman"}]);
    // const selectedSH = await SH.locator("option:checked").allTextContents();
    // console.log(selectedSH)
    // await page.waitForTimeout(5000)
    // })


