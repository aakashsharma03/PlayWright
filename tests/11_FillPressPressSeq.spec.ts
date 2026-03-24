import {test} from '@playwright/test';

test ('Fill Press Press Seq', async ({page}) => {
    await page.goto('https://ultimateqa.com/filling-out-forms/');
    const name = page.locator('#et_pb_contact_name_0');
    await name.fill('John');
    await page.locator("#et_pb_contact_message_0").pressSequentially('Hello how are you?',{delay:500});
})


test('Press method', async ({page}) => {
    await page.goto('http://amazon.in/');
    const searchInput = page.getByRole('searchbox', { name: 'Search Amazon.in' })
    await searchInput.pressSequentially('Playwright Book');
    await page.waitForTimeout(2000);
    await searchInput.press('Backspace');
    await searchInput.press('ArrowDown+ArrowDown+ArrowDown');
    await searchInput.press('Enter');
  
})