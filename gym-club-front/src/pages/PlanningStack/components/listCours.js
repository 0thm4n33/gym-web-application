import { List } from "@mui/material";
import React, { useState } from "react";
import { useEffect } from "react";

import {WeekComponenet,CoursRow} from '../index';

export default function ListCoursComponent({services,admin}){
    const [cours,setCours] = useState([]);
    
    useEffect(()=>{
        if(cours.length === 0){
            coursBuilding('lundi');
        }
    });

    const onSelectedDay = (day) =>{
        coursBuilding(day.toLowerCase());
    }

    const coursBuilding = (day)=>{
        setCours([]);
        getData(services,day);
        /*
        services.forEach(s=>{
           s.temps.forEach(t =>{
                if(t.jour.toLowerCase() === day){
                    let debut = t.heureDebut.split(':',2);
                    let fin =  t.heureFin.split(':',2);
                    let c = {
                        nom: s.nom,
                        niveau: s.niveau,
                        duree : s.duree,
                        jour : t.jour,
                        debut: debut[0] + ":" + debut[1],
                        fin : fin[0] + ':' + fin[1]
                    }
                    setCours(cs => [...cs,c]);
                }
           })
        });*/
    }

    const getData = (services,day)=>{
        services.forEach(s =>{
            let c = s.temps.map(t => (
                t.jour.toLowerCase() === day ?
                    {
                        nom: s.nom,
                        niveau: s.niveau,
                        duree : s.duree,
                        jour : t.jour,
                        debut: t.heureDebut,
                        fin : t.heureFin
                    } : 
                    null
            ))
        })

    }
    
    return(
        <>
            <WeekComponenet days={["Lundi","Mardi","Mercredi","Jeudi","Vendredi","Samedi"]} onChange={onSelectedDay}  />
                <List>
                   {cours.map(c=>(
                        <CoursRow cours={c}  />
                   ))}
                </List>
        </>
    )
}