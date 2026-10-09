import {test} from '@playwright/test'

test('fileupload', async ({page})=>{
    
await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php")
await page.locator("#filesToUpload").setInputFiles(["c:\\Users\\LENOVO\\Pictures\\Screenshots\\Screenshot (1).png", "c:\\Users\\LENOVO\\Pictures\\Screenshots\\Screenshot (1).png"])
await page.waitForTimeout(3000)
await page.close()
})