import { Given, When, Then } from '@wdio/cucumber-framework';
import * as assertions from '@wdio-ui/loginPage/loginPage.assertion';
import * as tasks from '@wdio-ui/loginPage/loginPage.tasks';

Given("I am on the login page", async() => {
    await browser.url('/');
});
When("I login with username and password", async () => {
    await tasks.login("tomsmith","SuperSecretPassword!");
});
Then("I should see a flash message saying message", async () => {
    await assertions.assertionOnLoginPage("You logged into a secure area!\n×")
});
