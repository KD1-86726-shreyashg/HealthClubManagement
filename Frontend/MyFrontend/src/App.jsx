import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Schedule from './Components/Classes'
import UserRegister from './Components/UserRegister'
import TrainerRegister from './Components/TrainerRegister'
import ResetPassword from './Components/ForgotPassword'
import UserProfile from './Components/UserProfile'
import FeedbackForm from './Components/FeedbackForm'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <TrainerRegister/> */}
      {/* <UserRegister/> */}
      {/* <Schedule /> */}
      <FeedbackForm />
      {/* <ResetPassword /> */}
      {/* <UserProfile /> */}
    </>
  )
}

export default App
