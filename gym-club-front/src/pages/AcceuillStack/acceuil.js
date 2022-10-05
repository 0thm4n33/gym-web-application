import { Box, Button, Typography } from "@mui/material";
import React from "react";
import Service from "../../services/index.js"
import { useNavigate } from "react-router-dom";
import {ServiceComponenet,OffreList,Description,style,gymImages} from "./index"; 
import SwipeList from "../../components/common/swipList";
export default function AcceuilPage(){
    const image = require('./images/gym.jpg');
    const navigate = useNavigate();
    return(
        <Box
            sx={{
            backgroundColor:'black',
            textAlign:'center',
        }}>
            <Description 
                image={image} 
                title={Service.gymName} 
                subtitle={"Le lieu emblématique du Fitness, découvrez nos univers sport dans une multitude d'espace."}
            />
            <div className={style.offreWrapper}>
                <OffreList offres={["Complet","Classic"]}/>
                <Box display={"flex"} justifyContent={"center"} sx={{backgroundColor:"black"}}>
                    <Button 
                        size="medium"
                        onClick={()=>navigate('/inscription-adherent')}
                        sx={{
                            margin:"10px",
                            backgroundColor:"#7f5af0",
                            color:"white",
                            width:"90%",
                            fontWeight:"bold"}}
                        >
                            Inscription

                    </Button>
            </Box>
            </div>
            <Box display={"flex"} flexDirection={"column"} margin={"auto"} alignItems={"center"}>
                    <Typography 
                        variant="h3" 
                        marginTop={"60px"}
                        fontFamily={"Bitter"}
                        fontWeight={"bold"} 
                        color={"whitesmoke"}                        
                    >
                        NOS SERVICES
                    </Typography>
                    <Box
                        display={"flex"}
                        alignItems={"center"}
                        justifyContent={"center"}
                        >
                        <SwipeList length={gymImages.length}>
                            {gymImages.map(service =>(
                                <ServiceComponenet
                                    imagePath={service.imagePath} 
                                    nom={service.nom} 
                                    />
                            ))}
                        </SwipeList>
                    </Box>  
            </Box>
        </Box>
    )
}