import { Box, MenuItem, TextField } from "@mui/material";
import React from "react";

export default function Form({handleOnChange}){
    const inputs = [
        {label:"nom",type:"text",required:true,width:"48%"},
        {label:"prenom",type:"text",required:true,width:"48%"},
        {label:"civilite",type:"select",options:["Mme","M."],required:true,width:"48%"},
        {label:"email",type:"email",required:true,width:"48%"},
        {label:"dateNaissance",type:"date",required:true,width:"48%"},
        {label:"adresse",type:"text",required:true,width:"48%"},
        {label:"password",type:"password",required:true,width:"48%"},
        {label:"new-password",type:"password",required:true,width:"48%"},
        {label:"postal",type:"number",required:true,width:"30%"},
        {label:"ville",type:"select",options:["Fes","Meknes","Taza"],required:true,width:"66.1%"},
    ]

    const OnChange = (event)=>{
        handleOnChange(event.target);
    }

    return(
        <Box component={"form"} margin={"10px"}>
            {
                [inputs.map(({label,type,options,required,width})=>(
                    type === "select" ? 
                    <TextField onChange={OnChange} name={label} defaultValue={options[0]} select label={label} 
                        sx={{margin:"5px",width:{md:width,xs:"100%"}}}>
                        {options.map(option=>(
                            <MenuItem value={option} key={option}>{option}</MenuItem>
                        ))}
                    </TextField> :
                    <TextField name={label} onChange={OnChange} label={label} type={type} required={required} sx={{margin:"5px",width:{md:width,xs:"100%"}}}/>
                ))]
            }
        </Box>
    )

}