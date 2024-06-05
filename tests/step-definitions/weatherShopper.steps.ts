import { Given, When, Then } from '@wdio/cucumber-framework';
import * as assertions from '@wdio-ui/loginPage/loginPage.assertion';
import * as tasks from '@wdio-ui/loginPage/loginPage.tasks';

export let productsNamesArray
export let productsPricesArray
export let productsPricesWithoutUnit

Given("user is on the main page", async() => {
    await browser.url('/');
    await assertions.assertionOpenWebsite('Current temperature')
});
When("user chooses the products", async () => {
    await tasks.fetchTemperature()
    await tasks.extractTemperatureValue()
    await tasks.selectArticleByTemperature(19,34)
    // await tasks.login("tomsmith","SuperSecretPassword!");
});
Then("order should be successfully placed", async () => {
    // await assertions.assertionOnLoginPage("You logged into a secure area!\n×")
});
