import * as locators from "@wdio-ui/productsPage/productsPage.locators";
import * as variables  from "../../../tests/step-definitions/weatherShopper.steps";
export async function login(name,password){
    await locators.userName.setValue(name);
    await locators.password.setValue(password);
    await locators.submitBtn.click();
}


// function 1
export async function fetchProductsNames(text){
    return $$(`//*[contains(text(),'${text}') or contains(text(),'${text.toLowerCase()}')]`)
}

// function 2
export async function fetchProductsPrices(text){
    return $$(`//*[contains(text(),'${text}') or contains(text(),'${text.toLowerCase()}')]/following-sibling::p`)
}

// function 3
export async function getProductsListAndPrices(text){
    let productsNames = await fetchProductsNames(text)
    let productsPrices = await fetchProductsPrices(text)

    for(let i=0; i<productsNames.length; i++){
        variables.productsNamesArray.push(await productsNames[i].getText())
    };

    for(let j=0; j<productsPrices.length; j++){
        variables.productsPricesArray.push(await productsPrices[j].getText())
    };
    
    for(let k=0; k<variables.productsPricesArray.length; k++){
        let productsPricesArrayElement = variables.productsPricesArray[k];
        let splittedPrices = productsPricesArrayElement.split(' ')
        variables.productsPricesWithoutUnit.push(splittedPrices[length-1])
    };
    // To be contd..
}


export async function abc(){
    let titleText = await locators.productsPageTitle.getText()
    if(titleText === 'Sunscreen'){
        //do this
    }
    else if(titleText === 'Moisturizers'){
        // do this
    }
}
