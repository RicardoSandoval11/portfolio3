import { Routes, Route } from "react-router-dom"
import { MainPage } from "../pages/MainPage"


export const MainRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<MainPage/>}
      >
      </Route>
    </Routes>
  )
}

