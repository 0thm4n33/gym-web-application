import { List, ListItem, Stack } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React, { useState } from "react";
const basic = {
    color:"white",
    fontFamily:"Consolas",
    fontSize:"20px",
    fontWeight:"bold"
}
const useStyle = makeStyles({
    basic:{
       ...basic
    },
    active:{
        ...basic,
        fontSize:"40px"
    }
})

export default function WeekComponenet({days,onChange}){
    const classes = useStyle();
    const [choicedDay,setDay] = useState("Lundi");
    
    const onClickDay = (event)=>{
        const day = event.target.innerText;
        setDay(day);
        onChange(day);
    }

    return(
    <Stack display={"flex"} sx={{backgroundColor:"black"}}>
            <List sx={{
                display:"flex",
                flexDirection:{md:"row",xs:"column"},
                width:"100%",
                backgroundColor:"#2CB67D"
                }}>
                {
                    days.map((day=>(
                        <ListItem onClick={onClickDay} className={day === choicedDay ? classes.active : classes.basic}  button>
                            {day}
                        </ListItem>
                    )))
                }
            </List>
    </Stack>
    )
}