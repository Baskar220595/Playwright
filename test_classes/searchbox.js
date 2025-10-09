export class Searchbox{
    
    constructor (page){
        this.location= page.locator("//select[@id='location']")
        this.hotels= page.locator("//select[@id='hotels']")
        this.roomType= page.locator("//select[@id='room_type']")
        this.numberOfRooms= page.locator("//select[@id='room_nos']")
        this.checkInDate= page.locator("//input[@id='datepick_in']")
        this.checkOutDate= page.locator("//input[@id='datepick_out']")
        this.adultsPerRoom= page.locator("//select[@id='adult_room']")
        this.childrenPerRoom= page.locator("//select[@id='child_room']")
        this.submitBtn= page.locator("//input[@id='Submit']")
    }
    async searchboxFill(locationYouNeed,hotelYouAreLookingFor,roomTypeYouNeed,numberOfRoomsReq,DateIn,APR,CPR){
        await this.location.selectOption({label:locationYouNeed})
        await this.hotels.selectOption({label:hotelYouAreLookingFor})
        await this.roomType.selectOption({label:roomTypeYouNeed})
        await this.numberOfRooms.selectOption({label:numberOfRoomsReq})
        await this.checkInDate.fill(DateIn)
        await this.checkOutDate.fill(DateIn+2)
        await this.adultsPerRoom.selectOption({label:APR})
        await this.childrenPerRoom.selectOption({label:CPR})
        await this.submitBtn.click()
    }




}