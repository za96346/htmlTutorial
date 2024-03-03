/**
 * @todo 基礎練習
*/
    // 1. 列印出 'abc'
    console.log("abc")

    // 2. 把以下的變數重新賦值 並列印出來
    let a = 5
    a = 6
    console.log(a)

/*--------------------------------------------------------*/




/**
 * @todo 字串練習 
*/
    // 1. 把 以下字串 拆成 array，並把每一個元素加上 1，印出結果
    const targetString2 = "312409239489859823109489"
    const arr = targetString2.split('')
    console.log(arr)
    for (let i = 0; i < arr.length; i++){
        arr[i] = parseInt(arr[i]) + 1
    }
    console.log(arr)

    // 2. 把以下字串的空格，用 = 分隔開來
    const targetString3 = "this is a book."
    String3 = targetString3.replaceAll(" ","=")
    console.log(String3)

/*--------------------------------------------------------*/




/**
 * @todo 陣列練習 
*/
    const strArray = ["a", "b", 1, 5]

    // 1. 新增元素 20 到最後。
    strArray.push(20)
    console.log(strArray)

    // 2. 移除第一個元素
    strArray.shift()
    console.log(strArray)

    // 3. 合併以下陣列到 strArray中
    const newArray = ["l", "m", "n", 8, 99]
    // strArray = [
    //     ...strArray,
    //     ...newArray
    // ]
    strArray.push(...newArray)
    console.log(strArray)

    // 4. 遍歷陣列 strArray，並打印出來 ( 用for loop )
    for (let i = 0; i < strArray.length; i++){
        console.log(strArray[i])
    }

    // 5. 遍歷陣列 strArray，並打印出來 ( 用 map )
    strArray.map((v,i) => (console.log(v)))

    // 6. 過濾陣列 strArray，只留下 類型為 字串的元素 ( 用for loop )
    const strArray6 = []
    for (let i = 0; i < strArray.length; i++){
        if (typeof strArray[i] === "string"){
            strArray6.push(strArray[i])
        }
    }
    console.log("array pratice -- 6 => ", strArray6)

    // 7. 過濾陣列 strArray，只留下 類型為 字串的元素 ( 用 filter )
    const strArray7= strArray.filter((v,i) => (typeof v === "string"))
    console.log("array pratice -- 7 => ", strArray7)
    
/*--------------------------------------------------------*/




/**
 * @todo object練習
*/
    const phone = {
        width: 500,
        height: 800,
        brand: "",
        hi: 'hi'
    }

    // 1. 新增屬性 price 為 40000
    phone.price = 40000
    console.log('object -- 1', phone)
    
    // 2. 刪除屬性 hi
    delete phone.hi
    console.log('object -- 2', phone)

    // 3. 編輯屬性 width 變為 400
    phone.width = 400
    console.log('object -- 3', phone)

    // 4. 建立一個新的 object , 並為新的object 新增屬性 name
    const newObject = {...phone}
    newObject.name = ""
    console.log(newObject, phone)

    // 5. 遍歷phone，並且打印出裡面的資料，打印格式為 key => value
    Object.keys(phone)
        .map((v,i) => (
            console.log(`${v} => ${phone[v]}`)
        ))

/*--------------------------------------------------------*/



/**
 * @todo object array 複合練習
*/
    const computer = {
        width: 500,
        height: 800,
        brand: "",
        hi: 'hi'
    }

    let computerArray = [
        computer,
        computer,
        computer
    ]

    // 1. 移除第一台電腦
    computerArray.shift()
    console.log(computerArray)

    // 2. 新增 兩台電腦到最後。
    computerArray.push(computer)
    computerArray.push(computer)
    console.log(computerArray)
    

    // 3. 更改 computerArray ， 把每一台computer 的屬性都改的不相同、不重複。 ( 用 map )
 

/*--------------------------------------------------------*/




/**
 * @todo 函式練習 -- 宣告一個函示，該功能需要滿足以下數學式，有兩個參數 a、b，並回傳結果
 * @description 數學式 = (a - b)(a ^ 2 + ab + b ^ 2)
*/
// let result = ((a, b) => (console.log((a - b)*(a^2 + a*b + b^2))))
let result = 0
function calculate(a, b){
    result = (a-b) * (a**2 + a*b + b**2)
    return result
}
console.log(calculate(2, 1))

/*--------------------------------------------------------*/