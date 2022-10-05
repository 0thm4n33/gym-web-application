import { Box, Radio, Typography } from "@mui/material";
import React from "react";

export default function PaymentMethode({name,checked,onCheck}){
  return(
      <Box sx={{padding:"10px",width:"45%",display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column"}}>
          <Typography fontFamily={"Consolas"} fontWeight={"bold"} fontSize={"30px"}>{name}</Typography>
          {checked !== true ? 
            <Radio value={name} onChange={onCheck} /> : 
            <Radio value={name} onChange={onCheck} defaultChecked /> 
            }
      </Box>
  )
}