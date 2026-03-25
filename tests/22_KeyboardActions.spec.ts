import { test, expect } from '@playwright/test';
import { text } from 'node:stream/consumers';

test( 'keyboard actions', async ( { page } ) => {
    await page.goto("https://testpages.eviltester.com/pages/forms/html-form/");
    await page.keyboard.press('PageDown');
    const textArea =  page.getByText('Comments...');
    await textArea.press('Control+a');
    await textArea.press('Backspace');
    await textArea.press("A+b+C");
});