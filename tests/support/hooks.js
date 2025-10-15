import{Before,After} from "@cucumber/cucumber"
import{LoginPage} from "../pages/login.js";

Before(async()=>{
    await this.lunchBrowser();
    this.loginPage = new LoginPage(this.page) 
})
After(async()=>{
    await this.closeBrowser();
})