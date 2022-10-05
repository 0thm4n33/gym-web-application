import { Collapse, List, ListItem, ListItemText } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ItemSideBar({item,classes}){
    const [open,setOpen] = useState(false);
    const navigate = useNavigate();
    const onClickItem = () =>{
        setOpen(!open);
    }
    
    return(
        <>
            <ListItem className={classes.item} disablePaddinitem dense button>
                <ListItemText className={classes.textItem} onClick={onClickItem}>{item.name}</ListItemText>
                    </ListItem>
                        {Array.isArray(item.items) ? (
                            <Collapse in={open}>
                                <List disablePadding>
                                    {item.items.map(item=>(
                                        <ListItem onClick={()=>navigate(item.url)} className={classes.itemStyle} button>
                                            <ListItemText>{item.name}</ListItemText>
                                        </ListItem>
                                    ))}
                                </List>
                            </Collapse>
                        ) : null}
        </>
    )
}