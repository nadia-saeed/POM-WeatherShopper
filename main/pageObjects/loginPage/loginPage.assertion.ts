import * as locators from "@wdio-ui/loginPage/loginPage.locators";
import assert from "soft-assert"

// export async function assertionOnLoginPage(message){
//     await (locators.flash).waitForDisplayed({timeout:10000})
//     // eslint-disable-next-line prefer-const
//     let expectedText=await locators.flash.getText()
//     await console.log(expectedText)
//     await assert.softAssert(expectedText,message,'Error message not matched',[])
//     assert.softAssertAll()
// }

export async function assertionOpenWebsite(text){
    expect(locators.websiteTitle).toHaveText(text)
}