import { Box, Typography } from "@mui/material";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {CoursComponent,coursHelper} from './index';

export default function CoursPage(){
    const [cours,setCours] = useState([]);
    
    useEffect(()=>{
        if(cours.length === 0){
            coursHelper.getCours().then(result => {
                setCours(result);
            })
        }
    },[cours]);
   
    return(
        <Box>
            {cours.map(c=>(
                <Box 
                    display={"flex"} 
                    flexDirection={"column"} 
                >
                    <Typography 
                        color={"white"} 
                        padding={"5px"}
                        textAlign={"center"} 
                        fontFamily={"Consolas"}
                        sx={{
                            backgroundColor:"black",
                            fontSize:"30px"
                        }} 
                    >
                        {c.name.toUpperCase()}
                    </Typography>
                    <Box display={"grid"} gridTemplateColumns={'repeat(2,1fr)'} gap={2}>
                        {
                            c.cours.map(co=>(
                               <CoursComponent cours={co} />
                            ))
                        }
                    </Box>
                </Box>   
            ))}
        </Box>
    )
}
