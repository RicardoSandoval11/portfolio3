import { Route, Routes, Navigate } from 'react-router-dom';

import { Project1PageDjango } from '../pages/projects-Django/project1/Project1PageDjango';
import { Project2PageDjango } from '../pages/projects-Django/project2/Project2PageDjango';

import { Project1PageLaravel } from '../pages/projects-Laravel/project1/Project1PageLaravel'; 
import { Project2PageLaravel } from '../pages/projects-Laravel/project2/Project2PageLaravel'; 

import { Project1PageSpring } from '../pages/projects-SpringBoot/project1/Project1PageSpring';
import { Project2PageSpring } from '../pages/projects-SpringBoot/project2/Project2PageSpring';

import { Project1PageNode } from '../pages/projects-Nodejs/project1/Project1PageNode';
import { Project2PageNode } from '../pages/projects-Nodejs/project2/Project2PageNode';

import { ProjectsPage } from '../pages/ProjectsPage';


export const ProjectsRoutes = () => {
  return (
    <Routes>

        {/* Main projects page */}

        <Route 
            path='/' 
            element={<ProjectsPage/>}
        />

        {/* Django projects */}

        <Route 
            path='/project1-django' 
            element={<Project1PageDjango/>}
        />
        <Route 
            path='/project2-django' 
            element={<Project2PageDjango/>}
        />

        {/* Laravel projects */}

        <Route 
            path='/project1-laravel' 
            element={<Project1PageLaravel/>}
        />
        <Route 
            path='/project2-laravel' 
            element={<Project2PageLaravel/>}
        />

        {/* SpringBoot projects */}

        <Route 
            path='/project1-springboot' 
            element={<Project1PageSpring/>}
        />
        <Route 
            path='/project2-springboot' 
            element={<Project2PageSpring/>}
        />

        {/* Node js projects */}

        <Route 
            path='/project1-node' 
            element={<Project1PageNode/>}
        />
        <Route 
            path='/project2-node' 
            element={<Project2PageNode/>}
        />
        <Route
        path="/*"
        element={<Navigate to="/"/>}
        />
      
    </Routes>
  )
}


