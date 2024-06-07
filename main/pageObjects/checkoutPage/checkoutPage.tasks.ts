import * as locators from "@wdio-ui/checkoutPage/checkoutPage.locators";
import * as credentials from "@wdio-config/applicationCredentials/credentials.json"
export async function clickToPay(){
    await locators.paymentButton.waitForDisplayed({timeout: 20000});
    await locators.paymentButton.waitForClickable({timeout: 20000});
    await locators.paymentButton.click();
};

export async function enterIframe(){
    let iframeSection = await $(locators.iframe);
    await iframeSection.waitForDisplayed({timeout: 20000});
    await browser.switchToFrame(iframeSection);
};

async function enterEachCredential(credentialName, credentialValue){
    await credentialName.waitForDisplayed({timeout: 40000});
    await credentialName.waitForClickable()
        for(const char of credentialValue){
            await credentialName.addValue(char);
    };
};

export async function enterCredentials(){
    await enterEachCredential(locators.email, credentials.qa.email);
    await enterEachCredential(locators.cardNumber, credentials.qa.cardNumber);
    await enterEachCredential(locators.expiryDate, credentials.qa.expiryDate);
    await enterEachCredential(locators.cvc, credentials.qa.cvc);
    await enterEachCredential(locators.billingZip, credentials.qa.billingZip);
};

export async function placeOrder(){
    await locators.submitButton.waitForDisplayed({timeout: 20000});
    await locators.submitButton.waitForClickable({timeout: 20000})
    await locators.submitButton.click();
};

export async function exitIframe(){
    await browser.switchToParentFrame();
};