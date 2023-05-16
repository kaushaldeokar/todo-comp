import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Checkbox1 from './controls.jsx/CheckBox1';

const Item = styled(Paper)(({ theme }) => ({

  padding: theme.spacing(4),

}));

export default function customCheckBox(props) {
  const { Task } = props;
  
  return (
    <Box sx={{ flexGrow: 2 }}>
      <Grid container spacing={3} >

        <Grid item xs={6} md={8}>
          <Item> <Checkbox1 /> <span>{Task}</span> </Item>
        </Grid>
       

      </Grid>
    </Box>
  );
}