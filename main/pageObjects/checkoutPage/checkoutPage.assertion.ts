import * as locators from "@wdio-ui/checkoutPage/checkoutPage.locators";
import * as variables  from "../../../tests/step-definitions/weatherShopper.steps";
import * as productsTasksVariables from '@wdio-ui/productsPage/productsPage.tasks';
export async function assertionOfTotalPrice(){
    expect(locators.totalPrice).toHaveTextContaining(`${productsTasksVariables.sumOfPrices}`);
};

export async function assertionOnOrderSuccess(successText){
    await locators.successMessage.waitForDisplayed();
    await expect(locators.successMessage).toHaveText(successText);
};