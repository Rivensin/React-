import { useState, useCallback, useEffect, useRef } from 'react'

function App2() {
  const [length,setLength] = useState(8);
  const [copy,setCopy] = useState('copy')
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')
  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = '';
    let str = 'ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmopqrestuvwxyz'
    
    if(numberAllowed) str += '0123456789'
    if(charAllowed) str +='!@#$%^%&'

    for (let i = 0; i < length; i++) {
      const char = Math.floor(Math.random() * str.length+1) 
      pass+=str.charAt(char)
    }

    setPassword(pass)
  },[length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    setCopy('Copied!')
  }

  useEffect(() => {
    generatePassword()
  },[length,charAllowed,numberAllowed])

  return (
    <div>
      <h1 className='bg-red-400'>setup ready</h1>
      <div className='flex'>
        <input type="text" value={password} readOnly placeholder='password' ref={passwordRef}/>
        <button onClick={copyPasswordToClipboard}>{copy}</button>
      </div>
      <div className='flex'>
        <input className='cursor-pointer'
               type="range" 
               min={6} 
               max={100} 
               value={length} 
               onChange={e => {setLength(e.target.value)}}/>
        <label htmlFor="Length">Length : {length}</label>
      </div>
      <div className='flex'>
        <input type="checkbox" 
               defaultChecked={numberAllowed}
               onChange={() => {setNumberAllowed(prev => !prev)}}
               />
        <label htmlFor="number">Numbers</label>
        <input type="checkbox" 
               defaultChecked={charAllowed}
               onChange={() => {setCharAllowed(prev => {!prev})}}
               />
        <label htmlFor="character">Character</label>
      </div>
    </div>  
  )
}

export default App2
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