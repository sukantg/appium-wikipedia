describe('Task 2: Search and Assert Results', () => {
    it('should search for "New York" and validate results', async () => {
        // Launch app and wait
        await driver.pause(3000);

        // Locate and interact with the search bar
        const searchBar = await $('~Search');
        await searchBar.click();
        await searchBar.setValue('New York');
        await driver.pause(3000); // Wait for results to load

        // Assert that the search bar is expanded and results are displayed
        const searchResults = await $('~Search Results'); //search locator
        await expect(searchResults).toBeDisplayed();

        // Double-click on the close search button to clear and return home
        const closeSearchButton = await $('~Close Search'); // close locator
        await closeSearchButton.click();
        await closeSearchButton.click();
    });
});
