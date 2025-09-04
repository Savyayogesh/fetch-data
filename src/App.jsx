import { useState } from 'react'
import Greet from './component/Greet'
import './App.css'
import Counter from './component/Counter'
import Dashboard from './Dashboard/Dashboard'
// import 'bootstrap/dist/css/bootstrap.min.css';
import WelcomeGreetings from './component/DocumentTitle'


function App() {


  return (
    <>
    <WelcomeGreetings name='Swati Gupta' />
    <Dashboard />
    {/* <Counter /> */}
      <Greet />
    </>
  )
}

export default App