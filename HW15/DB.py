import mysql.connector
import datetime

# 建立與 MySQL 的連結
mydb = mysql.connector.connect(
    host="localhost",        # 數據庫主機地址
    user="root",             # 數據庫用戶名
    passwd="mysql592Yyek",   # 數據庫密碼
    auth_plugin='mysql_native_password',
    database="hw15"
)

def getAllUsers():
    mysursor = mydb.cursor()
    mysursor.execute(
        f"select * from user where delete_flag='N';"
    )

    myresult = mysursor.fetchall()
    mysursor.close()

    return myresult

def updateUser(userName, password, id):
    mysursor = mydb.cursor()
    mysursor.execute(
        f"""
            update user set
                user_name = {userName},
                password = {password}
            where id = {id};
        """
    )

    mydb.commit()
    mysursor.close()

    return True

def deleteUser(id):
    mysursor = mydb.cursor()
    mysursor.execute(
        f"""
            delete from user where id={id};
        """
    )
    
    mydb.commit()
    mysursor.close()
    
    return True

def addUser(userName, password, id, company_id, account, delete_flag):
    now = datetime.datetime.now()
    mysursor = mydb.cursor()
    mysursor.execute(
        f"""
            insert into user(
                id,
                company_id,
                user_name,
                account,
                password,
                delete_flag,
                create_time,
                update_time
            )values(
                {id},
                {company_id},
                {userName},
                {account},
                {password},
                {delete_flag},
                {now},
                {now}
            )
        """
    )

    mydb.commit()
    mysursor.close()

    return True

