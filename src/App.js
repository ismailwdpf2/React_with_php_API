import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import React from 'react'
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Contact from './Page/Contact/Contact';
import Players from './Page/Players/Players';
import Main from './Main';
import Footer from './Page/Footer/Footer';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/about",
          element: <About></About>
        },
        {
          path:"/contact",
          element:<Contact></Contact> 
        },
        {
          path:"/players",
          element:<Players></Players>
        }
      ]  
    },

  ]
  )
  return (
    <div>
      <RouterProvider router={router}></RouterProvider>
<Footer></Footer>
    </div>
  )
}

export default App
