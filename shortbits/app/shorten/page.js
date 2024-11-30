"use client"
import React, { useState } from 'react'

function Shorten  ()  {
    const [url, setUrl] = useState("")
    const [shorturl,setShorturl]=useState("")
    const [generated,setGenerated]=useState(false)

    const handelChange=()=>{

    }
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8  rounded-lg flex flex-col gap-2 '>
      <h1 className='font-bold text-2xl '>Generate Your Short Url</h1>
      <div className='flex flex-col gap-5'>
        <input type="text" className="p-2 focus:outline-purple-600  rounded-md" placeholder="Enter your long url" onChange={handelChange} />

        <input type='text'  className="p-4 py-2 focus:outline-purple-600  rounded-md" placeholder='Enter Your preferred short url'onChange={handelChange}/>

        <button className='bg-purple-700 rounded-lg shadow-lg py-1 px-2 my-3 text-white' >Generate</button>
      </div>
    </div>
  )
}

export default Shorten
