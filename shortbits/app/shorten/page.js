"use client"
import React, { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
    const [url, setUrl] = useState("")
    const [shorturl,setShorturl]=useState("")
    const [generated,setGenerated]=useState("")

    const generate =()=>{
      const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

const raw = JSON.stringify({
  "url": url,
  "shorturl": shorturl
});

const requestOptions = {
  method: "POST",
  headers: myHeaders,
  body: raw,
  redirect: "follow"
};

fetch("/api/generate", requestOptions)
  .then((response) => response.json())
  .then((result) => {
    setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
    setUrl("")
    setShorturl("")
    console.log(result)
    
  })

  .catch((error) => console.error(error));
    }
  
   
  return (
    <div className='mx-auto max-w-lg bg-purple-100 my-16 p-8  rounded-lg flex flex-col gap-2 '>
      <h1 className='font-bold text-2xl '>Generate Your Short Url</h1>
      <div className='flex flex-col gap-5'>
        <input type="text"  value={url} className="p-2 focus:outline-purple-600  rounded-md" placeholder="Enter your long url" onChange={e=>{
          setUrl(e.target.value)
        }} />

        <input type='text' value={shorturl} className="p-4 py-2 focus:outline-purple-600  rounded-md" placeholder='Enter Your preferred short url'onChange={e=>{
          setShorturl(e.target.value)
        }}/>

        <button className='bg-purple-700 rounded-lg shadow-lg py-1 px-2 my-3 text-white' onClick={generate} >Generate</button>
         
      </div>
      {generated && <>
       <span className='font-bold text-lg'>Your Link</span> <code> <Link href=  {generated} target="_blank">{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
