import {expect, test} from '@playwright/test';

test('auto retrying Assertions', async ({page}) => {
        await page.goto("https://www.saucedemo.com/");

        //Assertion
        //page level assertion
        await expect(page).toHaveURL("https://www.saucedemo.com/");
        await expect(page).toHaveTitle("Swag Labs");

        const username = page.getByTestId("username");
        let abcc = await username.isEditable();
        console.log(abcc);
        //Element level assertion
        await expect(username).toBeVisible();
        await expect(username).toBeEnabled();
        await expect(username).toHaveAttribute("placeholder", "Username");
        await username.fill("standard_user");
        await expect(username).toHaveValue("standard_user");
        await expect(username).toBeEditable();
        await expect(username).toHaveId("user-name");   
        await expect(username).toHaveClass(/input_error/);
        await expect(username).toHaveCount(1);

        //not assertion
        
        await expect(username).not.toBeDisabled();
        await expect(username).not.toBeHidden();
        await expect(username).not.toHaveAttribute("placeholder", "Password");
        await expect(username).not.toHaveValue("standard_user1");
        await expect(username).not.toHaveClass(/input_erro2r/);
        await expect(username).not.toHaveCount(0);

        //custom error message
       // await expect(username, "username field is not visible").toBeHidden();

        //non retrying assertion
        //await expect(username).toHaveValue("standard_user1", {timeout: 1000});
       // expect(1).toBe(2);
        
       //soft assertion
        await expect.soft(username).toHaveValue("standard_user1");
        console.log("soft assertion is failed but test is not failed");
})
