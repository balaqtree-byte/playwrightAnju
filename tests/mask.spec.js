import {test} from '@playwright/test'

test('mask an element', async ({page})=>{
    await page.goto("https://mycontactform.com")
    await page.waitForTimeout(3000)
    let ele = await page.getByRole('button',{name:'Login'})
      await page.waitForTimeout(3000)
    await page.screenshot({
        path:'mask11.png',
        mask:[ele],
        maskColor:'#FFFF00'


    })
    await page.waitForTimeout(3000)
    await page.close()
})