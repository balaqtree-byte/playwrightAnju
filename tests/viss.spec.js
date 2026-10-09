import {test,expect} from '@playwright/test'
test.skip('havingscreenshog ', async function({page})
{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page).toHaveScreenshot('first.png')
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Username").fill("hello")

    await page.waitForTimeout(2000)
    expect(await page.screenshot()).toMatchSnapshot('first.png')
     await page.waitForTimeout(3000)
    await page.close()
})


test('element snapshotmatchind  ', async function({page})
{
    
    await page.goto("https://www.facebook.com/")

     let e=await page.locator("//*[@name='email']")
     //creating base line image for element 
     await expect(e).toHaveScreenshot('elem.png')
 await page.waitForTimeout(2000)
     await e.fill("hi")
 await page.waitForTimeout(2000)
     expect(await e.screenshot()).toMatchSnapshot('elem.png')
   
      await page.waitForTimeout(3000)
    await page.close()
})