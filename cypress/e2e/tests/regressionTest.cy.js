import { loginPage } from "../../pages/loginPage"
const loginOBJ = new loginPage
import loginData from '../../fixtures/loginData.json'
describe('regression test',()=>{

    it('regression test', {tags:['@Smoke','@Regression']},()=>{
        loginOBJ.openBrowser()
        loginOBJ.verifyHRMLogo()
        loginOBJ.enterUserName(loginData.userName)
        loginOBJ.enterPassword(loginData.password)
        loginOBJ.selectLoginBtn()


    })

})
