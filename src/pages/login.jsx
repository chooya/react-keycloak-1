import React , { useState }from 'react';
// import { M_URL } from "../../config"
import { useNavigate } from "react-router-dom"
import AuthService from "../services/services"
import Validator from '../services/user.form.validator';

export default function Login() {

  const [values, setValues] = useState({})
  const navigate = useNavigate();

  const value = {
    grant_type: 'password',
    client_id: 'myclient',
    client_secret: 'EgUcJEaQ9JEC1RP3yefGxrYOO3SsbvmZ',
  }

  const handleChange = async (e) => {
    const nextValues = {
        ...values,
        [e.target.name]: e.target.value
    }
    setValues(nextValues)
    }


  const handleSubmit = (e) => {
    e.preventDefault()
    if (Validator(values)) {

        // setValues([...values, value ])

        console.log(values)

        AuthService.LoginExe(values).then(
            (response) => {
                navigate('/')
                window.location.reload()            
                // navigate("/")
            }, (error) => {
                console.log(error)
            }
        )
    }
}

    return(
<>
    <div className="loginContainer">
        <h1 className="loginTitle">로그인</h1>
    </div>
    <div className='loginContainer'>

        <form className='editFormContainer' onSubmit={handleSubmit}>
            <div className="input-wrap">
                <div className="editInputBox">
                    <label>ID</label>
                    <div className="input-area">
                        <div className="input-box">
                            <input type="text" name="username"
                                placeholder="아이디"
                                className="input-css"
                                onChange={handleChange}
                            />
                        </div></div>
                </div>
                <div className="editInputBox">
                    <label>Password</label>
                    <div className="input-area">
                        <div className="input-box">
                            <input type="password" name="password"
                                placeholder="비밀번호"
                                className="input-css"
                                onChange={handleChange}
                            />
                        </div></div>
                </div>
                <div className="editInputBox">
                     <button type="submit" className="adminButton admin-button-type admin-button-text" id="admin-button">로 그 인</button>
                 </div>                
            </div>
        </form>
    </div>
</>

    )

}
