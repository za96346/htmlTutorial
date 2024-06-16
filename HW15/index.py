from flask import Flask, jsonify, request
import DB
from flask_cors import CORS

# flask app 實例化
app = Flask(__name__)
# 在這裡，__name__ 是當前Python模組的名稱。
# 這個參數會告訴Flask應用程序
# 在哪裡可以找到靜態文件（如圖片、CSS文件等）。
CORS(app)

# get user
@app.route("/user", methods=["GET"])
def getUser():
    result = DB.getAllUsers()
    return jsonify(result)

# update user
@app.route("/user", methods=["POST"])
def updateUser():
    result = DB.updateUser(
        request.json["userName"],
        request.json["password"],
        request.json["id"]
    )
    return jsonify(result)

#delete user
@app.route("/user", methods=["DELETE"])
def deleteUser():
    id = request.args.get('id')
    result = DB.deleteUser(id)
    return jsonify(result)

#add user
@app.route("/user", methods=["PUT"])
def addUser():
    result = DB.addUser(
        request.json["userName"],
        request.json["password"],
        request.json["id"],
        request.json["company_id"],
        request.json["account"],
        request.json["delete_flag"]
    )
    return jsonify(result)


# 當你用 python 指令跑此檔案的時候 會通過這個判斷式
if __name__ == '__main__':
    # 啟動 flask app 後端伺服器
    
    # app.run() 是Flask應用程序對象的方法，用於啟動Flask應用程序。
    
    # debug=True 參數設置了應用程序的調試模式，
    # 這將啟用調試模式，並在應用程序運行時顯示詳細的錯誤信息和調試信息。
    app.run(debug = True)
