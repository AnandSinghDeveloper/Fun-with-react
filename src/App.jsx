import React from "react"
import UserContextProvider from "./context/UserContextProvider"
import Login from "./Components/Login"
import ProfileCard from "./Components/ProfileCard"


function App() {
 

  return (
    <>
      <UserContextProvider>
        <Login />
        <ProfileCard />
      </UserContextProvider>
    </>
  )
}

export default App
