import {test} from '@playwright/test'
/*test('elements page visiting', async function({page})

{
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await page.waitForTimeout(3000)
    await page.getByPlaceholder("Username").fill("hello")
    await page.getByPlaceholder("Password").fill("password")
    
    //get by role --> by visible button or tesxbox name
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(3000)
    await page.close()
}) */

test.skip('using label element', async function({page})

{
    await page.goto("https://www.mycontactform.com")
    await page.waitForTimeout(3000)
    await page.getByLabel("User Name:").fill("username")
    await page.getByLabel("Password:").fill("pass")
    
    //get by role --> by visible button or tesxbox name
    await page.getByRole('button',{name:'Login'}).click()
    await page.waitForTimeout(3000)
    await page.close()
})

test.skip('get by link text', async function({page})

{
    await page.goto("https://www.google.com")
    await page.waitForTimeout(3000)
    await page.getByText('About').click()

    await page.waitForTimeout(3000)
    await page.close()
})

//CSS
test('get by CSS', async function({page})

{
    await page.goto("https://www.mycontactform.com")
    //tag nam and id //syntax: tagname#id
    await page.waitForTimeout(3000)
   // await page.locator("input#user").fill("hello")

    //tag name and class name //syntax: tagname.classname
     //await page.locator("input.btn_log").click()

 //tag name and attribute //syntax: tagname[attribue='value']
    // await page.locator("input[type='text']").fill("hello")
    await page.waitForTimeout(3000)

    //tag name , lass nme and attribute //syntax: tagname.classname[attribue='value']
    await page.locator("input.txt_log[type='text']").fill("hello")
    await page.close()
})