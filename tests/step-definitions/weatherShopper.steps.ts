import { Given, When, Then } from '@wdio/cucumber-framework';
import * as loginAssertions from '@wdio-ui/loginPage/loginPage.assertion';
import * as checkoutAssertions from '@wdio-ui/checkoutPage/checkoutPage.assertion';
import * as loginTasks from '@wdio-ui/loginPage/loginPage.tasks';
import * as productsTasks from '@wdio-ui/productsPage/productsPage.tasks';
import * as checkoutTasks from '@wdio-ui/checkoutPage/checkoutPage.tasks';

export let productsNamesList;
export let productsPricesList;
export let unitlessProductPrices;
export let sumOfPrices;



Given("user is on the main page", async() => {
    await browser.url('/');
    await loginAssertions.verifyWebsite('Current temperature');
});

When("user chooses the products", async () => {
    await loginTasks.fetchTemperature();
    await loginTasks.extractTemperatureValue();
    await loginTasks.selectProductsBasedOnTemperature(19,34);
    await productsTasks.clickRelevantArticles();
    await productsTasks.clickTheCart();
    await checkoutAssertions.assertionOfTotalPrice();
    await checkoutTasks.clickToPay();
    await checkoutTasks.enterIframe();
    await checkoutTasks.enterCredentials();
});

Then("order should be successfully placed", async () => {
    await checkoutTasks.placeOrder();
    await checkoutTasks.exitIframe();
    await checkoutAssertions.assertionOnOrderSuccess('PAYMENT SUCCESS');
});
