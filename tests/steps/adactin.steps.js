import {Given, When, Then} from "@cucumber/cucumber";
import { LoginPage } from "../../test_classes/login.js";

let loginPage;// undefined
Given('navigate to atactin hotel app',async function () {
    loginPage = new LoginPage(this.page)
    await loginPage.navigate();    
});

When('enter userName and password', async function(){
    await loginPage.login("Baskar220595","E943T5");
});

Then('click loginBtn and it navigates to searchHotel page',async function(){
    await loginPage.clickLoginBtn();
});
