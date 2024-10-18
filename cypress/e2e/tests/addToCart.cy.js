 import { home } from "../../pages/homePage"
 const homePageObj = new home ()
 import testData  from "../../fixtures/testdata.json"

 

 describe('test automation',()=>{

    before( ()=>{

       //cy.logcmd()    
        cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/login')
        cy.get('#input-email').type("ferdaous_romdhane@hotmail.fr")
        cy.get('#input-password').type("ferdaous123")
        cy.get('input[value=Login]').click()


    })

    it('add to cart', ()=>{

        homePageObj.searchProduct(testData.product.productName)
        homePageObj.addToCart()
        homePageObj.verifySucessMessage()
        //homePageObj.verifySucessMessage().should("contain",testData.message.success).and("contain",testData.product.productName)

    })
 

})




