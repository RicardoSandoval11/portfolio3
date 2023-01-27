import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { NavBar } from "../components/NavBar";



 export const PortfolioLayout = ({children}) => {
    return (
        <Box 
            sx={{ display: 'flex' }}
        >
            { /* NavBar */ }
            <NavBar/>
            <Box
                component='main'
                sx={{ flexGrow: 1 }}
            >
                <Toolbar/>
                { children }
            </Box>
        </Box>
    )
 }