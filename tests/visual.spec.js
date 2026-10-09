import {test,expect} from '@playwright/test'
test('visual testing', async ({page})=>{
await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
expect (page).toHaveScreenshot('baseline.png')
await page.close()
})