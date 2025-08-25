import {useState, useEffect} from 'react'

function useCurrencyInfo(currency){
    console.log("Input currency: ",currency)
    const [data, setData] = useState({})
    useEffect(()=>{
        let URL = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
        fetch(URL)
        .then((res)=>{return res.json()})
        .then((res)=>{setData(res[currency])})
    },[currency])

    console.log("data: ", data)
    return data
}

export default useCurrencyInfo
