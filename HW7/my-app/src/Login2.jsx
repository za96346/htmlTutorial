import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
/**
 * --------------------------
    ### 設計登入介面

    需求:
    1. 帳號要是email
    2. 密碼必須有英數字, 並且長度大於8
    3. 驗證無誤後需跳轉到其他頁面 （ 隨意頁面 ）
    ----------------------------------------
    input 欄位包含以下
    1. 帳號
    2. 密碼
 */

const account = "a12345@gmail.com"
const password = "a12345"

const Login2 = () => {
    const [login, setLogin] = useState({
        account: '',
        password: '',
    })

    console.log("login", login)
    return (
        <>
            <div>
                <span>
                    account 
                </span>
                <input
                    value={login.account}
                    className="Type your account"
                    onChange={(e) => {
                        console.log(e)
                        setLogin((prev) => ({
                            ...prev,
                            account: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>
                    password
                </span>
                <input
                    value={login.password}
                    className="Type your password"
                    onChange={(e) => {
                        console.log(e)
                        setLogin((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }}
                />
            </div>
            <button
                onClick={() => {
                    if(login.account===account && login.password===password){
                        window.location.href="https://www.youtube.com/watch?v=q_X4amTktHU&list=PLRjgE3pAnTIKu2Mr1kiCanx_vnMFD97Ac&index=20"
                    }else{
                        alert("登入失敗")
                    }
                }}
            >
                登入
            </button>
        </>
    )
}
export default Login2