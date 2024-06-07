import * as locators from "@wdio-ui/productsPage/productsPage.locators";
import * as variables  from "../../../tests/step-definitions/weatherShopper.steps";
let leastPrice;
let index;

async function fetchProductsNames(text){
    return $$(`//*[contains(text(),'${text}') or contains(text(),'${text.toLowerCase()}')]`);
};

async function fetchProductsPrices(text){
    return $$(`//*[contains(text(),'${text}') or contains(text(),'${text.toLowerCase()}')]/following-sibling::p`);
};

async function getProductsListAndPrices(text){
    let productsNames = await fetchProductsNames(text);
    let productsPrices = await fetchProductsPrices(text);

    for(let i = 0 ; i < productsNames.length ; i++){
        await browser.pause(2000)
        variables.productsNamesList.push(await productsNames[i].getText());
    };

    for(let j = 0 ; j < productsPrices.length ; j++){
        variables.productsPricesList.push(await productsPrices[j].getText());
    };
    
    for(let k = 0 ; k < variables.productsPricesList.length ; k++){
        let productsPricesArrayElement = variables.productsPricesList[k];
        let splittedPrices = productsPricesArrayElement.split(' ');
        variables.unitlessProductPrices.push(splittedPrices[splittedPrices.length - 1]);
    };

    leastPrice = parseInt(variables.unitlessProductPrices[0]);
    for(let z=1; z<variables.unitlessProductPrices.length; z++){
        if(parseInt(variables.unitlessProductPrices[z]) < leastPrice){
            leastPrice = variables.unitlessProductPrices[z];
            index = z;
        };
    };

    await computeTotalPrice(variables.sumOfPrices);
    await clickAddToCartButton();
        variables.productsNamesList;
        variables.productsPricesList;
        variables.unitlessProductPrices;
        index;
};

async function computeTotalPrice(sumOfPrices){
    sumOfPrices += parseInt(leastPrice)
};

async function clickAddToCartButton(){
    let productNameElement = variables.productsNamesList[index];
    let articlesButton = `//button[@onclick="addToCart('${productNameElement}',${leastPrice})"]`;
    await $(articlesButton).waitForDisplayed();
    await $(articlesButton).waitForClicable();
    await $(articlesButton).click();
};


export async function clickRelevantArticles(){
    let titleText = await locators.productsPageTitle.getText();
    if(titleText === 'Moisturizers'){
        await getProductsListAndPrices('Almond');
        await getProductsListAndPrices('Aloe');
    }

    else if(titleText === 'Sunscreen'){
        await getProductsListAndPrices('SPF-30');
        await getProductsListAndPrices('SPF-50');
    };
};

export async function clickTheCart(){
    await locators.cart.waitForClickable();
    await locators.cart.click();
};