import { Routes, Route, Navigate } from 'react-router-dom'
import { BackEndPage } from '../pages/BackEndPage'
import { FrontEndPage } from '../pages/FrontEndPage'

export const SkillsRoutes = () => {
  return (
    <Routes>
      <Route
        path='/front-end'
        element={<FrontEndPage/>}
      ></Route>
      <Route
        path='/back-end'
        element={<BackEndPage/>}
      ></Route>
      <Route
        path='/*'
        navigate
        element={<Navigate to='/'/>}
      ></Route>

    </Routes>
  )
}

