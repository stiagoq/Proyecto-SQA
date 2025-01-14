import { expect, Locator, Page } from '@playwright/test';

export class ShoppingCartPage{
    readonly textPriceOfProduct : Locator
    readonly inputValueQuantity : Locator
    readonly page : Page

    constructor(page : Page){
        this.textPriceOfProduct = page.locator("//div[contains(@class,'price-wrapper')]")
        this.inputValueQuantity = page.locator("//input[@class='comet-v2-input-number-input']")
    }

    async checkPriceOfProduct(price: string){
        await expect(this.textPriceOfProduct).toContainText(price)
    }

    async checkQuantity(value: string){
        let inputValue = await this.inputValueQuantity.inputValue()
        await expect(inputValue).toContainEqual(value)
    }
}