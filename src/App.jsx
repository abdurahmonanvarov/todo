import { createBrowserRouter, RouterProvider } from "react-router-dom"
import { useEffect, useState } from "react"
//component

//pages
import Home from "./pages/Home"
import Create from "./pages/Create"
import MainLoyout from "./loyouts/MainLoyout"

//loyouts
const getIfoFromLocol = () => {
  return JSON.parse(localStorage.getItem("todo")) || []
}

function App() {
  const [todo, setTodo] = useState(getIfoFromLocol())

  useEffect(() => {
    localStorage.setItem("todo", JSON.stringify(todo))
  }, [todo])
  const routers = createBrowserRouter([
    {
      path: "/",
      element: <MainLoyout/>,
      children: [
        {
          index: true,
          element: <Home todos={todo} setTodo={setTodo}/>
        },
        {
          path: "/create",
          element: <Create setTodo={setTodo}/>
        }
      ]
    },
  ])
  return <RouterProvider router={routers}/>
}

export default App