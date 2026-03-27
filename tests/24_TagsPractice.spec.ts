import {test}  from '@playwright/test';
//old way to add tags to the test cases
test('tags 1 @api', async ({ page }) => {
    console.log("This is the first test case");
});

test('tags 2 @ui', async ({ page }) => {
    console.log("This is the second test case");
}

);

test('tags 3 @smoke', async ({ page }) => {
    console.log("This is the third test case");
}
);
//new way to add tags to the test cases
test('tags 4',{tag:'@ui'}, async ({ page }) => {
    console.log("This is the fourth test case");    
});
// multiple tags can be added to the test case in old way
test('tags 5 @ui @api', async ({ page }) => {
    console.log("This is the fifth test case");    
}
);
// multiple tags can be added to the test case in new way
test('tags 6',{tag:['@api','@smoke']}, async ({ page }) => {
    console.log("This is the sixth test case");    
})
// to run the tests with specific tags, use the command: npx playwright test --grep @tagname
// to run the tests with multiple tags, use the command: npx playwright test --grep @tag1|@tag2
// to run the tests without specific tags, use the command: npx playwright test ./24_TagsPractice.spec.ts --grep-invert='@ui' 

//to run test having both api and smoke tags npx playwright test ./24_TagsPractice.spec.ts --grep "(?=.*@smoke) (?=.*@api)" 
