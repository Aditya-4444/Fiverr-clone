import React from 'react'
//import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './Pages/home/Home'
import Gigs from './Pages/gigs/Gigs'
import Gig from './Pages/gig/Gig'
import Add from './Pages/add/Add'
import Orders from './Pages/orders/Orders'
import Messages from './Pages/messages/Messages'
import Message from './Pages/message/Message'
import MyGigs from './Pages/myGigs/MyGigs'
import "./App.scss" 

import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import Navbar from './components/navbar/Navbar';

function App() {
  const Layout=()=>{
    return(
      <div className='app'>
      <Navbar/>
      <Outlet/>
      <Footer/>
      </div>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout/>,
      children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/gigs",
        element:<Gigs/>
      },
      {
        path:"/gig/:id",
        element:<Gig/>
      },
      {
        path:"/orders",
        element:<Orders/>
      },
      {
        path:"/mygigs",
        element:<MyGigs/>
      },
      {
        path:"/add",
        element:<Add/>
      },
      {
        path:"/messages",
        element:<Messages/>
      },
      {
        path:"messages/message/123",
        element:<Message/>
      }
    ]
    },
  ]);

  return (
    <div>
     <RouterProvider router={router} />
   
    </div>
  );
}

export default App;
