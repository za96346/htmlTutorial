## 任務
1. 為html添加元素，編輯Index.css，完成1.jpg 的畫面，不能寫style 在html檔案中
2. 不能添加html 任何屬性 class、id，只能透過 div-all 這個className 進行css選擇器的編輯，完成2.after.mp4裡的畫面，不能寫style 在html檔案中
## class
1. css 格式
```css
/* 在css檔案中撰寫一個 class 樣式 */
.任何class名稱 {
    屬性名: 屬性值;
    ...
}

/* 在css檔案中撰寫一個 id 樣式 */
#任何id名稱 {
    屬性名: 屬性值;
    ...
}

/* 在css檔案中撰寫一個 套用所有 div標籤的 樣式 */
div {

}
```

2. 在html中使用已經撰寫好的 css style
```html
<!DOCTYPE html>
<html>
    <head>
        <title>練習css</title>

        <!-- 記得引入 css 檔案路徑 -->
        <link rel="stylesheet" href="Index.css">
    </head>
    <body>
        <!-- 套用擬撰寫好的class style -->
            <div class="card">
            </div>
        <!-- ToDo end 1 -->
    </body>
</html>
```
3. 

## 參考網址
1. https://tw.alphacamp.co/blog/css-guide-box-model
2. http://jinjin.mepopedia.com/~jinjin/webdesign-notes/css.html