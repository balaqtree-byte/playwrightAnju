import {test,expect} from '@playwright/test'

test('hard assert', async ({page})=>{
await page.goto("https://www.google.com")
await page.waitForTimeout(2000)
await expect (page).toHaveTitle("google")
console.log("success assert")
})

test.skip('soft assert', async ({page})=>{
await page.goto("https://www.google.com")
await page.waitForTimeout(2000)
await expect.soft (page).toHaveTitle("Google")
console.log("success assert")
})