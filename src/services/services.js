import axios from "axios"
import { API } from "../config/api_config"

// ####### 로그인 처리 API

const LoginExe = async (values) => {

    const data = {
        username : values.username,
        password : values.password,
        grant_type : 'password',
        client_id : 'myclient',
        client_secret : 'EgUcJEaQ9JEC1RP3yefGxrYOO3SsbvmZ',

    }
    const headers = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }    
    const response = await axios.post(API.LOGIN, data, headers);
    // console.log("성공.",response.data )
    sessionStorage.setItem("access_token", JSON.stringify(response.data));
    return response.data;
}     

const logOut = () => {
    localStorage.removeItem('user')
    alert('로그아웃 되었습니다.')
  }


const AuthService = {
    LoginExe,
    logOut,
}
export default AuthService;