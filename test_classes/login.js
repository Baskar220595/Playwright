export class LoginPage{
    async nav(){
        await this.page.goto("http://adactinhotelapp.com/")
    }
    constructor(page){
        this.page = page
        this.username = page.locator("//input[@id='username']")
        this.password = page.locator("//input[@id='password']")
        this.loginBtn = page.locator("//input[@id='login']")
    }
    async loginCrd(){
        await this.username.fill(username)
        await this.password.fill(password)
        await this.loginBtn.click()
    }
}