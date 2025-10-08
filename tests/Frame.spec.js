import {test} from "@playwright/test";

test("Frame Handling", async ({page}) => {
    await page.goto("https://demo.automationtesting.in/Frames.html");

    const frame = await page.framelocator("//iframe[@id='singleframe']");
    const TextBox = await frame.locator("//input[@type='text']");
    await TextBox.fill("Baskar");
    await page.waitForTimeout(2000)
})