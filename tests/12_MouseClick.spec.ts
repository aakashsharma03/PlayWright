import {test} from '@playwright/test';

test('Mouse Click', async ({page}) => {
    await page.goto('https://www.saucedemo.com/');
    await page.click('#login-button');
})
//double click
test('double click', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
    await page.getByRole('button', { name: 'Add Element' }).dblclick();
})

//right click

test('right click' , async({page}) => {

    await page.goto('https://swisnl.github.io/jQuery-contextMenu/demo.html');
    await page.getByText('right click me', { exact: true }).click({button:'right'});
}
)

//dispatch element .click()

    test('programatic click', async ({page})=>
        {
             await page.goto('https://www.saucedemo.com/');
             await page.locator('#login-button').dispatchEvent('click');
        })


