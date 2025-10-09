export class HotelSelection{

    constructor(page){
    this.radioBtn = page.locator("//input[@id='radiobutton_0']")
    this.continueBtn = page.locator("//input[@id='continue']")
    }

    async sltHotel(){
        await this.radioBtn.click()
        await this.continueBtn.click()
    }


    }
    
