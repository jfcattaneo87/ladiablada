import './NavBar.css';
// external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const NavBar = () => {

  return (
    <header className="main-NavBar">
         <AppBar position="static">
        <Toolbar>
          <IconButton edge="start"  color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            La Diablada
          </Typography>
          <div class= 'container-login'>
          <Button color="inherit">Login</Button>
          </div>
        </Toolbar>
      </AppBar>
    </header>
  );
}

export default NavBar;
