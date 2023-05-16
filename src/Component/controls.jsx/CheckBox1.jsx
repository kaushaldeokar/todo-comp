import * as React from 'react';
import { green} from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';


export default function Checkbox1() {
  return (
    <span>
      <Checkbox
        sx={{
          color: green[800],
          '&.Mui-checked': {
            color: green[600],
          },
        }}
      />
        
    </span>
  );
}