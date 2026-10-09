import {test,expect} from '@playwright/test'

test.skip('alert with ok', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('alert')
        expect(dialog.message()).toContain("I am an alert box!")
        await page.waitForTimeout(3000)
        await dialog.accept()
    })
    //clicking on alert
    await page.locator("#alertBtn").click()
})


test.skip('aconfirm with ok and cancel ', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain("Press a button!")
        await page.waitForTimeout(3000)
        await dialog.accept()// dismiss 
    })
    //clicking on confirm box 
    await page.locator("#confirmBtn").click()
})

test('prompt box ', async function({page})
{
    await page.goto("https://testautomationpractice.blogspot.com/")
    //dialog window handler
    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('prompt')
        expect(dialog.message()).toContain("Please enter your name:")
        expect(dialog.defaultValue()).toContain("Harry Potter")
        await page.waitForTimeout(3000)
        await dialog.accept("Anju")
        await page.waitForTimeout(3000)
    })
    //clicking on prompt box  
    await page.locator("#promptBtn").click()
})