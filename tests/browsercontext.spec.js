import {test} from '@playwright/test'

test('two browser', async ({browser})=>{
    let context = await browser.newContext()
    let page1 = await context.newPage()
    let page2 = await context.newPage()


    await page1.goto("https://google.com")
   // await waitForTimeout(3000)
    console.log( await page1.title())

    await page2.goto("https://facebook.com")
   // await waitForTimeout(3000)
    console.log( await page2.title())


    await page1.bringToFront()
    console.log("in page1", await page1.title())

    
    await page2.bringToFront()
    console.log("in page2", await page2.title())

    await page1.bringToFront()
   await page1.getByText('About').click()

    await page1.waitForTimeout(3000)
    await page2.waitForTimeout(3000)

    await page1.close()
    await page2.close()


})