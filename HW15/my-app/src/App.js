import React, { useEffect, useState } from "react";
import { getUsers } from './api'


function App() {
    const [users, setUsers] = useState([])

    useEffect(() => {
        getUsers().then((v) => {
            console.log(v)
        })
    }, [])

    return (
        <div>
            <table>
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
        </div>
    );
}

export default App;
