import {test} from '@playwright/test'

test('locator test' , async function ({page}) {

    await page.goto("https://www.mycontactform.com")
    
    await page.waitForTimeout(5000)
    await page.waitForTimeout(5000)

   // await page.getByPlaceholder("Username").fill("usernname")
    //await page.getByPlaceholder("Password").fill("password")
    //await page.getByRole('textbox',{name:"Username"}).fill("Anju")
    await page.getByLabel("Password:").fill("anjupassword")
     
     await page.waitForTimeout(5000)

    
}) 