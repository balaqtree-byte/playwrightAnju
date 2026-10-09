import {test} from '@playwright/test'
test('locaton chaging using geo', async ({page})=>{

await page.goto("https://www.gps-coordinates.net/my-location")
await page.waitForTimeout(4000)
await page.close()


})