## 任務
1. 使用段落標籤，完成 1.jpeg 的畫面。
2. 使用標題標籤，完成 2.jpeg 的畫面。
3. 使用超連結標籤，完成 3.jpeg 的畫面。
4. 使用行內容氣標籤，完成 4.jpeg 的畫面。
5. 使用區塊元素標籤，完成 5.jpeg 的畫面。
6. 使用圖片標籤，完成 6.jpeg 的畫面
## class
1. html格式
    <span style="color:red;">
        <元素名稱
            屬性1="屬性值"
            屬性2="屬性值"
            ...
        >
            其他文字或元素
        </元素名稱>
    </span>

    ```html
        <!-- 正確 -->
        <div>容器元素</div>
        <p>文字段落元素</p>
        <a href="#">超連結元素</a>
        <img />

        <!-- 錯誤 -->
        <div>沒有加上結尾斜線<div>
    ```
2. 常用屬性
    ```html
        <div
            <!-- css樣式 -->
            style="color: red; font-size: 18px;"

            <!-- css類 名稱 -->
            class="article"

            id="唯一标识"

            <!-- 事件名稱 -->
            onclick="functionName"
        >
            iwef
        </div>
    ```
3. 常用標籤
    ```html
        <!-- 註解 -->
        <!-- 填入你的註解-->

        <a>超連結標籤</a>
        <p>段落標籤</p>
        <img src="./a.jpg" />
        <div>容器</div>
        <span>行內容器</span>
        <!DOCTYPE html> 宣告
        <html>整個網頁</html>
        <head>網頁頭部</head>
        <body>網頁身體</body>

        <!-- 標題相關 -->
        <h1>h1標題<h1>
        <h2>h2標題<h2>
        <h3>h3標題<h3>
        <h4>h4標題<h4>
        <h5>h5標題<h5>
        <h6>h6標題<h6>

        <!-- 項目清單 -->
        <ol>
            <li>第1個</li>
            <li>第2個</li>
            <li>第3個</li>
        </ol>

        <!-- 無序清單 -->
        <ul>
            <li>第1個</li>
            <li>第2個</li>
            <li>第3個</li>
        </ul>
        
        <!-- 空格 ( 要加上結尾斜線 ) -->
        <br />

        <header>頁首
        <nav>導覽列 nav是導覽、導航的英文navigation取前面三個字母
        <main>主要內容
        <section>區塊 有主題性的區塊，基本上會有一個標題
        <aside>側邊欄
        <footer>頁尾
    ```
4. html 可以作嵌套
    ```html
        <div class="article">
            this is article block.
            <img src="aa.jpg" />
        </div>
        <div class="sidebar">
            this is sidebar block.
            <ul>
                <li>首頁</li>
                <li>博覽會</li>
                <li>通知中心</li>
            </ul>
        </div>
    ```
## 參考網址
1. 常用標籤 https://selflearningsuccess.com/html-tags/
2. html詳細網站 https://www.w3cschool.cn/html/
3. 常用屬性 https://pushi.simon1987.com/html-common-elements.html#%E5%9D%97%E7%BA%A7%E5%85%83%E7%B4%A0-block-level-elements-%E5%92%8C%E8%A1%8C%E5%86%85%E5%85%83%E7%B4%A0-inline-elements