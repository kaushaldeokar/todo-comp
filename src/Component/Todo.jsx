import React from 'react'
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CustomCheckBox from './CustomCheckBox';
const Todo = () => {

    const [val, setVal] = useState("");
    const [arr, Setarr] = useState([]);
    const [isShown, setIsShown] = useState(false);

    const addVal = () => {
        Setarr([...arr, val]);
    }

    const del = (idx) => {
        let red = [...arr];
        console.log(red);
        red.splice(idx);
        Setarr(red);

    }


    return (
        <div>

            <h3>TodoList</h3>


            <div>

                {
                    arr.map((e, i) => {
                        return (
                            <div style={{ display: 'flex', flexDirection: "row" }} id={i} key={i} onMouseEnter={() => setIsShown(true)}
                            onMouseLeave={() => setIsShown(false)}>

                                <CustomCheckBox Task={e} />
                                <div className="btn" >
                                        {
                                            isShown && <Button variant="contained" color="success" onClick={() => del(i)} >X</Button>
                                        }
                                    
                                    </div>


                            </div>

                        );
                    })
                }

            </div>



            <Box
                sx={{
                    width: 500,
                    maxWidth: '100%',
                    backgroundColor: 'white',
                }}
            >
                <TextField fullWidth label="Add Your Task Here.." id="fullWidth" value={val} onInput={(e) => setVal(e.target.value)}
                    InputProps={{ endAdornment: <Button variant="contained" color="success" onClick={addVal}>ADD</Button> }}
                />

            </Box>


        </div>
    )
}

export default Todo
