import './App.css'
import NotFound from './components/NotFound'
import Dashboard from './layouts/Dashboard'
import RootLayout from './layouts/RootLayout'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import {Route, RouterProvider,createBrowserRouter, createRoutesFromElements} from "react-router-dom"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path='/register' element={<Register/>}/>
        <Route path="/login" element={<Login/>} />
        <Route path='*' element={<NotFound/>}/>
      </Route>
    )
  )
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
