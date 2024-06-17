## 前後端api 練習
### <span style="color: red;">請自行創建前端資料夾 以及 後端檔案</span>
### 後端 Python Flask
1. SQL schema 要求
    ```sql
    user schema 包含以下欄位
    #   id              => int
    #   company_id      => int
    #   user_name       => varchar(50)
    #   account         => varchar(50)
    #   password        => varchar(50)
    #   delete_flag     => char
    #   delete_time     => timestamp
    #   create_time     => timestamp
    #   update_time     => timestamp
    ```
2. api撰寫 ( 四隻api )
    a. 取得使用者資料 (不需要查詢參數)
    b. 新增使用者資料
    c. 修改使用者資料
    d. 刪除使用者資料

### 前端 React
1. 介接使用者api
2. 使用表格去渲染使用者資料
3. 功能要包含
   a. 取得使用者資料
   b. 新增使用者資料
   c. 修改使用者資料
   d. 刪除使用者資料