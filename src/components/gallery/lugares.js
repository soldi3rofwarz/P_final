import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import {Link}from 'react-router-dom'
const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

    
const Lugares = () => {
   
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    
    return (     
    <> 

        <Paper className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                centered
            >
            
            <Link to="/lugar1"><Tab label="El Nancital"> </Tab></Link>
            <Link to="/lugar2"><Tab label="Amerrique"> </Tab></Link>
            <Link to="/lugar3"><Tab label="Piedras Pintadas"> </Tab></Link>
            <Link to="/lugar4"><Tab label="Piedra de Cuapa"> </Tab></Link>
            <Link to="/lugar5"><Tab label="El Corozo"> </Tab></Link>
            <Link to="/lugar6"><Tab label="Garrobo Grande"> </Tab></Link>
            </Tabs>
        </Paper>
    {/* <div style={{height:'30px'}}></div>
            <ul className="nav">
                <li><Link to="/lugar1">El Nancital</Link></li>
                <li><Link to="/lugar2">Amerrique</Link></li>
                <li><Link to="/lugar3">Piedras Pintadas</Link></li>

            </ul> */}
    </>
    );
}
    
export default Lugares