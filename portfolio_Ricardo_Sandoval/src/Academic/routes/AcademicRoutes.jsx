import { Routes, Route, Navigate } from 'react-router-dom'
import { AcademicPage } from '../pages/AcademicPage'

export const AcademicRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<AcademicPage/>}
      ></Route>
      <Route
        path='/*'
        navigate
        element={<Navigate to='/'/>}
      ></Route>
    </Routes>
  )
}