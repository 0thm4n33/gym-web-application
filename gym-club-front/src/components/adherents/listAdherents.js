import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Service from "../../services";

export default function ListAdherent(){
    const adhs = Service.getAdhs();
    const navigate = useNavigate();
    return(
        <Table sx={{width:"100%"}}>
            <TableHead>
                <TableRow>
                    {["nom","prenom","email","abonnement"].map((r)=>(
                        <TableCell sx={{fontFamily:"Consolas"}}>{r.toUpperCase()}</TableCell>
                        ))}
                </TableRow>
            </TableHead>
            <TableBody>
                {adhs.map(adh=>(
                    <TableRow>
                        <TableCell>{adh.nom}</TableCell>
                        <TableCell>{adh.prenom}</TableCell>
                        <TableCell>{adh.email}</TableCell>
                        <TableCell onClick={()=>navigate(`/members/admin/adherent/${adh.id}`)} style={{fontWeight:"bold",cursor:"pointer"}}>{adh.abonnement.name}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}