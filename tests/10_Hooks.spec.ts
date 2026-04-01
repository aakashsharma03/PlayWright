import {test} from '@playwright/test';

test.beforeEach('before each test', async () => {
    console.log('before each test') ;
})


test.afterEach('after each test', async () => {
    console.log('after each test') ;
});

test.beforeAll('before all tests', async () => {
    console.log('before all tests') ;
});

test.afterAll('after all tests', async () => {
    console.log('after all tests') ;
});

test('Practice test 1', async ({page}) => {

    console.log('starting test 1') ;
    
    console.log('ending test 1') ;
});

test('Practice test 2', async ({page}) => {
    console.log('starting test 2') ;
   
    console.log('ending test 2') ;
}
);

test('Practice test 3', async ({page}) => {
    console.log('starting test 3') ;
  
    console.log('ending test 3') ;
}
);  

test.describe('Hooks demo', () => {
    
    test('Practice test 4', async ({page}) => {
        console.log('starting test 4') ;
      
        console.log('ending test 4') ;
    })

    test('Practice test 5', async ({page}) => {
        console.log('starting test 5') ;
     
        console.log('ending test 5') ;  
        });


})