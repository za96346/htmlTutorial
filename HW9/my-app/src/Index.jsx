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

    /**
     * 資料整理成 7天
    */
    const weekDayDatas = new Array(7)
        .fill({})
        .reduce((accr, item, index) => {
            accr[index + 1] = {
                temperature: getElement("T")?.[0]?.elementValue?.[0]?.value,
                humidity: getElement("RH")?.[0]?.elementValue?.[0]?.value,
                windSpeed: getElement("WS")?.[0]?.elementValue?.[0]?.value,
                weather: getElement("Wx")?.[0]?.elementValue?.[0]?.value
            }
            return accr
        }, {})


    useEffect(() => {
        /**
         * promise 
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
                                    week={1}
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
                                    week={1}
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