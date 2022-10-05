import React,{useEffect, useState} from "react";
import { Box,Button,Dialog,DialogActions,DialogContent,Divider, IconButton, Modal, TextField } from "@mui/material";
import {Add,Remove} from "@mui/icons-material"
import Service from "../../services";
import Form from "../forms/Form";

export default function ModalComponent(){
    const [open,setOpen] = useState(false);
    const [services,setService] = useState([]);
    const [cours,setCours] = useState('');
    let allServices = Service.getCours();

    const inputs = [
        {
            label:"service",type:"select",
            options:["Fitness","Cycling","TRX"],
            required:true,width:"100%"
        },
        {
            label:"cours",type:"select",
            options:["Body Attack","Pilate","Body Bump","Sprint","TRX IRON"],
            required:true,width:"100%"
        }
    ]

    const handleOnOpen = ()=>{
        setOpen(!open)
    }

    const handleOnClose = () =>{
        setOpen(false);
    }



    const handleOnChange = () =>{

    }

    return(
        <>
            <IconButton onClick={handleOnOpen}>
                <Add />
            </IconButton>
            <Dialog open={open} onClose={handleOnClose}>
                <DialogContent>
                    <Box component={"form"} display={"flex"} flexDirection={"column"} margin={"5px"}>
                            <Form inputs={inputs} handleOnChange={handleOnChange} /> 
                    </Box>
                </DialogContent>
                <DialogActions>
                    <Button>Ajouter</Button>
                </DialogActions>
            </Dialog>
        </>
    )
}