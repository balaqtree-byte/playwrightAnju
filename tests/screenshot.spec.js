import {test} from '@playwright/test'

test.skip('full page screenshot', async ({page})=>{
    await page.goto("https://google.com")
    await page.waitForTimeout(3000)
    await page.screenshot({path:'ss.png', fullPage:true})
    await page.waitForTimeout(3000)
    await page.close()
})

test('element screenshot', async ({page})=>{
    await page.goto("https://google.com")
    await page.waitForTimeout(3000)
    await page.getByText('About').screenshot({path:'pp.png'})
    await page.waitForTimeout(3000)
    await page.close()
})
