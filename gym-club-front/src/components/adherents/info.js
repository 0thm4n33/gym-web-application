import { Box, TextField, Typography } from "@mui/material";
import React from "react";

export default function InfoComponent({adh,title}){
    return(
        <Box>
                <Typography fontFamily={"Consolas"} fontWeight={"bold"}>{title}</Typography>
                <Box display={"flex"} flexDirection={"column"}>
                    {
                        [adh.nom,adh.prenom,adh.email].map(value=>(
                            <TextField sx={{marginBottom:"5px",padding:"5px"}} defaultValue={value} type={"text"}>
                                {value}
                            </TextField>
                        ))
                    }
                </Box>
        </Box>
    ) 
}