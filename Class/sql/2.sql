use hw14;
create table user(
    id int primary key,
    company_id int,
    user_name varchar(50),
    account varchar(50),
    password varchar(50),
    delete_flag char,
    delete_time timestamp,
    create_time timestamp,
    update_time timestamp
);

insert into user(
    id,
    company_id,
    user_name,
    account,
    password,
    delete_flag,
    delete_time,
    create_time,
    update_time
)values(
    1,
    1,
    "qqq",
    "qqq@qq.com",
    "123",
    "N",
    now(),
    now(),
    now()
);
