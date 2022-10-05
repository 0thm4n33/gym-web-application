import { Box, Button, FormControl, Stack, TextField, Typography } from "@mui/material";
import React, { useContext, useState } from "react";
import Services from "../services";
import { useNavigate } from "react-router-dom";
import authContext from "../context/authContext";

export default function AuthentificationPage(){
    const navigate = useNavigate();
    let {setAuth} = useContext(authContext);
    const [user,setUser] = useState({
        login:"",
        password:""
    });
    
    const handleOnSubmit = () =>{
        const foundedUser =  Services.authenticateUser(user);
        if(foundedUser !== undefined){
            if(foundedUser.role === "admin"){
                setAuth('admin');
                navigate('/members/admin/');
            }else if(foundedUser.role === "adherent"){
                setAuth('adh');
                navigate(`/members/adherent/${foundedUser.adherent.id}`);
            }
        } 
    }

    const handleOnChange = (event) =>{
        const name = event.target.name;
        const value = event.target.value;
        setUser({...user,[name]:value});
    }

    return(
        <Box 
            display={"flex"} 
            justifyContent={"center"}
        >
            <Box sx={{
                marginTop:"10px",width:"70%",display:"flex",flexDirection:"column",justifyContent:"center"}}>
              <Typography color={"#7f5af0"} sx={{borderBottom:"2px solid #7f5af0",textAlign:"center",padding:"10px",margin:"20px"}}>GYM ORY</Typography>
              <FormControl>
                  {['login','password'].map(field =>(
                      field === "password" ? 
                      <TextField key={field} label={field} name={"password"} type={"password"} sx={{xs:{width:"100%"},margin:"10px"}} value={user.password} onChange={handleOnChange} /> :
                      <TextField key={field} label={field} name={"login"} type={"text"} sx={{xs:{width:"100%"},margin:"10px"}} value={user.login} onChange={handleOnChange}/>
                  ))}
              </FormControl>
              <Stack flexDirection={"row-reverse"}>
                    <Button sx={{backgroundColor:"#7f5af0",color:"white"}} onClick={handleOnSubmit}>
                        SE CONNECTER
                    </Button>
              </Stack>
            </Box>
        </Box>
    )
}