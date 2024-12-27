import { useState, useCallback, useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
//import Youtube from './Youtube'
//import Card from './components/card'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import {InputBox} from './components/index.js'

function App() {
  const [amount,setAmount] = useState(0)
  const [from,setFrom] = useState('usd')
  const [to,setTo] = useState('inr')
  const [convertedAmount,setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)
  const options = Object.keys(currencyInfo)
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }
  
  return (
    <div className='w-96 h-screen flex flex-wrap justify-center items-center bg-contain bg-no-repeat' style={{backgroundImage:`url(${reactLogo})`}}>
      <div className='w-full '>
        <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/100'>
          <form onSubmit={e => {
            e.preventDefault()
            convert()}}>
            <div className='w-full mb-1'>
              <InputBox 
                label="from"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={currency => setFrom(currency)}
                onAmountChange = {amount => setAmount(amount)}
                selectedCurrency = {from}            
                /> 
            </div>
            <div className='relative w-full h-0.5'>
              <button className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5' 
                      onClick={swap}>
                Swap
              </button>
            </div>
            <div className='w-full mb-1'>
              <InputBox 
                label="to"
                amount={convertedAmount.toFixed(2)}
                currencyOptions={options}
                onCurrencyChange={currency => setTo(currency)}
                onAmountChange = {amount => setAmount(amount)}
                selectedCurrency = {to}
                amountDisabled     
                /> 
            </div>
            <button className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'>
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}


export default App

/*
  <>
    //STATE

    const username = 'Riven';

    const addValue = () => {
      setCounter(prevcounter => prevcounter+=1)
      setCounter(prevcounter => prevcounter+=1)
    }

    const removeValue = () => {
      setCounter(prevcounter => prevcounter-=1);
    }
      
    <h1 className='text 3xl bg-green-500 p-3 rounded-md'>Vite React App</h1>
    <h1>React Course With : {username}</h1>
    <h2>Counter Value : {counter}</h2>
    <button onClick={addValue}>Add Value</button>{" "}
    <button onClick={removeValue}>Remove Value</button>
    <p>footer: </p>
    <Card username="hitesh"/>
    <Card username="jason" post="Staff Eng"/>
    <Card />

    ---------------------------------------------------------------
    //BG CHANGER
    const [color,setColor] = useState('olive')

    return (
      <div className='w-96 h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 bg-black'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button onClick={() => setColor('red')} 
                    className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                    style={{backgroundColor: 'red'}}>
              Red
            </button>
            <button onClick={() => {setColor('blue')}} 
                    className='outline-none px-4 py-1 rounded-full text-black shadow-lg'
                    style={{backgroundColor: 'blue'}}>
              Blue
            </button>
          </div>
        </div>
      </div>
    )
  </>
*/