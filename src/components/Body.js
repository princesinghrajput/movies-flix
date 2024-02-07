import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import ErrorPage from './pages/ErrorPage';

const Body = () => {
  const appRoute=createBrowserRouter([
    {
      path:'/',
      element:<Login/>
    },
    {
      path:'/browse',
      element:<Browse/>
    },
    {
      path:'/error',
      element:<ErrorPage/>
    }
  ])

 
  return (
    <div>
      <RouterProvider router={appRoute}/>
      
    </div>
  )
}

export default Body