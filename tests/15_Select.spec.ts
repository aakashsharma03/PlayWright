import {test,expect} from '@playwright/test';

test('Select', async ({page}) => {
    await page.goto('https://artoftesting.com/samplesiteforselenium');
    const manualTestingSelect = page.locator("#testingDropdown");
    // value attribute of the option is "Manual Testing"
    await manualTestingSelect.selectOption("Manual");
    await expect(manualTestingSelect).toHaveValue("Manual");
    //value attribute of the option is "Performance Testing"
    await manualTestingSelect.selectOption({label: "Performance Testing"});
        // label of the option is "Automation Testing"
    //await manualTestingSelect.selectOption("Performance Testing");
    await expect(manualTestingSelect).toHaveValue("Performance");
    // index of the option is 0
    await manualTestingSelect.selectOption({index: 3}); 
    await expect(manualTestingSelect).toHaveValue("Database");
})


test('Select using label', async ({page}) => {
    await page.goto ('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_option_label');
    const selectBox = page.locator('iframe[name="iframeResult"]').contentFrame().getByLabel('Choose a car:');
    await selectBox.selectOption("Mercedes");
    //await expect(selectBox).toHaveValue("Mercedes");
    await selectBox.selectOption({label: "Audi"});
})  