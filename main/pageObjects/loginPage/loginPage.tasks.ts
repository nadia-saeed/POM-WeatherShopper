import * as locators from "@wdio-ui/loginPage/loginPage.locators";

// export async function login(name,password){
//     await locators.userName.setValue(name);
//     await locators.password.setValue(password);
//     await locators.submitBtn.click();
// }

// function 1
export async function fetchTemperature(){
    return (await locators.temperature.getText())
}
// function 2
export async function extractTemperatureValue(){
    let numericalTemperature
    let temperatureString = await fetchTemperature()
    let temperatureMatch= temperatureString.match(/(\d+)/)
    if(temperatureMatch){
        numericalTemperature = temperatureMatch[0]
    }
    return numericalTemperature
}
// function 3
export async function clickButton(btnLocator){
    await btnLocator.waitForDisplayed()
    await btnLocator.click()
}

// function 4
export async function selectArticleByTemperature(lowTemperature, highTemperature){
    let numericalTemperature = await extractTemperatureValue()
    if(numericalTemperature < lowTemperature){
        await clickButton(locators.moisturizerButton)
    }
    if(numericalTemperature > highTemperature){
        await clickButton(locators.sunscreenButton)
    }
}