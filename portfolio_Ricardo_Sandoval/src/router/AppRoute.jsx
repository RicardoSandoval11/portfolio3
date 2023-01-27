import { Route, Routes } from "react-router-dom";
import { AcademicRoutes } from "../Academic/routes/AcademicRoutes";
import { MainRoutes } from "../main/routes/MainRoutes";
import { ProjectsRoutes } from "../projects/routes/ProjectsRoutes";
import { SkillsRoutes } from "../Skills/routes/SkillsRoutes";


export const AppRoute = () => {
  return (
    <Routes>

        {/* Main page */}

        <Route path='/' element={<MainRoutes/>}/>

        { /* Skill's page */ }

        <Route path="/skills/*" element={<SkillsRoutes/>}/>

        { /* Project's routes */ }

        <Route path="/projects/*" element={<ProjectsRoutes/>}/>

        { /* Academic profile */ }

        <Route path="/about/*" element={<AcademicRoutes/>}/>
      
    </Routes>
  )
}


