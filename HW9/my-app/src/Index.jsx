import React, { useEffect, useState } from 'react';
import BigCard from './Components/BigCard'
import SmallCard from './Components/SmallCard';
import searchPNG from './img/search.png'

const Index = () => {
    const [data, setData] = useState([])

    const getElement = (elementName) => {
        return data[0]
            ?.weatherElement
            ?.find((element) => element.elementName === elementName)
            ?.time
            ?.filter((item) => item.startTime.includes("06:00:00"))
    }

    // 獲取7天溫度
    const getSevenDaysTemperature = getElement("T")
    const getSevenDaysHumidity = getElement("RH")
    const getSevenDaysWindSpeed = getElement("WS")
    const getSevenDaysWeather = getElement("Wx")

    console.log(getSevenDaysHumidity)
    const day_51 = getSevenDaysHumidity?.find((item) => item.startTime === "2024-05-01 06:00:00")
    console.log('day_51', day_51)

    /**
     * 資料整理成 7天
     * 
     * @returns {
     *      1: {
     *          temperature:
     *          humidity:
     *          windSpeed:
     *          weather:
     *      },
     *      2: {
    *          temperature:
    *          humidity:
    *          windSpeed:
    *          weather:
    *      },
    *       ...到7
     * }
    */
    const weekDayDatas = new Array(7)
        .fill({})
        .reduce((accr, item, index) => {
            const thisDaysTemperature = getSevenDaysTemperature
                ?.find((tempItem) => new Date(tempItem.startTime).getDay() === index)


            accr[index + 1] = {
                temperature: thisDaysTemperature?.elementValue?.[0]?.value,
                humidity: getElement("RH")?.[0]?.elementValue?.[0]?.value,
                windSpeed: getElement("WS")?.[0]?.elementValue?.[0]?.value,
                weather: getElement("Wx")?.[0]?.elementValue?.[0]?.value
            }
            return accr
        }, {})

    const we = 


    useEffect(() => {
        /**
         * promise 
         * then 是 http status code 200 的時候才會跑 ( 意思是成功拿到資料 )
         * catch 是 http status code 400~599會跑 ( 意思是請求失敗, 故不進入 then 的區塊 )
        */
        fetch("https://opendata.cwa.gov.tw/api/v1/rest/datastore/F-D0047-091?Authorization=CWA-DF18482D-CB2F-46FD-88C4-34C5E348335E")
            .then((res) => res.json())
            .then((v) => setData(v.records.locations[0].location))
    }, [])

    console.log("data => ", data)
    console.log("weekDayDatas => ", weekDayDatas)
    return (
        <>
            <div 
                className='headerBox'
            >
                <div>
                    Weather App
                </div>
                <div>
                    <input 
                        type="image"
                        src={searchPNG}
                        alt="搜尋"
                    />
                    <input
                        type="text"
                        placeholder="Search city"
                    />
                    
                </div>
            </div>
            <div
                className='contentBox'
            >
                <BigCard 
                    weather={1}
                    temperature={weekDayDatas[1]?.temperature}
                    windSpeed={weekDayDatas[1]?.windSpeed}
                    humidity={weekDayDatas[1]?.humidity}
                />
                <div className='otherDay'>
                    <div>
                        {
                            new Array(3).fill('').map((item, index) => (
                                <SmallCard
                                    key={index}
                                    week={index + 1}
                                    weather={1}
                                    temperature="31.7"
                                    delay={100 * (index + 1)}
                                />
                            ))
                        }
                    </div>
                    <div>
                        {
                            new Array(3).fill('').map((item, index) => (
                                <SmallCard
                                    key={index}
                                    week={index + 1 + 3}
                                    weather={1}
                                    temperature="31.7"
                                    delay={100 * (index + 4)}
                                />
                            ))
                        }
                    </div>

                </div>
            </div>
        </>
    )
}
export default Index