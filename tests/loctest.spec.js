import {test} from '@playwright/test'

test('loctesting', async ({page})=>{
 await page.goto("https://demo.automationtesting.in/Register.html")
 await page.getByPlaceholder("First Name").fill("anjalai")
  await page.waitForTimeout(3000)
 await page.getByPlaceholder("Last Name").fill("balamurugan")
  await page.waitForTimeout(3000)
 await page.locator("//*[@id='basicBootstrapForm']/div[2]/div/textarea").fill("my address:chennai")
  await page.waitForTimeout(3000)
 await page.locator("//input[@type='email']").fill("anju@gmail.com")
  await page.waitForTimeout(3000)
 await page.locator("//input[@type='tel']").fill("9566245819")
  await page.waitForTimeout(3000)
 await page.getByText(" FeMale").click()
  await page.waitForTimeout(3000)
await page.getByText(" Cricket ").click()
 
 
 await page.waitForTimeout(3000)




})