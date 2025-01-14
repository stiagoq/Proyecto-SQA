import { test } from "@playwright/test";
import { HomePage } from "./pages/HomePage";
import { ShoppingCartPage } from "./pages/ShoppingCartPage";

let context : any
let page : any 
let homePage : any
let shoppingCartPage : any

test.beforeEach(async ({ browser }) => {
    context = await browser.newContext();
    page = await context.newPage();
    await page.goto("https://es.aliexpress.com/");
    homePage = new HomePage(page)
    shoppingCartPage = new ShoppingCartPage(page)
});

test.afterEach(async ({browser}) =>{
    browser.close()
})

test("Add product to shopping cart",async () => {
    await homePage.searchProduct()
    await homePage.selectProduct()
    await homePage.clickOnNumberIncreaseButton()
    const infoProduct = await homePage.returnTextPrice()
    await homePage.clickOnAddShpingCartButton()
    await homePage.clickOnShoppinCartButton()

    await shoppingCartPage.checkPriceOfProduct(infoProduct[0], infoProduct[1])

})