describe('Task 3: Disable Settings Options', () => {
    it('should disable all settings and return to home page', async () => {
        // Launch app and wait
        await driver.pause(3000);

        // Locate and click on the settings icon
        const settingsIcon = await $('~Settings');
        await settingsIcon.click();

        // Disable all options (toggle switches)
        const allSwitches = await $$('~Settings Toggle'); // Replace with locator for toggle
        for (let toggle of allSwitches) {
            const isEnabled = await toggle.getAttribute('checked');
            if (isEnabled === 'true') {
                await toggle.click(); // Turn off if it's enabled
            }
        }

        // Return to the home page
        const backButton = await $('~Back'); // Replace with locator for the back button
        await backButton.click();
    });
});
