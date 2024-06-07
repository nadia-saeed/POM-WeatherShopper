import * as locators from "@wdio-ui/mainPage/mainPage.locators";
// import assert from "soft-assert"

export async function verifyWebsite(text){
    expect(locators.websiteTitle).toHaveText(text)
}