import { Box, Typography } from "@mui/material";
import React from "react";
import ListAdherent from "../components/adherents/listAdherents";

export default function AdminPage(){
    return(
        <Box  padding={"10px"} width={"99%"}>
            <Typography fontFamily={"Consolas"} fontSize={"30px"} textAlign={"center"}>{"Liste des adherents".toUpperCase()}</Typography>
            <ListAdherent />
        </Box>
    )
}