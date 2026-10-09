import {test} from '@playwright/test'

test('dynamic element', async ({page})=>{
    page.goto("http://www.mycontactform.com")
    //following
    //preceding

    //syntax: sourceXpath//following::targettagname
    //username=>logi button
     //await page.locator("//*[@id='user']//following::input[2]").click()

     //syntax: sourceXpath//preceding::targettagname
    //login button=>username
   // await page.locator("//*[@id='right_col_top']/form/div/input//preceding::input[2]").fill("anjalai")

   //parent=>child

   //let test = await page.locator("//*[@id='right_col_bottom']//child::p[1]").textContent()

   //child =>parent
   //let test1 = await page.locator("//*[@id='right_col_bottom']/p[4]//parent::div").textContent()

   //following sibling
   // let tagn = await page.locator("//*[@id='right_col_bottom']/img//following-sibling::div[2]").textContent()


   //following preceding
   let pres = await page.locator("//*[@id='right_col_bottom']/p[4]//preceding-sibling::p[1]").textContent()




   console.log(pres)
     await page.waitForTimeout(3000)
     await page.close()
})