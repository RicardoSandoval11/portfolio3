import { Grid } from "@mui/material"; 
import { PortfolioLayout } from "../../layout/PortfolioLayout";

export const MainPage = () => {
  return (
    <PortfolioLayout>
      <Grid
          container
          sx={{
              minHeight: '100vh',
              backgroundColor: 'secondary.main',
              padding:4,
              color: 'white'

          }}
      >
        Main page
      </Grid>
    </PortfolioLayout>
  )
}

  


