import * as locators from "@wdio-ui/checkoutPage/checkoutPage.locators";

import * as variables  from "../../../tests/step-definitions/weatherShopper.steps";

export async function assertionOfTotalPrice(){
    expect(locators.totalPrice).toHaveTextContaining(`${variables.sumOfPrices}`);
};

export async function assertionOnOrderSuccess(successText){
    await locators.successMessage.waitForDisplayed();
    await expect(locators.successMessage).toHaveText(successText);
};