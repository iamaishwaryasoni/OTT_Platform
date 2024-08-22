import React, { lazy, Suspense } from 'react'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Browse from './Browse'
import Login from './Login'
import MainMovieDescription from './MainMovieDescription';
// import MovieDescription from './MovieDescription'


// const MovieDescription = lazy(() => import("./MovieDescription"));

const Body = () => {

  const appRouter = createBrowserRouter([
    {
      path:"/",
      element: <Login />
    },
    {
      path: "/browse",
      element: <Browse />
    },
    {
      path: "/movieDescription/:movieId",
      element: <Suspense fallback= {<h1>Loading</h1>
      }>
        <MainMovieDescription />
      </Suspense> 
    }
  ]);

   return (
    <div>
     <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
