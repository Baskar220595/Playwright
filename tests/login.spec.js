import {test} from "@playwright/test"
import {LoginPage} from "../test_classes/login"
import {Searchbox} from "../test_classes/searchbox"
import { HotelSelection } from "../test_classes/selectHotel"

test("Adactin-obj-for-login",async({page})=>{
    const logPage = new LoginPage(page)
    const searchLocation = new Searchbox(page)
    const sltnHotel = new HotelSelection(page)

    await logPage.nav()
    await logPage.loginCrd("Baskar220595","E943T5")
// })

// test("Adactin-obj-for-selectOption",async({page})=>{
    
    await searchLocation.searchboxFill("Adelaide","Hotel Cornice","Deluxe","1 - One","12/10/2025","2 - Two","0 - None")
    await sltnHotel.sltHotel()


    await page.waitForTimeout(3000)
})

