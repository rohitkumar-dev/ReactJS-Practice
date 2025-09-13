import React from 'react'

function AuthorCard() {
    const authorData = [
        {
            name: "Mohan",
            profile: "https://images.pexels.com/photos/5068301/pexels-photo-5068301.jpeg",
            type: "World Traveller",
        },
        {
            name: "Rama",
            profile: "https://images.pexels.com/photos/5428723/pexels-photo-5428723.jpeg",
            type: "Politician",
        },
        {
            name: "Shyam",
            profile: "https://images.pexels.com/photos/5068301/pexels-photo-5068301.jpeg",
            type: "Social Activist",
        },

    ]
  return (
    <div className=' sm:my-15'>
        { authorData && authorData.map((author,i)=>(
            <div className=' bg-red-300 mx-6 sm:mx-24 my-12 sm:my-15 pt-10 pb-5 rounded-lg'>
            <div key={i} className=' flex flex-col w-full items-center '>
                <img src={author.profile} alt="profile" className='h-50 w-50  rounded-full object-cover outline-8 outline-offset-8 outline-white border-2 border-white'/>
                <h2 className='pt-5 text-xl font-medium text-white'>{author.name}</h2>
                <p className='pt-1 text-sm font-medium text-white'>{author.type}</p>
            </div>
            </div>
        )) }
    </div>
  )
}

export default AuthorCard
