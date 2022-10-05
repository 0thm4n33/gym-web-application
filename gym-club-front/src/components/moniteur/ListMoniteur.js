import { Add } from "@mui/icons-material";
import { IconButton, Typography } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React from "react";

export default function AllMoitors(){
    
    const moniteurs = [
        {id:1,nom:"Rezzaki",prenom:"Youssra",specialite:"Body Attack"},
        {id:2,nom:"AS",prenom:"Ahmed",specialite:"Cycling"},
        {id:3,nom:"AM",prenom:"Karim",specialite:"TRX"},
    ]
    const columns = [
        {field:'id',headerName:"ID",width:90,editable:true},
        {field:'nom',headerName:"Nom",width:180,editable:true},
        {field:'prenom',headerName:"Prenom",width:180,editable:true},
        {field:'specialite',headerName:"Specialite",type:"singleSelect",valueOptions: ["Body Attack", "Cycling", "TRX"]
        ,width:220,editable:true}
    ]
    return(
        <div style={{ height: 400, width: '100%' }}>
            <Typography variant="h4" fontFamily={"Consolas"} textAlign={"center "}>Les moniteurs</Typography>
            <DataGrid
                rows={moniteurs}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    )
}