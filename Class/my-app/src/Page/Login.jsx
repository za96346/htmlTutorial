import React, { useState } from 'react';


// 組件, component
const Login = () => {
    const [form, setForm] = useState({
        userName: '333',
        password: '666'
    })
    console.log(form)

    const formValidation = ()=>{
        if (form.userName.length > 8 && form.password.length > 8){
            alert("表單校驗成功")
            // window.location.href = "https://google.com"
        } else{
            alert("表單校驗失敗")
        }
    }
    return (
        <>
            <div className="login">
                <h2>
                    Login
                </h2>
                <div className="input_block">
                    <span>
                        Username
                    </span>
                    <div>
                        {/* <img src="../img/user.png"/> */}
                        <input
                            value={form.userName}
                            className="input"
                            placeholder="Type your username"
                            onChange={(e) => {
                                console.log(e)
                                setForm((prev) => ({
                                    ...prev,
                                    userName: e.target.value
                                }))
                            }}
                        />
                    </div>
                </div>
                <div className="input_block">
                    <span>
                        Password
                    </span>
                    <div>
                        {/* <img src="../img/password.png"/> */}
                        <input
                            value={form.password}
                            className="input"
                            placeholder="Type your password"
                            onChange={(e) => {
                                setForm((prev) => ({
                                    ...prev,
                                    password: e.target.value            
                                }))
                            }}
                        />
                    </div>
                </div>
                <p>
                    Forgot possword?
                </p>
                <button
                    className="button"
                    onClick={formValidation}
                    // disabled={form.password.length < 8 || form.userName.length < 8}
                >
                    Login
                </button>
                
            </div>
        </>
    )
}

export default Login