import mysql.connector


# 建立與 MySQL 數據庫的連接
mydb = mysql.connector.connect(
    host="localhost",       # 数据库主机地址
    user="root",    # 数据库用户名
    passwd="mysql592Yyek",   # 数据库密码
    auth_plugin='mysql_native_password'
)

def getAllUsers(companyId = 0):
    mysursor = mydb.cursor()
    mysursor.execute(
        "use test;"
    )
    mysursor.execute(f"select * from user where company_id={int(companyId)};")

    myresult = mysursor.fetchall()
    mysursor.close()

    return myresult