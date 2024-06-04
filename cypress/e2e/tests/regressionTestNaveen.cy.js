import { loginPageNaveen } from "../../pages/loginPageNaveen"
const loginOBJ = new loginPageNaveen
import loginDataNaveen from '../../fixtures/loginDataNaveen.json'
describe('regression Naveen test',()=>{

    it('regression Naveen test', {tags:['@Smoke']}, ()=>{
    
        loginOBJ.openBrowser()
        loginOBJ.verifyNaveenLogo()
        loginOBJ.enterUserName(loginDataNaveen.userName)
        loginOBJ.enterPassword(loginDataNaveen.password)
        loginOBJ.selectLoginBtn()


    })

})
