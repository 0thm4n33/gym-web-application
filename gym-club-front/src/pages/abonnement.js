import { Add } from "@mui/icons-material";
import { RadioGroup, TextField, Typography,List, Button, Stack, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import InfoComponent from "../components/adherents/info";
import PaymentInfo from "../components/adherents/payment";
import ListCoursComponent from "./PlanningStack/components/listCours";
import ModalComponent from "../components/modals/modals";
import Service from "../services";

export default function AbonnementPage(){
    const { id  } = useParams();
    const adh = Service.getAdhs().find(adh => adh.id === id);
    console.log(`adhs: ${adh}`);
    return(
        <Box>
            <Box display={"grid"} gridTemplateColumns={"repeat(2,1fr)"}>
                <InfoComponent adh={adh} title={"Information Personelle"} />
                <Box padding={"5px"}>
                    <Typography fontFamily={"Consolas"} fontWeight={"bold"}>Information de payment</Typography>
                    <PaymentInfo adh={adh} />
                </Box>
            </Box>
            <Box>
                <Box sx={{display:"flex",justifyContent:"space-between"}}>
                    <Typography fontFamily={"Consolas"} fontWeight={"bold"}>Inforamtion d'abonnement: {adh.abonnement.name}</Typography>
                    <ModalComponent />
                </Box>
                <Box>
                    <ListCoursComponent services={adh.abonnement.service} admin={true} />
                </Box>
            </Box>
            <Stack flexDirection={"row-reverse"}>
                <Button sx={{fontWeight:"bold",fontSize:"20px"}}>Modifier</Button>
            </Stack>
        </Box>
    )
}