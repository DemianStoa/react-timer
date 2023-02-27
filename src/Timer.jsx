import React, { useState, useRef } from 'react'

const Timer = () => {
    const [name, setName] = useState("")
    const [seconds,setSeconds] = useState(0)
    const renders = useRef(0)
    const inputRef = useRef()
    const timerId = useRef(-1)

    const handleChange = (e) => {
         setName(e.target.value)
         renders.current++
    }
    const startTimer = () =>{
        if(timerId.current === -1){
            timerId.current = setInterval(() => {
            renders.current++;
            setSeconds(prev => prev + 1)
        }, 1000)
       }
        inputRef.current.focus()
    }
    const pauseTimer = () =>{
       clearInterval(timerId.current)
       console.log(timerId.current)
       timerId.current=-1
       
        inputRef.current.focus()
    }
    const resetTimer = () =>{
       pauseTimer()
       if(seconds) {
        renders.current++
        setSeconds(0)
       }
        inputRef.current.focus()
    }

  return (
    <div>
        <input type="text" value={name}
        onChange={handleChange}
        ref={inputRef}
        />
        <label htmlFor='renders'>Renders: </label>a
        <div id="renders">{renders.current}</div>
        <div className='timer'>{seconds}</div>
        <button onClick={startTimer}>Start Timer</button>
        <button  onClick={pauseTimer}>Pause Timer</button>
        <button  onClick={resetTimer}>Reset Timer</button>
        <p>{name}</p>
    </div>
  )
}

export default Timer