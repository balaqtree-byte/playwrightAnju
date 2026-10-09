import {test} from '@playwright/test'

let page 
test.beforeAll(async ({browser})=>{
page = await browser.newPage()
await page.goto("https://www.google.com")


})

test.afterAll(async({})=>{
    await page.waitForTimeout(2000)
    await page.close()
})

test.beforeEach(async({})=>{
    console.log(await page.title())
})

test.afterEach(async({})=>{
    console.log("after each")
})

test('clicking', async()=>{
    await page.waitForTimeout(3000)
    await page.getByText('About').click()
})