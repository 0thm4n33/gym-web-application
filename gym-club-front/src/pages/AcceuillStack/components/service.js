import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function ServiceComponenet({imagePath,nom}){
    return(
        <Box
            display={"flex"} 
            component={"div"} 
            height={"60%"}
            margin={"auto"}
            paddingTop={"18%"}
            sx={{width:"90%",overflow:"hidden"}}
            >       
            <Box component={"div"} sx={{backgroundColor:"black",width:"100%"}}>
                <Box
                    sx={{opacity:"0.3"}}
                    width={"100%"}
                    component={"img"}
                    src={require(`../${imagePath}`)}
                />
                <Box 
                    component={"div"}
                    color={"white"}
                    textAlign={"center"}
                    sx={{bottom:"45%",right:"40%",position:"sticky"}}
                    >
                    <Typography color={"#94A1b2"} variant="h4" fontWeight={"bold"}>{nom}</Typography>
                </Box>
            </Box>
        </Box>
    )
}