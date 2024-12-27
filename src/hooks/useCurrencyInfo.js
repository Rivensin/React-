import { useEffect, useState } from "react";

function useCurrencyInfo(currency){
  const [data,setData] = useState({});
  
  useEffect(() => {
    async function fetchData(){
    const promise = await fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`) 

    const response = await promise.json() 
    setData(response[currency]) //use bracket notation when calling value in object that stored in variable
    }  

    fetchData()
  },[currency])
  
  return data
}

export default useCurrencyInfo
