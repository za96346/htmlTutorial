async function setUp() {
    /**
     * @description 使用者資料
    */
    const users = await fetch('https://random-data-api.com/api/v3/projects/33d37b84-5f74-48a9-bb47-1101c6d55f0d?api_key=_Xh5od18936flOn_Pn1aew', {
        method: 'get',
    })
        .then((res) => res.json())
        .then((v) => {
            /**
             * @TODO 把使用者分成 男 女 其他 三個陣列
            */
            //console.log(v)
            const male = []
            const female = []
            const others = []

            v.datas.map((item) => {
                console.log('item => ', item)
                const gender = item.gender
                if(gender === "male"){
                    male.push(item)
                }else if(gender === "female"){
                    female.push(item)
                }else{
                    others.push(item)
                }
            })

            console.log("male =>", male)
            console.log("female =>", female)
            console.log("others =>", others)
            
            return v
        })


    /**
     * @description 商品資料
    */
    const allProducts = await fetch('https://fakestoreapi.com/products')
        .then((res) => res.json())
        .then((v) => {
            /**
             * @TODO 把商品資料 同個商品目錄的放在同一個陣列, 並把結果 console 出來
             * 
             * @returns {
             *      [category_name1]: Array<ProductsObject>,
             *      [category_name2]: Array<ProductsObject>,
             * }
            */
            const result = {
            }
            v.map((item) => {
                console.log('result[item.category] =>', result[item.category])
                result[item.category] = [
                    ...(result[item.category] || []),
                    item
                ]
                console.log('result[] =>', result[item.category])
            })

            console.log('result => ', result)




            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把商品資料 用 sort 去依據 商品的 評比排序(由高到低), 並把結果 console 出來
             * 
             * @returns Array<ProductsObject>
             * 
            */
            const sortedProducts = v.sort((itemA, itemB) => itemB.rating.rate - itemA.rating.rate)
            console.log('sortedProducts => ', sortedProducts)

            /** @TODO end */
            return v
        })

    console.log('allProducts => ', allProducts)

    /**
     * @description 購物車資料
    */
    const carts = await fetch('https://fakestoreapi.com/carts')
        .then((res) => res.json())
        .then((v) => {
            /**
             * @TODO 購物車資料裡面的 商品陣列 裡面的商品只有productId, quantity, 你要去 allProducts 找到該單筆的商品資料, 並且把他放回去
            */
            console.log(v)
            const result = v.map((item) => {
                item.products = item.products.map((item2) => {
                    productId = item2.productId
                    console.log(productId)
                    const thisProduct = allProducts.find((element) => {
                        return productId == element.id
                    })

                    item2 = {...item2,...thisProduct}

                    return item2
                })
                return item
            })
            console.log('result =>', result)

            return v
        })
}
setUp()