## 指引
1. 此為前端練習題，裡面包含了
   - <span style="color: skyblue">Index.html</span> 主要更改的檔案
   - <span style="color: skyblue">README.md</span> 該次作業說明文件
   - <span style="color: skyblue">Result.(jpg | jpeg | png)</span> 該此作業該達成的畫面
2. 請更改該次目錄 HW x 裡面的 Index.html 檔案，並使其畫面更貼近於result.jpg
3. 前端主要練習項目
   - HTML 三本柱之一 ( 蓋房子時的 鋼筋水泥 )
   - CSS 三本柱之一 ( 油漆 )
   - JavaScript 三本柱之一 ( 大樓管理系統 )
4. 每次的作業將會練習到HTML和CSS的應用，並熟悉語法、排版，在熟悉後，才會加上JavaScript與框架。
5. 作業並未有分數，也沒有硬性的時間規定，在每次推送完成代碼到你的分支後，我將會檢查並且指引你修正程式碼。
6. 遇到不知道怎麼寫的話，先在網路上搜尋，或參考以下提供的連結，真的不知道，可以來詢問我。

## 代碼完成後上傳步驟
1. 確認當前分支
2. 確認當前目錄狀態
3. 新增暫存，並且提交
4. 推送剛提交的檔案到git hub

### git 指令
先查看該目錄的狀態
<!-- ![image](./img/git簡單操作.mp4) -->
```sh
git status
```

把更改的檔案加入本地暫存
```sh
git add .
```

提交剛剛加入暫存的檔案
```sh
git commit -m "Here is your commit message."
```

推送剛剛加入提交的檔案到git hub
```sh
#git push origin <你的分支名稱>
git push origin master
```

新增本地分支
```sh
#git branch <你的分支名稱>
git branch siou_dev
```

刪除本地分支
```sh
#git branch -D <你的分支名稱>
git branch -D siou_dev
```

切換本地分支
```sh
#git checkout <你的分支名稱>
git checkout siou_dev
```

## 參考
 - linux
    1. https://ithelp.ithome.com.tw/articles/10235530
 - git 相關
    1. https://www.maxlist.xyz/2018/11/02/git_tutorial/
 - html 相關
    1. https://www.w3cschool.cn/html/
 - css 相關
    1. https://tw.alphacamp.co/blog/css-guide-box-model
    2. https://www.kocpc.com.tw/archives/395875
 - vscode 推薦插件
    1. Markdown Preview Enhanced
    2. ESLint
    3. Material Icon Theme
    4. IntelliSense for CSS class names in HTML
    5. HTML CSS Support
