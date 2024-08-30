import React, {SyntheticEvent, useState} from "react";
import Wrapper from "./Wrapper";
import { Button, TextField, FormControl, FormLabel, Stack, Divider, Stepper } from '@mui/material';
import { Navigate } from "react-router-dom";
import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
export {};


const HousesCreate = () => {
    const [name, setName ] = useState('');
    const [image, setImage] = useState('');
    const [description, setDescription] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [activeStep, setActiveStep] = useState(0);

    const steps = ['Enter House Name', 'Upload Image', 'Add Description'];

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        await fetch('http://0.0.0.0:8001/api/houses',{
            method:'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name,
                image,
                description,
                redirect
            }),
        });

        setRedirect(true);
    };

    if(redirect){
        return <Navigate to={'/config/houses'}/>;
    }

    return(
        <Card variant="outlined" sx={{ maxWidth: 360 }}>
            <Box sx={{p:2}}>
                <Typography gutterBottom variant="h5" component="div">
                    House Creation
                </Typography>
                <Typography color="text.secondary" variant="body2">
                    Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                    just down the hall.
                </Typography>
                <Divider/>

                <Stepper activeStep={activeStep} orientation="vertical">

                </Stepper>

                <form onSubmit={submit}>
                    <FormControl fullWidth margin="normal">
                        <TextField
                            size='small'
                            label='Name'
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 1 }}>
                        <TextField
                            size='small'
                            label='Image URL'
                            value={image}
                            onChange={(e) => setImage(e.target.value)}
                        />
                    </FormControl>
                    <FormControl fullWidth sx={{ marginBottom: 2 }}>
                        <TextField
                            size='small'
                            label='Description'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            multiline
                            rows={4}
                        />
                    </FormControl>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', marginTop: 2 }}>
                        <Button type='submit' variant='contained' color='primary'>Save</Button>
                        <Button variant="contained" color="primary" onClick={() => {}}>Cancel</Button>
                    </Box>
                </form>
            </Box>
        </Card>
        
    );
};


export default HousesCreate;