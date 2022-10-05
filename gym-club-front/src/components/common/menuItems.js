import { Button, Menu, MenuItem } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import React, { useState } from "react";

export default function MenuItems({menu}){
    const [anchorEl,setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    
    const handleOnClick = (event) =>{
        setAnchorEl(event.currentTarget);
    }

    const handleOnClose = () =>{
        setAnchorEl(null);
    }

    return(
        <div>
            {menu.map(m=>(
                <div>
                    <Button onClick={handleOnClick} endIcon={<KeyboardArrowDownIcon />}>{m.title}</Button>
                    <Menu 
                        open={open} 
                        elevation={0}
                        anchorEl={anchorEl}
                        anchorOrigin={{vertical:'bottom',horizontal:'right'}}
                        transformOrigin={{vertical:'top',horizontal:'right'}}
                        >
                        {m.items.map(item=>(
                            <MenuItem onClick={handleOnClose} disableRipple>{item.nom}</MenuItem>
                        ))}
                    </Menu>
                </div>
            ))}
        </div>
    )
}