import mysql.connector

# 建立與 MySQL 數據庫的連接
mydb = mysql.connector.connect(
    host="localhost",       # 数据库主机地址
    user="root",    # 数据库用户名
    passwd="mysql592Yyek",   # 数据库密码
    auth_plugin='mysql_native_password'
)

def getAllUsers(companyId):
    mycursor = mydb.cursor() # 創建一個 cursor 物件來執行 SQL 查詢
    mycursor.execute("use test") # 執行 SQL 查詢
    # if companyId:
    #     # where
    #     pass
    # else:
    #     # no where
    #     pass
    # mycursor.execute('select * from user where company_id = ?', companyId) # 執行SQL語句
    # mycursor.execute('select * from user where company_id = ' + companyId) # 執行SQL語句
    # mycursor.execute(f'select * from user where company_id = {companyId}') # 執行SQL語句
    myresult = mycursor.fetchall() # 檢索查詢結果
    mycursor.close() # 關閉游標

    return myresult
