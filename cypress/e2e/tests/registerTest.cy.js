
import { register } from "../../pages/registerPage"
 const registerObj = new register()
import registerData from "../../fixtures/registerData.json"


describe('regestration', ()=>{

    it('register test', ()=>{
    registerObj.openURL()
    registerObj.enterFirstName(registerData.firstName)
    registerObj.enterLasttName(registerData.lastName)
    registerObj.enterEmail(registerData.email)
    registerObj.entertelephone(registerData.telephone)
    registerObj.enterPassword(registerData.password)
    registerObj.checkCode()
    registerObj.clickoncontinue()

})




})