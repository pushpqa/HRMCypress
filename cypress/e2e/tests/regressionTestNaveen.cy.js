import { loginPageNaveen } from "../../pages/loginPageNaveen"
const loginOBJ = new loginPageNaveen
import loginDataNaveen from '../../fixtures/loginDataNaveen.json'
describe('login',()=>{

    it('login', ()=>{
    
        loginOBJ.openBrowser()
        loginOBJ.verifyNaveenLogo()
        loginOBJ.enterUserName(loginDataNaveen.userName)
        loginOBJ.enterPassword(loginDataNaveen.password)
        loginOBJ.selectLoginBtn()


    })

})
