import { Box, Button, RadioGroup, Stack, Step, Stepper } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {ListPack,PaymentMethode} from './index';
import StepComponent from "../../components/common/stepComponent";
import Form from "../../components/forms/Form";

export default function InscriptionPage(){
    const [adherent,setAdherent] = useState({
        nom:"",
        prenom:"",
        civilite:"",
        email:"",
        dateNaissance:"",
        adresse:"",
        password:"",
        postal:"",
        ville:"",
        abonnement:{
            id:"",
            name:""
        },
        payement:""
    });
    const [step,setStep] = useState(0);
    const navigate = useNavigate();
    

    const setInfoAdherent = (target)=>{
        setAdherent({...adherent,[target.name]:target.value});
    }
   
    const packSelected = (event)=>{
        let id = event.target.id;
        console.log(`pack id: ${event.target.id}`);
        setAdherent({...adherent,abonnement:{
            ...adherent.abonnement,"id":id,"name":"classic"
        }});
        setStep(step+1);
    };

    const next = (event) =>{
        const value = event.target.innerText;
        if(value === "REGISTER"){
            console.log('adherent: '+JSON.stringify(adherent));
            navigate('/members');

        }else{
            setStep(step+1);
        }
    }

    const prev = () =>{
        let value = (step - 1) >= 0 ? step - 1 : step;
        setStep(value);
    }

    const onSelectedMethod = (event) =>{
        setAdherent({...adherent,"payement":event.target.value});
    }

    

    let components = [
        {name:"Choisir votre abonnement",component:<ListPack onPackClick={packSelected} />},
        {name:"Creer votre compte en ligne",component:<Form handleOnChange={setInfoAdherent} />},
        {name:"Payement",component:
            <RadioGroup>
                <Box sx={{display:"flex",border:"1px solid black",gap:"5px",flexWrap:"wrap"}}>
                    {["Paypal","Visa Card"].map(m=>(
                    <PaymentMethode name={m} onCheck={onSelectedMethod} />
                    ))}
                </Box>
            </RadioGroup>
        },
    ]
    let valueButton =  step === (components.length-1) ? "Register" : "Next";

    return(
        <Box margin={"auto"} width={"95%"}>
            <Stepper sx={{marginTop:"10px"}} activeStep={step}>
                {components.map(cmp=>(
                    <Step id={cmp.name}>
                        <StepComponent label={cmp.name} />
                    </Step>
                ))}
            </Stepper>
            <React.Fragment>
                    {components[step].component}
                    <Stack 
                        position={"relative"} 
                        flexDirection={"row"} 
                        justifyContent={"space-between"} 
                        width={"100%"}>
                        <Button disabled={step === 0} onClick={prev}>Prev</Button>
                        <Button onClick={next}>{valueButton}</Button>
                    </Stack>
            </React.Fragment>
        </Box>
    )
}