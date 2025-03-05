import React from 'react'
import  Usercontext  from '../context/Usercontext'

const ProfileCard = () => {

  const { user } = React.useContext(Usercontext)
  return (
    <div className='w-full h-full flex justify-center items-center pt-3'> 
      <div className=' border-2 text-white font-bold text-3xl  border-gray-500 w-120 h-70 rounded flex flex-col justify-center items-center'>
       walcome {user && <h1 className=' font-medium text-2xl capitalize text-blue-800'> {user.fname} {user.lname}</h1>}
      </div>
       
       
    </div>
  )
}

export default ProfileCard
  