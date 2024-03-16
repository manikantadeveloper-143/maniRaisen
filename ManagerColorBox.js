// App.jsx

import React from 'react'
import Element from './Element'

const App = () => {
  return (
    <div>
      <Element/>
    </div>
  )
}

export default App

//BOX.JS////////////////////////////////////////////////////////////////

import React, { useEffect, useRef } from 'react'

const Box = ({time}) => {

  const div = useRef(null)

  useEffect(()=>{
    const id = setTimeout(()=>{

      div.current.style.backgroundColor = 'white'

    },1000*time)

    return () => clearTimeout(id)

  },[])

  return (
    <div ref={div}></div>
  )
}

export default Box

////////////ELEMENT.JS /////////////////

import React, { useEffect, useState } from 'react'
import Box from './Box'
import './styles.css'

const counter = () => {
  const count = []
  for(let i=1;i<=60;i++){
    count.push(i)
  }
  return count
}

const Element = () => {

   const [count,setCount] = useState(counter)

   useEffect(() => {

    if(!count.length) setCount(counter)
      
    const id = setInterval(() => {
        setCount([])
    }, 60500);

    return () => clearInterval(id)

   },[count])

  return (
    <div className='container'>
      {
        count.map((item,i) => <Box key={i} time={item} />)
      }
    </div>
  )
}

export default Element

////////////STYLES.CSS ////////////////

// .container{
//     background-color: grey;
//     display: grid;
//     padding:10px;
//     grid-template-columns: auto auto auto auto auto auto auto auto auto auto ;
//   }
//   .container>div{
//     height: 100px;
//     width:100px;
//     background-color: black;
//     margin: 10px;
//   }