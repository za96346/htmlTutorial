async function setUp() {
    /**
     * @description 使用者資料
     * @description js Date
    */
    const users = await fetch('https://random-data-api.com/api/v2/users?size=100', {
        method: 'get',
    })
        .then((res) => res.json())
        .then((v) => {
            /**
             * @TODO 把使用者 依照 id 做排序( 由大到小 ), 並且使用 for loop
            */
            // const res = []
            // for(let i = 0; i < v.length; i++) {
            //     let user_A_id = v[i].id
            //     if (i == 0) res.push(v[i])
            //     else {
            //         for(let j = 0; j < res.length; j++) {
            //             let user_b_id = res[j].id
    
            //             if (user_A_id < user_b_id) {
            //                 res.splice(j, 0, v[i])
            //             }
            //         }
            //     }
            // }
            // console.log("res =>", res)


            // const UserIds = v.map((item) => item.id)
            // console.log(UserIds) 
            // for (let i = 0; i < UserIds.length; i++)
            //     for(let j=0; j<i; j++)
            //         if(UserIds[i]<UserIds[j]){
            //             let x = UserIds[i];
            //             UserIds[i] = UserIds[j];
            //             UserIds[j] = x
            //         }
            
            // console.log('UserIds =>', UserIds)
            


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把使用者 依照 id 做排序( 由大到小 ), 並且使用 sort 
            */
            // const sortedUserIds2 = v.sort((itemA, itemB) => itemB.id - itemA.id)
            // console.log('sortedUserIds2 =>',sortedUserIds2)


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把使用者 依照 生日 做排序( 由近到遠 ), 並且使用 sort
            */
            const sortedUserBriths = v.sort((itemA, itemB) => (
                new Date(itemB.date_of_birth).getTime()
                - new Date(itemA.date_of_birth).getTime()
            ))
            console.log('sortedUserBriths =>', sortedUserBriths)


            /** @TODO end */
            return v
        })

    /**
     * @description 啤酒資料
    */
    // const beers = await fetch('https://random-data-api.com/api/v2/beers?size=100', {
    //     method: 'get',
    // })
    //     .then((res) => res.json())
    //     .then((v) => {
    //         /**
    //          * @TODO 把啤酒資料 依照 酒精濃度 做排序( 由大到小 ), 並且使用 for loop
    //         */
    //         // const BeerAlcohols = v.map((item) => item.alcohol)
    //         // console.log(BeerAlcohols) 
    //         // for (let i = 0; i < BeerAlcohols.length; i++){
    //         //     for(let j = 0; j < i; j++)
    //         //         if(BeerAlcohols[i] < BeerAlcohols[j])
    //         //             let x = BeerAlcohols[i];
    //         //             BeerAlcohols[i] = BeerAlcohols[j];
    //         //             BeerAlcohols[j] = x
    //         //         }
            
    //         // console.log('BeerAlcohols =>', BeerAlcohols)


    //         /** @TODO end */
    //         return v
    //     })
    //     .then((v) => {
    //         /**
    //          * @TODO 把啤酒資料 依照 酒精濃度 做排序( 由大到小 ), 並且使用 sort
    //         */
    //         // const sortedBeerAlcohols2 = v.sort((itemA, itemB) => itemB.alcohol - itemA.alcohol)
    //         // console.log('sortedBeerAlcohols2 =>', sortedBeerAlcohols2)


    //         /** @TODO end */
    //         return v
    //     })
    //     .then((v) => {
    //         /**
    //          * @TODO 把啤酒資料 把同個啤酒品牌的資料放在一起
    //          * @returns {
    //          *      [brandName]: [BeerItem]
    //          * }
    //         */
            


    //         /** @TODO end */
    //         return v
    //     })

    /**
     * @description 信用卡資料
    */
    const creditCards = await fetch('https://random-data-api.com/api/v2/credit_cards?size=100', {
        method: 'get',
    })
        .then((res) => res.json())
        .then((v) => {
            /**
             * @TODO 把信用卡資料 依照 id 做排序( 由大到小 ), 並且使用 for loop
            */
            const CardIds = v.map((item) => item.id)
            console.log('CardIds =>', CardIds)
            for (let i = 0; i < CardIds.length; i++){
                for(let j = 0; j < i; j++)
                    if(CardIds[i] < CardIds[j])
                        var x = CardIds[i];
                        CardIds[i] = CardIds[j];
                        CardIds[j] = x
                    }
                   


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把信用卡資料 依照 id 做排序( 由大到小 ), 並且使用 sort
            */
            const sortedCardIds2 = v.sort((itemA, itemB) => itemB.id - itemA.id)
            console.log('sortedCardIds2 =>', sortedCardIds2)


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把信用卡資料 把同個信用卡品牌的資料放在一起
             * @returns {
             *      [credit_card_type]: [CreditCardItem]
             * }
            */
            const result = {

            }
            v.map((item) => {
                console.log('result[item.brand] =>', result[item.brand])
                result[item.brand] = [
                    ...(result[item.brand] || []),
                    item
                ]
                console.log('result =>', result)
            })


            /** @TODO end */
            return v
        })
}
setUp()