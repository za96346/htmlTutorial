from flask import Flask, jsonify, request

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

    # 使用者資料
    userValue = {
        "id": 465,
        "uid": "35acccf6-b09d-4754-afe3-f0cd3b7649cc",
        "brand": "Stella Artois",
        "name": "Bell’s Expedition",
        "style": "Scottish And Irish Ale",
        "hop": "TriplePearl",
        "yeast": "1084 - Irish Ale",
        "malts": "Wheat mal",
        "ibu": "76 IBU",
        "alcohol": "7.9%",
        "blg": "10.2°Blg"
    }

    # 定義回傳 array
    result = []
    size = int(size)
    for i in range(size):
        result.append(userValue)

    # return json 格式的資料
    return jsonify(result)

# 當你用 python 指令跑此檔案的時候 會通過這個判斷式
if __name__ == '__main__':
    # 啟動 flask app 後端伺服器
    app.run(debug = True)