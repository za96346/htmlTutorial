/**
 * 1. 實現map
 * map(iteralFunction, iteralList)
*/
function Mapper(iteralFunction, iteralList){
}

let mapResult = Mapper(
    (v, i) => (v + 10),
    [1, 2, 3, 4, 5]
)
console.log(mapResult) // expected [11, 12, 13, 14, 15]



/**
 * 2. 實現filter
 * filter(iteralFunction, iteralList)
*/
function Filter(iteralFunction, iteralList){
}

let filterResult = Filter(
    (v, i) => (v > 3),
    [1, 2, 3, 4, 5]
)
console.log(filterResult) // expected 4, 5
