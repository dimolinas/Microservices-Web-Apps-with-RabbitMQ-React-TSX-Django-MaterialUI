import { List, ListItem, ListItemText, Divider, ListItemButton, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
export {};

const Menu = () => {
    return(
        <nav style={{ width: 'inherit', backgroundColor: '#ffffff', padding: '16px' }}>
            <List>
                <ListItem component={Link} to='/config/houses'>
                    <ListItemButton>
                        <ListItemIcon>
                            <MapsHomeWorkIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Houses' />
                    </ListItemButton>
                </ListItem>
                <Divider />
                <ListItem component={Link} to='/config/houses/create'>
                    <ListItemButton>
                        <ListItemIcon>
                            <ReceiptLongIcon/>
                        </ListItemIcon>
                        <ListItemText primary='Catalog'/>
                    </ListItemButton>
                </ListItem>
                <Divider/>

            </List>
        </nav>
    );
};

export default Menu;