## 指引
1. 此為前端練習題，裡面包含了
   - <span style="color: skyblue">Index.html</span> 主要更改的檔案
   - <span style="color: skyblue">README.md</span> 該次作業說明文件
   - <span style="color: skyblue">Result.(jpg | jpeg | png)</span> 該此作業該達成的畫面
2. 請更改該次目錄 HW x 裡面的 Index.html 檔案，該檔案會有對應的 todo start 、todo end 註解，請在該區間作答，並使其畫面更貼近於result.jpg
3. 前端主要練習項目
   - HTML 三本柱之一 ( 蓋房子時的 鋼筋水泥 )
   - CSS 三本柱之一 ( 油漆 )
   - JavaScript 三本柱之一 ( 大樓管理系統 )
4. 每次的作業將會練習到HTML和CSS的應用，並熟悉語法、排版，在熟悉後，才會加上JavaScript與框架。
5. 作業並未有分數，也沒有硬性的時間規定，在每次推送完成代碼到你的分支後，我將會檢查並且指引你修正程式碼。
6. 遇到不知道怎麼寫的話，先在網路上搜尋，或參考以下提供的連結，真的不知道，可以來詢問我。

## 圖片連結
1. 人像 https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png

## 學習路線
1. 環境安裝
   - git
   - npm
   - vscode
   - vscode extensions
2. 終端機使用
3. linux 指令
4. 檔案位置的表達 ( ex : ../src )
5. git 指令
6. git 帳號
7. 代碼上傳
8. vscode 使用
9. html 撰寫與熟悉
10. 加入 css 撰寫與熟悉
11. 檔案引入html
12. javascript 撰寫與熟悉
13. 加入 React javascript 撰寫與熟悉

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
    2. https://selflearningsuccess.com/html-tags/
 - css 相關
    1. https://tw.alphacamp.co/blog/css-guide-box-model
    2. https://www.kocpc.com.tw/archives/395875
    3. https://medium.com/@small2883/%E5%8D%80%E5%A1%8A%E5%85%83%E7%B4%A0-%E8%A1%8C%E5%85%A7%E5%85%83%E7%B4%A0-%E7%A9%BA%E5%85%83%E7%B4%A0%E7%89%B9%E9%BB%9E%E5%88%86%E5%88%A5%E6%9C%89%E5%93%AA%E4%BA%9B-19f8c05f16f6
 - vscode 推薦插件
    1. Markdown Preview Enhanced
    2. ESLint
    3. Material Icon Theme
    4. IntelliSense for CSS class names in HTML
    5. HTML CSS Support
    6. Live Server