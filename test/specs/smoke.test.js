describe('Load APK and Verify App Launch', () => {
    it('should load the app and verify the app launches correctly', async () => {
        // Wait for the app to launch
        await driver.pause(5000); // Wait 5 seconds to ensure the app is loaded

        // Verify the app is launched by checking the current activity
        const currentActivity = await driver.getCurrentActivity();
        console.log('Current Activity:', currentActivity);

        // Validate if the app's activity matches the expected one
        expect(currentActivity).toContain('MainActivity'); // Replace 'MainActivity' with the actual activity name if known
    });
});
