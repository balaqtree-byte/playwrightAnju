import {test} from '@playwright/test'
test('keyboard handling', async ({page})=>{

await page.goto("https://www.mycontactform.com/")
await page.locator("#user").fill("anjalai")
//control+a
await page.keyboard.press("Control+A")
//control+c
await page.keyboard.press("Control+C")

//tab down
await page.keyboard.down("Tab")
//to releasing the key pressing up
await page.keyboard.up("Tab")

//control+V
await page.keyboard.press("Control+V")
//navigating login button pressing up and down arrow
//tab down
await page.keyboard.down("Tab")
//to releasing the key pressing up
await page.keyboard.up("Tab")

await page.keyboard.down("Enter")
//to releasing the key pressing up
await page.keyboard.up("Enter")

await page.waitForTimeout(3000)
await page.close()


})