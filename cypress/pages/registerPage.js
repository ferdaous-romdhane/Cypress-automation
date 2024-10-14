

export class register{

weblocators={

firstName:'#input-firstname',
lastName:'#input-lastname',
email:'#input-email',
telephone:'#input-telephone',
password:'#input-password',
confirm:'#input-confirm',
chechCode:'[type="checkbox"]',
continue:'input[type="submit"]'

}
openURL(){
    cy.visit('https://naveenautomationlabs.com/opencart/index.php?route=account/register')
}

enterFirstName(firstName){

    cy.get(this.weblocators.firstName).type(firstName)
}

enterLasttName(lastName){

    cy.get(this.weblocators.lastName).type(lastName)
}

enterEmail(email){

    cy.get(this.weblocators.email).type(email)
}

e
entertelephone(telephone){

    cy.get(this.weblocators.telephone).type(telephone)
    
}

enterPassword(password){

    cy.get(this.weblocators.password).type(password)
    cy.get(this.weblocators.confirm).type(password)
}

checkCode(){

    cy.get(this.weblocators.chechCode).check()


}


clickoncontinue(){

    cy.get(this.weblocators.continue).click()


}
}