/**
 * 1. 實現map
 * map(iteralFunction, iteralList)
*/
function Mapper(iteralFunction, iteralList){
    let result = []
    for (let i = 0; i < iteralList.length; i++){
        iteralList[i] = iteralFunction(iteralList[i])
        result = iteralList
    }
    return result
}    
let mapResult = Mapper(
    (v, i) => (v + 10),
    [1, 2, 3, 4, 5]
)
console.log(mapResult)



/**
 * 2. 實現filter
 * filter(iteralFunction, iteralList)
*/
function Filter(iteralFunction, iteralList){
    let result = []
    for (let i = 0; i < iteralList.length; i++){
        if (iteralFunction(iteralList[i])){
            result.push(iteralList[i])
        }
    }
    return result
}

let filterResult = Filter(
    (v, i) => (v > 3),
    [1, 2, 3, 4, 5]
)
console.log(filterResult)
