import {test} from '@playwright/test';

test( 'drag and drop', async ( { page } ) => {
    // // Approch1 : using keyboard actions
    // await page.goto("https://demoqa.com/droppable");
    // await page.waitForLoadState('networkidle');
    // await page.getByText('Drag Me').first().hover();
    // await page.mouse.down();
    // await page.getByText('Drop Here').first().hover();
    // await page.mouse.up();

    // Approch2 : using drag and drop method
    await page.goto("https://demoqa.com/droppable");
    await page.waitForLoadState('networkidle');
    await page.getByText('Drag Me').first().dragTo(page.getByText('Drop Here').first());
});