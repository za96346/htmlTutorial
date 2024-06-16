/**
 * @description 介接你後端的 user api, 並使用table 渲染 畫面
*/

/**
 * decode 解碼
 * encode 編碼
 * 
 * 一個文本or 資料, 要加密變成密文, 此過程叫做 encode
 * 一個加密後的密文, 要變成明文, 此過程叫做 decode
 * 
 * 渲染 - render
 * 重新渲染 - rerender
*/
import React, { useState, useEffect } from 'react';

const App = () => {
    const [users, setUsers] = useState([])
    const getUsers = () => {
        fetch('http://localhost:5000/user?size=1&company_id=1',{
            method: 'get',
        })
            .then((res) => res.json())
            .then((v) => {
                setUsers(v)
            })
    }
    console.log(users)
    useEffect(() => {
        getUsers()
    }, [])



    return(
        <>
            App
            <table style={{ border: "1px solid black" }}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>company_id</th>
                        <th>user_name</th>
                        <th>account</th>
                        <th>password</th>
                        <th>delete_flag</th>
                        <th>delete_time</th>
                        <th>create_time</th>
                        <th>update_time</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item) => (
                            <tr>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                                <td>{item[2]}</td>
                                <td>{item[3]}</td>
                                <td>{item[4]}</td>
                                <td>{item[5]}</td>
                                <td>{item[6]}</td>
                                <td>{item[7]}</td>
                                <td>{item[8]}</td>
                            </tr>
                        ))
                    }


                </tbody>
            </table>
        </>
    )
}
export default App