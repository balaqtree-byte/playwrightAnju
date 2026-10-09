import {test} from '@playwright/test'

//test('description',async function ({}){.....})

//to exeute code  (npx playwright test firstt.spec.js)
//with report (npx playwright test firstt.spec.js --reporter=html)
//to view report (npx playwright show-report)

//annotatons
//skip--> skip specific test (outside)
//skip with condition --> mention inside body of the tests //test.skip() (inside body)
//only --> to run specific test (outside)
//fail--> expecting tst case to be failed (inside body )
//fixme --> same as skip --(outside)
//slow-->time delay default time 90sec (inside body)


test('first case @anju', async function({})
{
    //test.fail()
console.log("first case")
})
test('middle case @bala', async function({})
{
    //test.fail()
console.log("middle case")
})
test('last case @anju', async function({})
{
    //test.fail()
console.log("last case")
})





//to run grouping test cases
test.describe('release1',()=>{
test('third case', async function({}){
    
    console.log("third case")
})
})

test.describe('release2',()=>{
test('second case', async function({}){
    test.slow()
    console.log("second case")
})
})

//to run specific group: npx playwright test -g "group name"
//to run using tag : npx playwright test --grep '@tagname' (using the tag run group of test case)
//to run exclude the tag name : npx playwright test --grep-invert '@tagname'
