import {test} from '@playwright/test' 

test('login insta', async function ({page}) {
    await page.goto("https://instagram.com")
    await page.waitForTimeout(3000)
    await page.close()
    
})
