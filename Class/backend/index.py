from flask import Flask, jsonify, request
import DB

"""
Flask => 這是 Flask 應用程式的核心類別，
我們可以使用它來建立一個 Flask 應用程式的實例。

jsonify => 這是 Flask 提供的一個函式，
它將 Python 物件轉換為 JSON 格式的響應。

request => 這是 Flask 提供的一個全域物件，
用於存取 HTTP 請求中的資訊，例如請求的方法、參數等等。

"""

#  flask app 實利化
app = Flask(__name__)

# 註冊路由 - welcome
@app.route("/")
def Welcome():
    return "welcome~"

# 註冊路由 - user
@app.route("/user")
def hello():
    # 接收 前端傳入的 參數 - size - 回傳幾筆資料
    size = request.args.get('size')
    print(size)

    result = DB.getAllUsers()


    # return json 格式的資料
    return jsonify(result)

# 當你用 python 指令跑此檔案的時候 會通過這個判斷式
if __name__ == '__main__':
    # 啟動 flask app 後端伺服器
    app.run(debug = True)