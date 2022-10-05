import { Box } from "@mui/system";
import React from "react";
import { useParams } from "react-router-dom";
import Service from "../../services";
import ListCoursComponent from "../../pages/PlanningStack/components/listCours";

export default function AdherentPage(){
    const { id } = useParams();
    const adh = Service.getAdhs().find(adh => adh.id === id);
    return(
        <Box>
            <ListCoursComponent services={adh.abonnement.service} />
        </Box>
    )
}