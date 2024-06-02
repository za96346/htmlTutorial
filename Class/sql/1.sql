use test;

/* 插入語法 */
insert into user(
sn,name,mail,home,messages)
values(4,'rose','ps102789@','taiwan','jjj');

/* 查詢語法 */
/* order by 欄位名 排序方式 (desc, asc) ----- 排序 */
select * from user where sn = sn -- 
