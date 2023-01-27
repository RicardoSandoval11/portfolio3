import { AppBar, 
    IconButton, 
    Toolbar, 
    Grid, 
    Typography } from "@mui/material";
import { MenuOutlined, LogoutOutlined } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ProjectsPage } from "../projects/pages/ProjectsPage";
import { margin } from "@mui/system";


export const NavBar = ({drawerWidth}) => {

    return (
        <AppBar position="fixed"
        sx={{
            width: { sm: `100%` },
            ml: { sm: `2px` }
        }}
        >
        <Toolbar
            className="tool-bar"
        >
            <Grid
                component='div'
                className="logo animate__animated animate__fadeInLeft"
            >
                <Typography 
                    variant="h6" 
                    component='div'
                >
                    Ricardo Sandoval
                </Typography>
            </Grid>
            <Grid
                component='div'
                className='navigation-links animate__animated animate__fadeInLeft'
            >
            <Link 
                to='/skills/front-end/'
                style={{
                    color: 'white', 
                    textDecoration: 'none'
                }}
            >
                <Typography 
                    variant="subtitle1" 
                    noWrap 
                    component='div'
                    sx={{
                        ':hover': {opacity: 0.5},
                        mx: 2
                    }}
                >
                    Front end skills
                </Typography>
            </Link>
            <Link 
                to='/skills/back-end/'
                style={{
                    color: 'white', 
                    textDecoration: 'none'
                }}
            >
                <Typography 
                    variant="subtitle1" 
                    noWrap 
                    component='div'
                    sx={{
                        ':hover': {opacity: 0.5},
                        mx: 2
                    }}
                >
                    Back end skills
                </Typography>
            </Link>
            <Link 
                to='/projects/'
                style={{
                    color: 'white', 
                    textDecoration: 'none'
                }}
            >
                <Typography 
                    variant="subtitle1" 
                    noWrap 
                    component='div'
                    sx={{
                        ':hover': {opacity: 0.5},
                        mx: 2
                    }}
                >
                    Projects
                </Typography>
            </Link>
            <Link 
                to='/about/'
                style={{
                    color: 'white', 
                    textDecoration: 'none',
                    mx: 2
                }}
            >
                <Typography 
                    variant="subtitle1" 
                    noWrap 
                    component='div'
                    sx={{
                        ':hover': {opacity: 0.5},
                        mx: 2
                    }}
                >
                    About me
                </Typography>
            </Link>
            </Grid>   
        </Toolbar>
        </AppBar>
    )
}