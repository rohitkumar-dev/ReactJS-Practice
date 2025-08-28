import React, {useState, useEffect } from 'react'
import { useLoaderData } from 'react-router-dom'

export default function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(()=>{
    //     fetch('https://api.github.com/users/rohitkumar-dev')
    //     .then(response=> response.json())
    //     .then(data=>{
    //         setData(data)
    //         console.log(data)
    //     })
    // },[])

    return (
        <div className='text-center m-4 bg-gray-400 text-white p-4 text-3xl'>Github followers: {data.followers}
            <img className='mx-auto' src={data.avatar_url} alt="github img"/>
        </div>
    )
}


export const githubInfoLoader = ()=>{
    return fetch("https://api.github.com/users/rohitkumar-dev")
    .then((res)=> {
        if (!res.ok) {
        throw new Error("Failed to fetch GitHub info");
      }
        return res.json()
    })
}

