import { Box, StepLabel, Typography } from "@mui/material";
import React from "react";

export default function StepComponent({label,form}){
    return(
        <Box>
            <StepLabel>
                <Typography fontWeight={"bold"} fontSize={"medium"} fontFamily={"monospace"}>
                    {label}
                </Typography>
            </StepLabel>
        </Box>
    )
}