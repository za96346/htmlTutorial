import React, { useState } from 'react';

/**
 * input 欄位包含以下
1. 標題
2. 內文
3. 創建時間
4. 創建人
5. 提醒時間

```html
以下為樣板區塊大致的示意圖

| buttonCreate |
------------------------
| input |
| input |
| input |
| input |
| input |
------------------------
|- 標題 -||- 內文 -||- 創建時間 -||- 創建人 -||- 提醒時間 -|
| record one| | buttonEdit | | buttonDelete |
| record two| | buttonEdit | | buttonDelete |
| record three| | buttonEdit | | buttonDelete |
...
```
 */

const initRecord = {
    title: '',
    content: '',
    creationTime: '',
    founder: '',
    reminderTime: '',
}
const Record = () =>{
    const [userArray, setUserArray] = useState([])
    const [record, setRecord] = useState(initRecord)
    console.log("userArray", userArray)
    console.log("record", record)
    return (
        <>
            <div>
                <span>
                    Title
                </span>
                <input
                    value={record.title}
                    className="input"
                    placeholder="Type your title"
                    onChange={(e) => {
                        console.log(e)
                        setRecord((prev) => ({
                            ...prev,
                            title: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>
                   Content 
                </span>
                <input
                    value={record.content}
                    className='input'
                    placeholder="Type your content"
                    onChange={(e) => {
                        console.log(e)
                        setRecord((prev) => ({
                            ...prev,
                            content: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>creationTime</span>
                <input
                    value={record.creationTime}
                    className='input'
                    placeholder='Type your creationTime'
                    onChange={(e) => {
                        console.log(e)
                        setRecord((prev) => ({
                            ...prev,
                            creationTime: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>
                    Founder
                </span>
                <input
                    value={record.founder}
                    className="input"
                    placeholder="Type your founder"
                    onChange={(e) => {
                        console.log(e)
                        setRecord((prev) => ({
                            ...prev,
                            founder: e.target.value
                        }))
                    }}
                />
            </div>
            <div>
                <span>
                    ReminderTime
                </span>
                <input
                    value={record.reminderTime}
                    className="input"
                    placeholder="Type your reminderTime"
                    onChange={(e) => {
                        console.log(e)
                        setRecord((prev) => ({
                            ...prev,
                            reminderTime: e.target.value
                        }))
                    }}
                />
            </div>
            <button
                onClick={() => {
                    setUserArray((prev) => {
                        const findTheDupliteUser = prev.find((item) => item.title === record.title)
                        console.log("findTheDupliteUser =>", findTheDupliteUser)
                        if (findTheDupliteUser) {
                            alert("標題名稱重複")
                            return prev
                        }

                        setRecord(initRecord)

                        return [
                            ...prev,
                            record
                        ]
                    })
                }}
            >
                新增
            </button>
            <table>
                <tr>
                    <th>標題</th>
                    <th>內文</th>
                    <th>創建時間</th>
                    <th>創建人</th>
                    <th>提醒時間</th>
                </tr>
                {
                    userArray.map((item) => (
                        <tr>
                            <td>{item.title}</td>
                            <td>{item.content}</td>
                            <td>
                                <button
                                    onClick={() => {
                                        setUserArray((prev) => {
                                            return prev.filter((i) => i.title !== item.title)
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
export default Record