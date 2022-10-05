import { Box, Typography } from "@mui/material";
import React from "react";
import {OffreComponent,style} from '../index';
export default function OffreList({offres}){
    return(
        <Box marginTop={5}>
            <div className={style.titleOffre}>
                    <Typography color={"white"} variant="h3" fontWeight={"bold"} fontFamily={"Bitter"}>DÉCOUVREZ</Typography> 
                    <Typography color={"white"} variant="h3" fontWeight={"bold"} fontFamily={"Bitter"}>nos offres</Typography> 
                </div>
                <Box sx={{flexDirection:{xs:"column",md:"row"},justifyContent:"center"}} className={style.offres}>
                    {
                        offres.map(offre => (
                            <Box sx={{margin:"10px",textAlign:"center",width:{md:"50%"}}}>
                                <OffreComponent nom={offre}/> 
                            </Box>
                        ))
                     }
                </Box>
                <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",backgroundColor:"black"}}>
                    <Typography 
                        variant="h3" 
                        fontFamily={"Bitter"} 
                        textAlign={"center"} 
                        padding={"10px"}
                        color={"#7f5af0"}
                        fontWeight={"bold"}
                        >ELLES DONNENT ACCES A :
                    </Typography>
                    <Box sx={{color:"white",width:"65%",textAlign:"center",margin:"20px"}}>
                        <Typography color={"#94A1b2"} variant="div" fontWeight={"bold"}>
                            Cours collectifs de Fitness / RPM cinéma et coaché / Functional training / Cross Training / Boxe /
                            TRX / Grit / Circuit Training / Sprint / Yoga / Espace Musculation / Cardio-Training
                        </Typography>
                    </Box>
                </Box>  
        </Box>
    )
}