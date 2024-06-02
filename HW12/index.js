/**
 * @description ：回傳陣列裡面所有小於 n 的數的數量
 * 請寫出一個函式 findSmallCount，接收一個陣列跟一個數字 n，回傳有多少個數小於 n。
 * 
 * ex:
 *      findSmallCount([1, 2, 3], 2) 預期回傳值：1
 *      findSmallCount([1, 2, 3, 4, 5], 0) 預期回傳值：0
 *      findSmallCount([1, 2, 3, 4], 100) 預期回傳值：4
*/
console.log('findSmallCount =>')
function findSmallCount(List, num){
    let result = 0
    for (let i = 0; i < List.length; i++){
        if(List[i] < num){
            result += 1
        }
    }
    return result
}
console.log(findSmallCount([1, 2, 3], 2))
console.log(findSmallCount([1, 2, 3, 4, 5], 0))
console.log(findSmallCount([1, 2, 3, 4], 100))

/**
 * @description ：回傳陣列裡面所有小於 n 的數的總和
 * 請寫一個函式 findSmallerTotal，接收一個陣列以及數字 n，回傳陣列裡面所有小於 n 的數的總和。
 * 
 * ex:
 *      findSmallerTotal([1, 2, 3], 3) 正確回傳值：3
 *      findSmallerTotal([1, 2, 3], 1) 正確回傳值：0
 *      findSmallerTotal([3, 2, 5, 8, 7], 999) 正確回傳值：25
 *      findSmallerTotal([3, 2, 5, 8, 7], 0) 正確回傳值：0
*/
console.log('findSmallerTotal =>')
function findSmallerTotal(List, num){
    let result = 0
    for (let i = 0; i < List.length; i++){
        if(List[i] < num){
            result += List[i]
        }
    }
    return result
}
console.log(findSmallerTotal([1, 2, 3], 3))
console.log(findSmallerTotal([1, 2, 3], 1))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 999))
console.log(findSmallerTotal([3, 2, 5, 8, 7], 0))

/**
 * @description ：回傳陣列裡面所有小於 n 的數
 * 請寫一個函式 findAllSmall，接收一個陣列跟一個數字 n，回傳一個裡面有所有小於 n 的數的陣列（需按照原陣列順序）。
 * 
 * ex:
 *      findAllSmall([1, 2, 3], 10) 正確回傳值：[1, 2, 3]
 *      findAllSmall([1, 2, 3], 2) 正確回傳值：[1]
 *      findAllSmall([1, 3, 5, 4, 2], 4) 正確回傳值：[1, 3, 2]
*/
console.log('findAllSmall =>')
function findAllSmall(List, num){
    let result = []
    for (let i = 0; i < List.length; i++){
        if(List[i] < num){
            result.push(List[i])
        }
    }
    return result
}
console.log(findAllSmall([1, 2, 3], 10))
console.log(findAllSmall([1, 2, 3], 2))
console.log(findAllSmall([1, 3, 5, 4, 2], 4))

/**
 * @description ：回傳陣列總和
 * 請寫一個 function sum，接收一個陣列並回傳陣列中數字的總和。
 * 
 * ex:
 *      sum([1, 2, 3]) 預期回傳值：6
 *      sum([-1, 1, 2, -2, 3, -3]) 預期回傳值：0
*/
console.log('sum =>')
function sum(List){
    let result = 0
    for (let i = 0; i < List.length; i++){
        result += List[i]
    }
    return result
}
console.log(sum([1, 2, 3]))
console.log(sum([-1, 1, 2, -2, 3, -3]))