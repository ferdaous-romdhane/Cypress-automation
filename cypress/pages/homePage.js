export class home{


webLocators={
   
search_bar:".form-control",
search_btn:".input-group-btn > .btn",
add_btn:'Add to Cart',
success_message:".alert"

}

searchProduct(productName){
    cy.get(this.webLocators.search_bar).type(productName)
    cy.get(this.webLocators.search_btn).click()


}

addToCart(){
    
     cy.contains(this.webLocators.add_btn).first().click()

}

verifySucessMessage(){
    return cy.get(this.webLocators.success_message)
    
}







}