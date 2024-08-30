import React, { useEffect, useState } from 'react';
import Wrapper from './Wrapper';
import { House } from '../interfaces/house';
import { Link } from 'react-router-dom';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography'; 
import { Drawer } from '@mui/material';
import HousesCreate from './HousesCreate';
import Box from '@mui/material/Box';

const Houses = () => {

    const [houses, setHouses] = useState([]);
    const [openDrawer, setOpenDrawer] = useState(false);

    useEffect(() => {
        (async () => {
            const response = await fetch('http://0.0.0.0:8001/api/houses');
            const data = await response.json();
            console.log("Houses", data);
            setHouses(data);
        })();
    }, []);

    const del = async (id: number) => {
        if(window.confirm("Are you sure you want to delete this house?")){
            await fetch(`http://0.0.0.0:8001/api/houses/${id}`, {
                method:'DELETE'
            });

            setHouses(houses.filter((h: House) => h.id !== id ));
        }
    };

    const handleDrawer = () => setOpenDrawer(!openDrawer);

    return(
        <>
        <Wrapper>
            <Toolbar sx={{ justifyContent: 'space-between', mb: 2 }}>
                <Typography variant="h6">
                    Houses
                </Typography>
                <Button variant="contained" color="primary" onClick={handleDrawer}>
                    Create House
                </Button>
            </Toolbar>

            <TableContainer component={Paper}>
                <Table sx={{minWidth: 650}} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Id</TableCell>
                            <TableCell>Image</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Description</TableCell>
                            <TableCell>Likes</TableCell>
                            <TableCell>Checks</TableCell>
                            <TableCell>Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {houses.map((h: House) => (
                            <TableRow key={h.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component="th" scope="row">{h.id}</TableCell>
                                <TableCell component="th" scope="row">{h.image}</TableCell>
                                <TableCell component="th" scope="row">{h.name}</TableCell>
                                <TableCell component="th" scope="row">{h.description}</TableCell>
                                <TableCell component="th" scope="row">{h.likes}</TableCell>
                                <TableCell component="th" scope="row">{h.checks}</TableCell>
                                <TableCell>
                                    <IconButton color="secondary" component={Link} to={`/config/houses/${h.id}/update`} >
                                        <EditIcon />
                                    </IconButton>
                                    <IconButton color="secondary" onClick={() => del(h.id)} >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Wrapper>

        <Drawer anchor='right' open={openDrawer} onClose={handleDrawer}>
            <HousesCreate
            />
        </Drawer>
        </>
        
    );
};

export default Houses; 