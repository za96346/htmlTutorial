import React, { useEffect, useState } from 'react';
import { weekObject, weatherObject } from '../Methods/Objects';

/**
 * @description 小張的卡片
 * @param week number 星期幾(1~7)
 * @param weather number 天氣 (1~3)
 * @param temperature number 溫度
*/
const SmallCard = ({ week,weather,temperature, delay }) => {
    const [show, setShow] = useState(false)

    /**
     * 當地二個參數裡面的值有變化的時候就執行第一個參數的函示
     * 如果第二個參數是空的陣列, 代表沒有依賴向, 只執行初次渲染一次
     * 
    */
    useEffect(() => {
        /**
         * 要延遲多久後才執行
         * 要延遲 delay s 後
        */
        setTimeout(() => {
            setShow(true)
        }, delay)
    }, [delay])

    return(
        <div
            style={{
                opacity: show ? '1' : '0',
            }}
            className='SmallCard'
        >
            <div>
                {weekObject[week]}
            </div>
            <div>
                <img
                    src={weatherObject[weather]}
                    alt=""
                />
            </div>
            <div>
                {temperature}°C
            </div>
        </div>
    )
}
export default SmallCard