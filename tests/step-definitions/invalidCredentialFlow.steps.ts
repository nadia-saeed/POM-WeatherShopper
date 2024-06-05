import { Given, When, Then } from '@wdio/cucumber-framework';
import * as tasks from '@wdio-ui/loginPage/loginPage.tasks';
import * as assertions from '@wdio-ui/loginPage/loginPage.assertion';

Given("I am on login page to verify negative test case", async () => {
    await browser.url(`/login`);
});
When("I login with incorrect usernam and password", async () => {
    await tasks.login("foobar","barfoo");
});
Then("I should see a flash mesage alerting user about wrong user and password", async () => {
    await assertions.assertionOnLoginPage('Your username is invalid!\n×');
});