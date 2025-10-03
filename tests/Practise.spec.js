 import { test, expect } from "@playwright/test";

test("Adactin Hotel Search - Fill Form with Dynamic Dates", async ({ page }) => {
  // 🌐 Step 1: Navigate to login page
  await page.goto("https://adactinhotelapp.com/index.php",{
    waitUntil: "domcontentloaded",
    timeout: 60_000,
  });

  // 🔐 Step 2: Login
  await page.locator("//input[@type='text']").fill("Baskar220595");
  await page.locator("//input[@id='password']").fill("7410TJ");
  await page.locator("//input[@id='login']").click();

  // ✅ Verify navigation
  await expect(page).toHaveURL("https://adactinhotelapp.com/SearchHotel.php");

  // 🧭 Step 3: Select dropdown values
  const location = page.locator("//select[@id='location']");
  const hotel = page.locator("//select[@id='hotels']");
  const roomType = page.locator("//select[@id='room_type']");
  const numRooms = page.locator("//select[@id='room_nos']");
  const adultsPerRoom = page.locator("//select[@id='adult_room']");
  const childPerRoom = page.locator("//select[@id='child_room']");

  await location.selectOption({ label: "London" });
  await hotel.selectOption({ label: "Hotel Creek" });
  await roomType.selectOption({ label: "Super Deluxe" });
  await numRooms.selectOption({ value: "3" });
  await adultsPerRoom.selectOption({ value: "3" });
  await childPerRoom.selectOption({ value: "0" });

  // 🧾 Log selected values
  console.log("Selected Location:", await location.locator("option:checked").textContent());
  console.log("Selected Hotel:", await hotel.locator("option:checked").textContent());
  console.log("Selected Room Type:", await roomType.locator("option:checked").textContent());
  console.log("Selected No. of Rooms:", await numRooms.locator("option:checked").textContent());
  console.log("Selected Adults per Room:", await adultsPerRoom.locator("option:checked").textContent());
  console.log("Selected Children per Room:", await childPerRoom.locator("option:checked").textContent());

  // Generate today's date (Check-In)
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  // Generate tomorrow’s date (Check-Out)
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  const nextDay = String(tomorrow.getDate()).padStart(2, "0");
  const nextMonth = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const nextYear = tomorrow.getFullYear();
  const formattedTomorrow = `${nextDay}/${nextMonth}/${nextYear}`;

  // Fill check-in and check-out dates
  const checkIn = page.locator("//input[@id='datepick_in']");
  const checkOut = page.locator("//input[@id='datepick_out']");

  await checkIn.fill(formattedDate);
  await checkOut.fill(formattedTomorrow);

  console.log("Check-In Date:", await checkIn.inputValue());
  console.log("Check-Out Date:", await checkOut.inputValue());

  // 🔍 Step 6: Submit search
  await page.locator("//input[@id='Submit']").click();

  // ✅ Optional: Assert navigation or presence of result element
  await expect(page).toHaveURL(/SelectHotel\.php/);
});