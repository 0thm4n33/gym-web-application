import { Box,Divider, Typography } from "@mui/material";
import React from "react";
export default function CoursRow({cours}){
    return(
        <>
            <Box margin={"5px"} display={"grid"} padding={"10px"} gap={10} gridTemplateColumns={`repeat(3,2fr)`}>
            <Box fontFamily={"Consolas"} fontWeight={"bold"} padding={"10px"} fontSize={"20px"}>
                {cours.debut} {">"} {cours.fin}
            </Box>
            <Box fontFamily={"Consolas"} fontWeight={"bold"} fontSize={"30px"}>{cours.nom}</Box>
                    <Box component={"span"} display={"flex"} gap={5}>
                        {[`${cours.duree}MIN`,cours.niveau,cours.nom].map((v)=>(
                            <Typography  fontFamily={"Consolas"} fontWeight={"bold"}>{v}</Typography>
                        ))}
                    </Box>
            </Box>
            <Divider  />
        </>
    )
}