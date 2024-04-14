import React, { useState } from 'react';
import { weekObject, weatherObject } from '../Methods/Objects';

/**
 * @description 大張的卡片
*/
const BigCard = ({weather, temperature, windSpeed, humidity }) => {
    return(
        <div
            className='BigCard'
        >
            <div>
                <div>
                    <img
                        src={weatherObject[weather]}
                        alt=''
                    />
                </div>
                <div>
                    {temperature}°C
                </div>
            </div>
            <div
                className='WindspeedAndHumididy'
            >
                <div>
                    <div>
                        <div>Wind Speed</div>
                        <div>{windSpeed}</div>
                    </div>
                    
                </div>
                <div>
                    <div>
                        <div>Humidity</div>
                        <div>{humidity}</div>
                    </div>
                </div>
            </div>
            <div></div>
        </div>
    )
}
export default BigCard