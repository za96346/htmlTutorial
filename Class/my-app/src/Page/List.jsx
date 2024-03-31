import React, { useState, useEffect } from 'react';

/**
 *             ---------------------
            需要有userName, password, age,
            input 表單輸入地方
            <br />
            新增按鈕 ()
            ---------------------
            要顯示 你新增的使用者(用table)
*/
const List = () =>{
    const [userList, setUserList] = useState([])
    const [user, setUser] = useState({
        userName: '',
        password: '',
        age: '',
    })
    console.log("userList", userList)
    console.log("user", user)
    return (
        <>
            <div>
                <span>
                    Username
                </span>
                <input
                    value={user.userName}
                    className="input"
                    placeholder="Type your username"
                    onChange={(e) => {
                        console.log(e)
                        setUser((prev) => ({
                            ...prev,
                            userName: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>
                    Password
                </span>
                <input
                    value={user.password}
                    className="input"
                    placeholder="Type your password"
                    onChange={(e) => {
                        console.log(e)
                        setUser((prev) => ({
                            ...prev,
                            password: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>
                    age
                </span>
                <input
                    value={user.age}
                    className="input"
                    placeholder="Type your age"
                    onChange={(e) => {
                        console.log(e)
                        setUser((prev) => ({
                            ...prev,
                            age: e.target.value
                        }))
                    }}
                />
            </div>
            <button
                onClick={() => {
                    setUserList((prev) => {
                        const findTheDupliteUser = prev.find((item) => item.userName === user.userName)
                        console.log("findTheDupliteUser =>", findTheDupliteUser)
                        if (findTheDupliteUser) {
                            alert("使用者名稱重複")
                            return prev
                        }
                        return [
                            ...prev,
                            user
                        ]
                    })
                }}
            >
                新增
            </button>
            <table>
                <tr>
                    <th>姓名</th>
                    <th>密碼</th>
                    <th>年紀</th>
                </tr>
                {
                    userList.map((item) => (
                        <tr key={item.userName}>
                            <td>{item.userName}</td>
                            <td>{item.password}</td>
                            <td>{item.age}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setUserList((prev) => {
                                            return prev.filter((i) => i.userName !== item.userName)
                                        })
                                    }}
                                >
                                    delete
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </table>
        </>
    )
}
export default List
