from flask import Flask, jsonify, request
import DB
from flask_cors import CORS


# 請啟動一個 flask app server
# 寫出一隻 user api, 以下為 傳入參數
#   1. size ( 幾筆資料 )
#   2. company_id (公司id, 可選參數)
#
# user api 只能回傳未被刪除的資料
#
#
# 請從資料庫找尋資料
# user schema 包含以下欄位6
#   id              => int
#   company_id      => int
#   user_name       => varchar(50)
#   account         => varchar(50)
#   password        => varchar(50)
#   delete_flag     => char-------------- (Y, N)
#   delete_time     => timestamp
#   create_time     => timestamp
#   update_time     => timestamp

# @TODO

# flask app 實力化
app = Flask(__name__)
CORS(app)

# 註冊路由 - welcome
@app.route("/")
def Welcome():
    return "welcome~"

# 註冊路由 - user
@app.route("/user")
def hello():
    # 接收 前端傳入的 參數 - size - 回傳幾筆資料
    size = request.args.get('size')
    company_id = request.args.get('company_id')

    print(company_id)
    print(size)

    result = DB.getAllUsers(company_id)
    size = int(size) if size else len(result)

    # return json 格式的資料
    return jsonify(result[0:size])

# 當你用 python 指令跑此檔案的時候 會通過這個判斷式
if __name__ == '__main__':
    # 啟動 flask app 後端伺服器
    app.run(debug = True)