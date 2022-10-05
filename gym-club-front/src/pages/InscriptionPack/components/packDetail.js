import { Box,Button,Typography } from "@mui/material";
import React from "react";
import ListObject from "../../../components/common/listObject";
export default function PackDetail({id,title,prix,activities,services,onClick}){
    return(
            <Box sx={{display:"flex",height:{md:"90%"},justifyContent:"center",alignItems:"center",padding:"12px",flexDirection:"column"}}>
                <Box sx={{
                    color:"white",
                    width:{md:"80%"},
                    display:"flex",
                    justifyContent:"center",flexDirection:"column",backgroundColor:"#2CB67D",borderRadius:"15px"}}
                    >
                    <Box>
                        <Typography fontFamily={"Consolas"} textAlign={"center"} padding={"5px"} variant="h3">{`PACK ${title.toUpperCase()}`}</Typography>
                    </Box>  
                        <Box sx={{display:"flex",justifyContent:"center",flexDirection:{xs:"column",md:"row"}}}>
                                <ListObject title={"SERVICES"} list={services.map(s=>(s.nom))}/>
                                <ListObject title={"ACTIVITES"} list={activities.map(ac=>(ac.nom))} />
                        </Box>
                        <Typography color={"black"} fontFamily={"Consolas"} textAlign={"center"} fontWeight={"bold"} fontSize={"35px"}>{prix}DH</Typography>
                    </Box>
                    <Button
                         onClick={onClick}
                         id={id}
                         sx={{
                            backgroundColor:"black",
                            color:"white",
                            border:"1px solid black",
                            width:{xs:"80%",md:"90%"},
                            margin:"6px",
                        }}>
                            CHOISIR CE PACK
                </Button>
            </Box>        
    )
}