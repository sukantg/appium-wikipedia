describe('Task 1: Scroll and Navigate', () => {
    it('should scroll, navigate through pages, and return home', async () => {
        // Launch app and wait
        await driver.pause(3000);

        // Scroll to the end
        await driver.execute('mobile: scroll', { direction: 'down' });

        // Click on "My lists"
        const myListsIcon = await $('~My lists'); // Replace with locator for "My lists"
        await myListsIcon.click();
        await driver.pause(3000); // Wait on "My lists" page

        // Click on "History"
        const historyIcon = await $('~History'); // Replace with locator for "History"
        await historyIcon.click();
        await driver.pause(3000); // Wait on "History" page

        // Click on "Nearby"
        const nearbyIcon = await $('~Nearby'); // Replace with locator for "Nearby"
        await nearbyIcon.click();
        await driver.pause(3000); // Wait on "Nearby" page

        // Return to home by clicking on "Browse"
        const browseIcon = await $('~Browse'); // Replace with locator for "Browse"
        await browseIcon.click();

        // Scroll back to the top
        await driver.execute('mobile: scroll', { direction: 'up' }); 
    });
});
