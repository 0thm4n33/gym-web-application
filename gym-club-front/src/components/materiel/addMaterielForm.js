import { Box, Button, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Form from "../forms/Form";

export default function AddMatriel(){
    const optionsCategory = ["Electrique","Machine","Objet"];
    const optionStatus = ["Fontionnel","En Panne"]
    const inputs = [
        {label:"marque",type:"text",required:true,width:"45%"},
        {label:"designation",type:"text",required:true,width:"45%"},
        {label:"qte",type:"number",required:true,width:"45%"},
        {label:"categorie",type:"select",options:optionsCategory,required:true,width:"45%"},
        {label:"status",type:"select",options:optionStatus,required:true,width:"45%"}
    ]

    const [materiel,setMateriel] = useState({
        id:1,
        marque:"",
        designation:"",
        qte:0,
        categorie:1,
        status:1
    })

   

    const handleOnChange = (target) => {
        console.log(target.name);
        if(target.name === "categorie"){
            let value = optionsCategory.indexOf(target.value);
            setMateriel({...materiel,[target.name]:value});
        }else if(target.name === "status"){
            let value = optionStatus.indexOf(target.value);
            setMateriel({...materiel,[target.name]:value});
        }else if(target.name === "qte"){
            let value = parseInt(target.value);
            console.log(`value ${value}`);
            setMateriel({...materiel,[target.name]:value});
        }else{
            setMateriel({...materiel,[target.name]:target.value});
        }
    }

    const onSubmit = ()=>{
        setMateriel({...materiel,"categorie":0,"status":0});
        console.log(`materiel : ${JSON.stringify(materiel)}`);
        /*
        materielServices.addMateriel(materiel).then(response=>{
            console.log(`added ${response}`)
        }).catch(error=>{
            console.log(`error ${error}`)
        })*/
    }

    return(
        <Box sx={{margin:"auto",width:"98%"}}>
            <Typography>Ajout d'un nouveau materiel</Typography>
            <Form inputs={inputs} handleOnChange={handleOnChange} />
            <Stack flexDirection={"row-reverse"}>
                <Button onClick={onSubmit} color="warning">Ajouter</Button>
            </Stack>
        </Box>
    )
}