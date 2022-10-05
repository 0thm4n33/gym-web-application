import { Box,Typography } from "@mui/material";
import React from "react";
import {ListCoursComponent,planningHelper} from './index';
import { useState } from "react";
import { useEffect } from "react";

export default function PlanningPage(){ 
    const [cours,setCours] = useState([]);
    useEffect(()=>{
        if(cours.length === 0){
            planningHelper.getCours().then(data =>{
                setCours(data);
            }).catch(error =>{
                console.error(`error ${error}`);
            })
        }
    },[cours])

    return(
        <Box>
            <Typography  margin={"8px"} textAlign={"center"} fontWeight={"bold"} fontSize={"60px"} fontFamily={"Consolas"}>
                PLANNING
            </Typography>
            <Box>
                <ListCoursComponent services={cours} admin={false} />
            </Box>
        </Box>
    )
}