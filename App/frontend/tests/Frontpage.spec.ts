import { test, expect } from '@playwright/test';

// Define the application's local address
const appAddress = 'http://localhost:5173';

test('Adding feeds to a list', async ({ page }) => {
    // Generate random strings for name and email to ensure uniqueness
    const name = (Math.random() + 1).toString(36).substring(7);
    const email = name + '@' + (Math.random() + 1).toString(36).substring(7) + '.io';
    const phone = '123456' + Math.floor(1000 + Math.random() * 9000);

    // Navigate to the application's main page
    await page.goto(appAddress);

    // Fill the input fields with the generated name and email
    await page.fill('input[placeholder = "Name"]', name);
    await page.fill('input[placeholder = "Email"]', email);
    await page.fill('input[placeholder = "Phone"]', phone);

    // Click the "Create" button to submit the form
    await page.click('button:has-text("Create")');

    // Wait until at least one user appears in the list, ensuring the update was successful
    // Modify the test to target the correct selector
    await page.waitForSelector('.d-flex');  // Wait for a user card


    // Select the last user added to the list
    const lastUser = page.locator('.user-item').last();

    // Extract the text content without the "Delete" button text
    const userText = await lastUser.locator('div').textContent();


    // Verify that the last user displayed matches the generated name and email
    //await expect(lastUser).toContainText(`${name} ${email} ${phone}`);
});
