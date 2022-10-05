import { Box } from "@mui/material";
import React, { useEffect } from "react";
import { useState } from "react";
import {PackDetail,packHelper} from '../index';
import SwipeList from "../../../components/common/swipList";

export default function ListPack({onPackClick}){
    const [packs,setPacks] = useState([]);
    useEffect(()=>{
        async function fetchData(){
            if(packs.length === 0){
                const result = await packHelper.getPacks();
                setPacks(result);
            }
        }
        fetchData()
    },[packs])
    return(
        <Box margin={"10px"} sx={{padding:"5px",backgroundColor:"#ffffff33",
        boxShadow:"0 4px 40 px #0000001a",backdropFilter:"blur(5px)"
        }}>
            <SwipeList  length={packs.length}>
                {packs.map((pack)=>(
                    <PackDetail 
                        key={pack.title}
                        id={pack.id}
                        title={pack.title} 
                        prix={pack.prix}
                        activities={pack.cours}
                        services={pack.services}
                        onClick={onPackClick}
                    />
                ))}
            </SwipeList> 
        </Box>
    )
}