import { RadioGroup } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import PaymentMethode from "../../pages/InscriptionPack/components/paymentBox";

export default function PaymentInfo({adh}){
    const [method,setMethod] = useState('');
    const onSelectedMethod = (event) =>{
        console.log(event.target);
        setMethod(event.target.value);
    }
    return(
        <RadioGroup>
                <Box sx={{display:"flex",gap:"5px",flexWrap:"wrap"}}>
                    {["Paypal","Visa Card"].map(m=>(
                        <PaymentMethode onCheck={onSelectedMethod} name={m} checked={adh.payment.toLowerCase()  === m.toLowerCase()}/>
                    ))} 
                </Box>
        </RadioGroup>
    )
}