import * as locators from "@wdio-ui/loginPage/loginPage.locators";

export async function fetchTemperature(){
    return (await locators.temperature.getText());
};

export async function extractTemperatureValue(){
    let numericalTemperature;
    let temperatureString = await fetchTemperature();
    let temperatureMatch= temperatureString.match(/(\d+)/);
        if(temperatureMatch){
            numericalTemperature = temperatureMatch[0];
        };
    return numericalTemperature;
};

export async function clickButton(btnLocator){
    await btnLocator.waitForDisplayed();
    await btnLocator.waitForClickable();
    await btnLocator.click();
};


export async function selectProductsBasedOnTemperature(lowTemperature, highTemperature){
    let numericalTemperature = await extractTemperatureValue();
        if(numericalTemperature < lowTemperature){
            await clickButton(locators.moisturizerButton);
    }
        else if(numericalTemperature > highTemperature){
            await clickButton(locators.sunscreenButton);
    };
};