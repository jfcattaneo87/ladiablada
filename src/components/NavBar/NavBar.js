import './NavBar.css';
// external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';





const NavBar = () => {

    

  return (
         <AppBar position="static" className="main-NavBar">
            <Toolbar>
                <div className="container-logo">
                    <Typography variant="h5">
                        La Diablada
                    </Typography>
                </div>
                <div className="container-icono-login">
                    <Button color="inherit">inicio</Button>
                    <Button color="inherit">about</Button>
                    <Button color="inherit">products</Button>
                    <Button color="inherit">Login</Button>
                    
                </div>
            </Toolbar>
           
      </AppBar>
      
      
  );
}

export default NavBar;
