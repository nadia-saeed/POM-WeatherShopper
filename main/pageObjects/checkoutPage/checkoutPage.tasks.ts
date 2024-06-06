import * as locators from "@wdio-ui/checkoutPage/checkoutPage.locators";

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
        for(const char of credentialValue){
            await credentialName.addValue(char);
    };
};

export async function enterCredentials(){
    await enterEachCredential(locators.email, 'nothing@gmail.com');
    await enterEachCredential(locators.cardNumber, '378282246310005');
    await enterEachCredential(locators.expiryDate, '0530');
    await enterEachCredential(locators.cvc, '1234');
    await enterEachCredential(locators.billingZip, '12345');
};

export async function placeOrder(){
    await locators.submitButton.waitForDisplayed({timeout: 20000});
    await locators.submitButton.waitForClickable({timeout: 20000})
    await locators.submitButton.click();
};

export async function exitIframe(){
    await browser.switchToParentFrame();
};