import React from 'react'
import { useContext } from 'react'
import Usercontext from '../context/Usercontext'

const Login = () => {
  const [fname, setFname] = React.useState('')
  const [lname, setLname] = React.useState('')

  const {  setUser } = useContext(Usercontext)
  const SubmitHandler = (e) => {
    e.preventDefault()
    setUser({ fname, lname })
    console.log(fname, lname)

    setFname('');
    setLname('');
  }

  return (
    <div className=' flex flex-col justify-start items-center' >
      <form onSubmit={(e) => SubmitHandler(e)} className='   w-1/2 h-30 bg-transparent rounded bg-blur-2xl @supports(backdrop-filter: blur(0)) bg-opacity-90 border-2 border-gray-500 flex  justify-center gap-5 items-center'>
        <div >
          <label className=' block mb-2 text-sm font-medium text-gray-900 dark:text-white ' htmlFor="text">Write your frist Name</label>
          <input className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  w-50 p-2.5 " type="text" value={fname}
          onChange={(e) => setFname(e.target.value)} name="email" id="email" />
        </div>
        <div>
          <label className=" block mb-2 text-sm font-medium text-gray-900 dark:text-white " htmlFor="text">Last name</label>
          <input value={lname} onChange={(e) => setLname(e.target.value)} className=" shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-50 p-2.5 " type="text"  id="name" />
        </div>
        <button type="submit" className=' mt-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-40'> Login </button>
      </form>
    </div>
  )
}
 
export default Login
