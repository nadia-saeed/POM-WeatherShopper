import * as locators from "@wdio-ui/productsPage/productsPage.locators";
import * as variables  from "../../../tests/step-definitions/weatherShopper.steps";
let leastPrice;
let index;
let productsPricesList;
let productsNamesList;
let unitlessProductPrices;
export let sumOfPrices;

async function fetchProductsNames(text){
    return $$(`//*[contains(text(),'${text}') or contains(text(),'${text.toLowerCase()}')]`);
};


async function fetchProductsPrices(text){
    return $$(`//*[contains(text(),'${text}') or contains(text(),'${text.toLowerCase()}')]/following-sibling::p`);
};


async function fetchProductsNamesList(text){
    let productsNames = await fetchProductsNames(text);
    for(let i = 0 ; i < productsNames.length ; i++){
        //  await browser.pause(2000)
          variables.productsNamesList.push(await productsNames[i].getText());
      };
      return variables.productsNamesList;
}

async function fetchProductsPricesList(text){
    let productsPrices = await fetchProductsPrices(text);
    for(let j = 0 ; j < productsPrices.length ; j++){
        variables.productsPricesList.push(await productsPrices[j].getText());
    };
    return variables.productsPricesList
}

async function fetchUnitlessPrices(text){
productsPricesList = await fetchProductsPricesList(text)
for(let k = 0 ; k < productsPricesList.length ; k++){
    let productsPricesArrayElement = productsPricesList[k];
    let splittedPrices:any = productsPricesArrayElement.split(' ');
    variables.unitlessProductPrices.push(splittedPrices[splittedPrices.length - 1]);
};
return variables.unitlessProductPrices
}

async function getProductsListAndPrices(text){
unitlessProductPrices = await fetchUnitlessPrices(text);
leastPrice = parseInt(unitlessProductPrices[0]);
    for(let z=1; z<unitlessProductPrices.length; z++){
        if(parseInt(unitlessProductPrices[z]) < leastPrice){
            leastPrice = parseInt(unitlessProductPrices[z]);
            index = z;
        };
    };

sumOfPrices += leastPrice
productsNamesList = await fetchProductsNamesList(text)
let productNameElement = productsNamesList[index];
    console.log(leastPrice, "LEASTPRICE")
    let articlesButton = `//button[@onclick="addToCart('${productNameElement}',${leastPrice})"]`;
    // console.log(await articlesButton.getText())
    await $(articlesButton).waitForDisplayed();
    await $(articlesButton).waitForClickable();
    await $(articlesButton).click();
}

async function emptyVariables(){
    productsNamesList = [];
    productsPricesList = [];
    unitlessProductPrices = [];
    index = 0;
}

export async function clickRelevantArticles(){
    let titleText = await locators.productsPageTitle.getText();
    if(titleText === 'Moisturizers'){
        await getProductsListAndPrices('Almond')
        await emptyVariables()
        await getProductsListAndPrices('Aloe')
        // await getProductsListAndPrices('Almond');
        // await getProductsListAndPrices('Aloe');
    }

    else if(titleText === 'Sunscreen'){
        await getProductsListAndPrices('SPF-30')
        await emptyVariables()
        await getProductsListAndPrices('SPF-50')
        // await getProductsListAndPrices('SPF-30');
        // await getProductsListAndPrices('SPF-50');
    };
};

export async function clickTheCart(){
    await locators.cart.waitForClickable();
    await locators.cart.click();
};