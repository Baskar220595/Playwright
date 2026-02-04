export class LoginPage {
    async navigate() {
        await this.page.goto("http://adactinhotelapp.com/")
    }
    constructor(page) {
        this.page = page;
        this.username = page.locator("//input[@id='username']")
        this.password = page.locator("//input[@id='password']")
        this.loginBtn = page.locator("//input[@id='login']")
    }
    async login(username, password) {
        await this.username.fill(username)
        await this.password.fill(password)

    }

    async clickLoginBtn() {
        await this.loginBtn.click()
    }

}