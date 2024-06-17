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

            


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把使用者 依照 id 做排序( 由大到小 ), 並且使用 sort 
            */


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把使用者 依照 生日 做排序( 由近到遠 ), 並且使用 sort
            */


            /** @TODO end */
            return v
        })

    /**
     * @description 啤酒資料
    */
    const beers = await fetch('https://random-data-api.com/api/v2/beers?size=100', {
        method: 'get',
    })
        .then((res) => res.json())
        .then((v) => {
            /**
             * @TODO 把啤酒資料 依照 酒精濃度 做排序( 由大到小 ), 並且使用 for loop
            */


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把啤酒資料 依照 酒精濃度 做排序( 由大到小 ), 並且使用 sort
            */


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把啤酒資料 把同個啤酒品牌的資料放在一起
             * @returns {
             *      [brandName]: [BeerItem]
             * }
            */
            


            /** @TODO end */
            return v
        })

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


            /** @TODO end */
            return v
        })
        .then((v) => {
            /**
             * @TODO 把信用卡資料 依照 id 做排序( 由大到小 ), 並且使用 sort
            */


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

            /** @TODO end */
            return v
        })
}
setUp()