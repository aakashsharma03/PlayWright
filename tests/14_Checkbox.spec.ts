import {test,expect} from '@playwright/test';

test('Checkbox', async ({page}) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    const automationTestingCheckbox = page.locator(".Automation");
    await automationTestingCheckbox.check();
    await expect(automationTestingCheckbox).toBeChecked();
    if(await automationTestingCheckbox.isChecked()){
    console.log("Checkbox is checked");
    await automationTestingCheckbox.uncheck();
    await expect(automationTestingCheckbox).not.toBeChecked();
    }
})