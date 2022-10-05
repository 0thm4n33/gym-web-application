import { Box, Card, CardMedia, Typography } from "@mui/material";
import React from "react";
import {style} from '../index';
export default function Description({image,title,subtitle}){
    return(
    <Box>
        <Card sx={{backgroundColor:"black",margin:"2px"}}>
            <CardMedia 
                component={"img"}
                image={image}
                height={400}
                sx={{opacity:"0.5"}}
            />
            <div className={style.text}>
                <Typography 
                    color={"white"} 
                    variant="h2" 
                    fontWeight={"bold"} 
                    fontFamily={"Bitter"}
                >
                    {title}
                </Typography>
                <Typography 
                    color={"#white"} 
                    variant="h8" 
                    fontWeight={"bold"} 
                    fontFamily={"Bitter"}
                >
                    {subtitle}
                </Typography>
            </div>
        </Card>
        <Box sx={{backgroundColor:"black",width:"70%",margin:"20px"}}>
                <Typography 
                    variant="h4" 
                    fontWeight={"bold"} 
                    fontFamily={"Bitter"} 
                    style={{color:"white"}}
                >
                    DES COURS / DES COACHS SANS ENGAGEMENT.
                </Typography>
        </Box>
    </Box>
    )
}