import {test} from '@playwright/test';

test('first TC', { tag:'@UI', annotation :
    {   type:'issue', 
        description:'This is the issue annotation for the first test case'
    }
    } 
,async ({ page }) => {
    console.log("This is the first test case");
});

test('second TC', { annotation :
    [
        {type:'issue', description:'This is the issue annotation for the second test case'},
        {type:'testManagement', description:'This is the test management annotation for the second test case'}
    ]
    } ,async ({ page }) => {
    console.log("This is the second test case");
});

test.describe('This is the describe block', {annotation:{type:'describe',description:'This is the describe annotation'}} ,() => {
    test('Practice 1', async ({ page }) => {
        console.log("This is the first test case in describe block");
    })
    test('Practice 2', async ({ page }) => {
        console.log("This is the second test case in describe block");
    })
    test('Practice 3', async ({ page }) => {
        console.log("This is the third test case in describe block");
    })
});