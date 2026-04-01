import {test} from '@playwright/test';


test('Handling multiple env files', async ({page}) => {
    console.log('URL: ', process.env.APP_URL);
    console.log('USERNAME: ', process.env.APP_USERNAME);
    console.log('PASSWORD: ', process.env.APP_PASSWORD);
});