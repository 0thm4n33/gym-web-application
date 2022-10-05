import { Box, Typography } from "@mui/material";
import React from "react";
import Form from "../forms/Form";

export default function AddMoniteur(){
    let inputs = [
        {label:"nom",type:"text",required:true,width:"45%"},
        {label:"prenom",type:"text",required:true,width:"45%"},
        {label:"specialite",type:"select",options:["BODY BUILDING","TRX","Cycling"],required:true,width:"45%"},
    ]
    const handleOnChange = (event) =>{

    } 

    return(
        <Box>
            <Typography variant="h4" sx={{textAlign:"center",fontFamily:"Consolas"}}>Ajouter un moniteur</Typography>
            <Form inputs={inputs} handleOnChange={handleOnChange} />
        </Box>
    )
}