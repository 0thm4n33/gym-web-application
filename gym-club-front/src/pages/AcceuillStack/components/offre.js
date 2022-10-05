import { Box, Typography } from "@mui/material";
import React from "react";

export default function OffreComponent({nom,prix}){
    return(
        <Box sx={{backgroundColor:"black",border:"none",padding:"10px",boxShadow:"5px 8px 8px gray"}}>
            <div sx={{padding:"10px",margin:"40px"}}>
                <Typography color={"#94A1b2"} variant="h5" fontWeight={"bold"} fontFamily={"Bitter"}>
                    OFFRE
                </Typography>
                <Typography variant="h4" color={"#7f5af0"} fontWeight="bold" fontFamily={"Bitter"}>
                    {nom}
                </Typography>
            </div>
            <div sx={{padding:"10px",margin:"10px"}}>
                <Typography variant="h5" sx={{backgroundColor:"#7f5af0",fontFamily:"Bitter",marginTop:"20px",padding:"10px",color:"white"}}>
                    AVEC ENGAGEMENT (12 MOIS)
                </Typography>
            </div>
            <div sx={{margin:"40px"}}>
                <Typography variant="h3" color={"#94A1b2"} sx={{fontFamily:"Bitter",fontWeight:"bold",margin:"10px"}}>390DH</Typography>
            </div>
            <Typography color={"#94A1b2"}>Frais d’inscription 390,90DH</Typography>
            <Typography color={"#94A1b2"}>Option sans engagement : +50DH /mois</Typography>
        </Box>
    )
}