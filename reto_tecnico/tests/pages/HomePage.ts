import { Locator, Page } from '@playwright/test';

export class HomePage{
    readonly inputSearch : Locator
    readonly buttonSeach : Locator
    readonly textPriceProduct : Locator
    readonly numberIncreaseButton :  Locator
    readonly addShoppingCartButton : Locator
    readonly shoppingCartButton : Locator
    readonly closeModalButton : Locator
    readonly inputValueQuantity : Locator
    readonly page : Page
    public listAddButtons: any

    constructor(page : Page) {
        this.inputSearch = page.locator("//input[@name='searchWords']")
        this.buttonSeach = page.locator("//input[contains(@class,'submit')]")
        this.textPriceProduct = page.locator("//div[@class='comet-v2-modal-body']//div[contains(@class,'hasDiscount')]//span[contains(text(),'COP') and contains(@class,'currentPriceText')]")
        this.addShoppingCartButton = page.locator("//button[contains(@class,'add-to-cart')]")
        this.numberIncreaseButton = page.locator("//div[contains(@class,'number-btn-increase')]/span")
        this.shoppingCartButton = page.locator("//div[contains(@class,'shop-cart--menuItem')]/a/span")
        this.closeModalButton = page.locator("//button[@class='comet-v2-modal-close']")
        this.listAddButtons = new Array()
        this.inputValueQuantity = page.locator("//input[@class='comet-v2-input-number-input']")
        this.page = page
    }

    async searchProduct(){
        await this.inputSearch.fill("iphone 16")
        await this.buttonSeach.click()
    }

    async selectProduct(){
         this.listAddButtons = await this.page.$$("//div[contains(@class,'multi--outWrapper') and not(@style='display: none !important;')]//div[contains(@class,'multi--shopCart')]/div/span")
         await this.listAddButtons[Math.floor(Math.random()* this.listAddButtons.length)].click()
    }

    async returnTextPrice(){
        const textOfPrice = await this.textPriceProduct.innerText()
        const inputValueQuantity = await this.inputValueQuantity.inputValue()
        let arrayInfoProduct = new Array()
        arrayInfoProduct.push(textOfPrice, inputValueQuantity)
        return  arrayInfoProduct
    }

    async clickOnNumberIncreaseButton(){
        for(let i = 0; i<2; i++){
            await this.numberIncreaseButton.click()
        }
    }

    async clickOnAddShpingCartButton(){
        await this.addShoppingCartButton.click()
    }

    async clickOnShoppinCartButton(){
        await this.shoppingCartButton.click()
    }
}