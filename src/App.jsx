import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import Clock from './components/Clock'
import Layout from './Pages/Layout'
import Home from './Pages/Home'
import NoPage from './Pages/NoPage'
import Timer from './components/Timer'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}></Route>
            <Route path="clock" element={<Clock/>}></Route>
            <Route path="timer" element={<Timer/>}></Route>
            <Route path="*" element={<NoPage/>}></Route>
          </Route>
        </Routes>
      </Router>
      {/* <Clock></Clock> */}
    </>
  )
}

export default App
