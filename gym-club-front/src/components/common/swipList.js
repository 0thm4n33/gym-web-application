import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import SwipeableViews from "react-swipeable-views/lib/SwipeableViews";


export default function SwipeList({children,length}){
    const [steper,setSteper] = useState(0);
    const max = length;
    
    const onNextClick = () =>{
        const value = steper + 1;
        value < max && stepChange(value);
    }

    const onPrevClick = () =>{
        const value = steper - 1;
        value >= 0 && stepChange(value);
    }

    const stepChange = (value) =>{
        setSteper(value)
    }

    return(
        <Box
            marginTop={"9px"}
            sx={{
                    display:"flex",
                    width:"95%",
                    margin:"auto",
                    padding:"10px",
                    justifyContent:"center"
                }}
            overflow={"hidden"}
        >
            <Button sx={{color:"black"}} onClick={onPrevClick}>
                <ArrowBackIos />
            </Button>
            <Box sx={{width:{xs:"80%",md:"100%"},display:"flex",justifyContent:"center"}}>
                <SwipeableViews
                    index={steper}
                >
                    {children}
                </SwipeableViews>
            </Box>
            <Button sx={{color:"black"}} onClick={onNextClick}>
                <ArrowForwardIos />
            </Button>
        </Box>
    )
}