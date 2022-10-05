import { Box, Typography } from "@mui/material";
import React from "react";
export default function CoursComponent({cours}){
    const image = require('../images/body-bump.png');
    return(
    <Box justifyContent={"center"} width={"90%"} margin={"5px"} display={"flex"} padding={"10px"}>
        <Box component={"img"} src={image} sx={{height:"90%",width:"60%"}} />
        <Box sx={{backgroundColor:"white",border:"1px solid black",opacity:"90%"}} position={"relative"} width={"80%"} right={"10%"} top={"25%"} height={"40%"} padding={"5px"}>
          <Typography fontWeight={"bold"} fontSize={"30px"} fontFamily={"Consolas"}>
                  {cours.nom}
          </Typography>
           <Box  display={"flex"} gap={3} justifyContent={"center"}>
                  <Typography fontWeight={"bold"} fontFamily={"Consolas"}>
                      {cours.duree} MIN
                  </Typography>
                  <Typography fontWeight={"bold"} fontFamily={"Consolas"}>
                      {cours.niveau}
                  </Typography>
            </Box>
        </Box>
      </Box>
    )
}