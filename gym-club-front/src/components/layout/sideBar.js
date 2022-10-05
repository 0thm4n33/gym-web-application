import { Box,Divider, List } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
import ItemSideBar from "../common/itemSideBar";
const useStyle = makeStyles({
    textItem:{
        textTransform:"uppercase",
        textAlign:"center",
        fontWeight:"bold",
    },
    item:{
        marginTop:"20px",
        borderBottom:"1px solid white",
    },
    itemStyle:{
        paddingLeft:"30px",
        marginBottom:"5px",
        "&:hover":{
            backgroundColor:"gray",
        }
    }
})
export default function SideBar({items}){
    const classes = useStyle();
    console.log(items);
    return(
        <Box sx={{
                border:"1px solid black",
                backgroundColor:"black",
                textAlign:"center",
                color:"white"
                }}>
            <Box sx={{display:"flex",padding:"5px",justifyContent:"center",borderBottom:"1px solid white"}}>
                    <Box sx={{fontWeight:"bold",fontSize:"large",padding:"10px"}}>ORY <Box sx={{display:"inline",border:"3px solid grey"}}>G</Box>
                    YM
                    </Box>
            </Box>
            <Divider />
            <List>
                {items.map((g)=>(
                    <ItemSideBar item={g} classes={classes} />
                ))}
            </List>
        </Box>
    )
}