import React, {useState} from "react";
import { Box, Typography, Grid, Switch, Divider, Button, Paper } from "@mui/material";

import "./App.css";

const App = () => {

  return (
    <Box sx={{boxSizing: 'border-box'}}>
      <Box py={5}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column'
       }}
      >
        <Typography variant="h3">Our Pricing</Typography>

        <Box py={2} sx={{display: 'flex'}}>
          <Typography variant="h5">
            Annually
            <Switch></Switch>
            Monthly
          </Typography >
        </Box>
      </Box>

      <Box>
        <Grid container px={7} alignItems="center" justifyContent="center"  flexDirection="row" boxSizing="border-box" gap="10px" >

          <Grid item id="zoom" justifyContent="flex-start" width="30%"   >
              <Paper elevation="5" >
            <Box py={2}  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h5">
              Basic
            </Typography>
            </Box>
            <Box flexDirection="column">
              <Box  pb={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h4">
              $19.99
            </Typography>
            </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  500 GB Storage
                </Typography>
              </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  2 Users Allowed
                </Typography>
              </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  Send up to 3 GB
                </Typography>
              </Box>
              <Divider />
              <Typography variant="h8">
                <Box py={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button variant ="outlined">Learn More</Button>
              </Box>
              </Typography>
            </Box>
              </Paper>
          </Grid>
          
          <Grid item justifyContent="flex-start" width="30%" id="zoom" >
              <Paper elevation="5" >
            <Box py={2}  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h5">
              Professional
            </Typography>
            </Box>
            <Box flexDirection="column">
              <Box  pb={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h4">
              $24.99
            </Typography>
            </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  1 TB Storage
                </Typography>
              </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  5 Users Allowed
                </Typography>
              </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  Send up to 10 GB
                </Typography>
              </Box>
              <Divider />
              <Typography variant="h8">
                <Box py={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button variant ="outlined">Learn More</Button>
              </Box>
              </Typography>
            </Box>
              </Paper>
          </Grid>
             
          <Grid item justifyContent="flex-start" width="30%" id="zoom" >
              <Paper elevation="5"  >
            <Box py={2}  sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h5">
              Master
            </Typography>
            </Box>
            <Box flexDirection="column">
              <Box  pb={2} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Typography variant="h4">
              $39.99
            </Typography>
            </Box>
              <Divider px={2} />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  2 TB Storage
                </Typography>
              </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  10 Users Allowed
                </Typography>
              </Box>
              <Divider />
              <Box py={1} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <Typography variant ="h8">
                  Send up to 20 GB
                </Typography>
              </Box>
              <Divider />
              <Typography variant="h8">
                <Box py={5} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Button variant ="outlined">Learn More</Button>
              </Box>
              </Typography>
            </Box>
              </Paper>
          </Grid>

          </Grid>
        
      </Box> 
    </Box>
  );
};
export default App;