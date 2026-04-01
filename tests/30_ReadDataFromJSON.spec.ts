import { test,expect } from "@playwright/test"; 

import data1 from '../testdata/testdata1.json';

test.beforeEach(async ({ page }) => {

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill(data1.userName);
  await page.getByRole('textbox', { name: 'Password' }).fill(data1.password);
  await page.getByRole('button', { name: 'Login' }).click();
  await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  await expect(page.getByRole('heading')).toContainText('Dashboard');
});


test('Verify timesheet card', async ({ page }) => {

  await expect(page.getByText('Quick Launch')).toBeVisible();
  await page.getByRole('button', { name: 'Timesheets' }).click();
  await expect(page.getByLabel('Topbar Menu').getByRole('list')).toContainText('Timesheets');

});

test('Add employee to recruitment', async ({ page }) => {
  await page.getByRole('link', { name: 'Recruitment' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data1.firstName);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data1.lastName);
  await page.getByRole('textbox', { name: 'Type here' }).first().fill(data1.emailId);
  await page.getByRole('button', { name: 'Save' }).click();
  await page.waitForLoadState('networkidle');
  await expect(page.getByRole('heading', { name: 'Application Stage' })).toBeVisible();

});