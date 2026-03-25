import {test} from '@playwright/test';

test('file upload practice1', async ({ page }) => {
 await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");
 await page.getByRole('button', { name: 'Choose File' }).setInputFiles('files\\QPA.xlsx');
 //Multiple file upload
 await page.getByRole('button', { name: 'Choose File' }).setInputFiles(['files\\QPA.xlsx','files\\QPA2.xlsx']);
// removing the file from the list
    await page.getByRole('button', { name: 'Choose File' }).setInputFiles([]);


});

test('file upload practice2', async ({ page }) => { 

    await page.goto("https://the-internet.herokuapp.com/upload");
    const fileChooser = page.waitForEvent('filechooser');
    await page.getByRole('button', { name: 'Choose File' }).click();
    const fileChooserResolved = await fileChooser;
    await fileChooserResolved.setFiles('files\\QPA.xlsx');
});
