describe('Task 1: Scroll and Navigate', () => {
    it('should scroll, navigate through pages, and return home', async () => {
        // Launch app and wait
        await driver.pause(3000);

        // Scroll to the end
        await driver.execute('mobile: scroll', { direction: 'down' });

        // Click on "My lists"
        const myListsIcon = await $('~My lists'); //locator for "My lists"
        await myListsIcon.click();
        await driver.pause(3000); // Wait on "My lists" page

        // Click on "History"
        const historyIcon = await $('~History'); //locator for "History"
        await historyIcon.click();
        await driver.pause(3000); // Wait on "History" page

        // Click on "Nearby"
        const nearbyIcon = await $('~Nearby'); //locator for "Nearby"
        await nearbyIcon.click();
        await driver.pause(3000); // Wait on "Nearby" page

        // Return to home by clicking on "Browse"
        const browseIcon = await $('~Browse'); //locator for "Browse"
        await browseIcon.click();

        // Scroll back to the top
        await driver.execute('mobile: scroll', { direction: 'up' }); 
    });
});
