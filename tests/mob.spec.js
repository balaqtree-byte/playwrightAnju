import {test} from '@playwright/test'
test('iphone mob test', async ({page})=>{

await page.goto("https://www.google.com/")
await page.getByText('About').click()
await page.waitForTimeout(2000)

})