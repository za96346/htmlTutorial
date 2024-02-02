// 變數宣告
const a = 0 // 常量變數, 不可重新賦值
let b = 0 // 變數, 可重新賦值
var c = 9 // 全域變數 可不用記

// 型別
// number => python int float
// string => python str
// array => python list
// object => python dictionary

// 列印
console.log("wejfoij")

// 字串
let subString = "abc"
console.log(subString)

// for loop

for (let i = 0; i< 5; i++) {
    console.log(i)
}

// if else
// 雙等於 == 是不會判斷型別的, 及 0 == "0"
// 三等於 === 才會判斷型別
// 不等於 != or !==
if (a === "0") {
    console.log("is zero")
} else if (a == 4) {
    console.log("is four")
} else if (a != "abc") {
    console.log("is not abc string")
} else {
    console.log("other")
}

// array
let arr = [1, 2, 3]
for (let i = 0; i < arr.length; i++){
    console.log(`index ${i}`, arr[i] + 10)
}

// arr.map((item, index) => console.log(`index ${index}`, item + 10))

