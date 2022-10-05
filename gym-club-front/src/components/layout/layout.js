import React, { useState } from "react";
import authContext from "../../context/authContext";
import rootStyle from "../../styles/layout.module.css";
import NavBar from "./navbar";
import SideBar from "./sideBar";
const items = [
    {
        name:"Gestion Adherent",
        label:"Gestion",
        items:[
            {name:"Lister",url:"/members/admin/"},
        ],
    },
    {
        name:"Gestion Materiel",
        label:"Gestion",
        items:[
            {name:"Ajouter",url:'materiel/add'},
            {name:"Modifier",url:'materiel/modifier'},
            {name:"Supprimer",url:'materiel/delete'}
        ],
    },
    {
        name:"Gestion Moniteur",
        label:"Gestion",
        items:[
            {name:"Ajouter",url:'/members/admin/moniteur-add'},
            {name:"Liste",url:'/members/admin/moniteur-all'},
        ],
    }
]
export default function Layout({children}){
    const [authenticated,setAuth] = useState('');
    console.log(`authenitcated ? ${authenticated === ''}`)
    return(
        <authContext.Provider value={{authenticated,setAuth}}>
            <div className={authenticated === 'admin' ? rootStyle.adminLayout : rootStyle.root}>
                <div className={authenticated === 'admin' ? rootStyle.sideBar : rootStyle.navBar}>
                    {authenticated === 'admin' ? <SideBar items={items} /> : <NavBar /> }
                </div>
                <div className={authenticated === 'admin' ? rootStyle.adminBody : rootStyle.body }>
                    {children}
                </div>
            </div>
        </authContext.Provider>
    )
}