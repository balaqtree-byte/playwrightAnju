import {test} from '@playwright/test'
test('facebook page visiting', async function({page})

{
    await page.goto("http://www.facebook.com")
    await page.waitForTimeout(3000)
    await page.close()
})

//to open sites : npx playwright test s1.spec.js --headed
