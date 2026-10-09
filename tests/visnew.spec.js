import {test,expect} from '@playwright/test'
test('setting threshold ', async function({page})
{
    
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await expect(page).toHaveScreenshot('s2.png',{
        
        threshold:1.0,
        maxDiffPixels:500000,
        maxDiffPixelRatio:0.5
    })
    await page.waitForTimeout(2000)
    await page.getByPlaceholder("Username").fill("hello")

    await page.waitForTimeout(2000)
    expect(await page.screenshot()).toMatchSnapshot('s2.png', {
    threshold: 1.0,
    maxDiffPixels: 500000,
    maxDiffPixelRatio: 0.5
});
      await page.waitForTimeout(3000)
    await page.close()
})