import {test} from '@playwright/test'

test.skip('listbox', async function({page})
{
    
    await page.goto("https://www.letskodeit.com/practice")
//await page.locator("#multiple-select-example").selectOption([{index:0},{index:1},{index:2}])//benz  : index 
//await page.locator("#multiple-select-example").selectOption(["apple","orange","peach"])//value
await page.locator("#multiple-select-example").selectOption(["Apple","Orange","Peach"])
await page.waitForTimeout(2000)
    await page.close()
})

//mouse over

test.skip('mouseover', async function({page})
{
    
    await page.goto("https://www.mycontactform.com/")
//double click
   // await page.getByRole('button',{name:'Login'}).dblclick()

    //right click
await page.getByRole('button',{name:'Login'}).click({'button':'right'})
await page.waitForTimeout(2000)
    await page.close()
})

test.skip ('mouse overing',async function({page}){

    await page.goto("https://www.google.com/")
    let elem = await page.getByText('About')
    await page.waitForTimeout(2000)
    elem.hover()
     await page.waitForTimeout(2000)
     elem.click()
     await page.waitForTimeout(2000)


})

//drag and drop 

test('draganddrop', async function({page}){
    await page.goto("https://jqueryui.com/droppable/")
    let frame = await page.frameLocator("//*[@id='content']/iframe")
    await page.waitForTimeout(2000)
    let drag = frame.locator("div#draggable")
    await page.waitForTimeout(2000)
    let drop = drag.dragTo(drag)
    await page.waitForTimeout(5000)
    await page.close()

})