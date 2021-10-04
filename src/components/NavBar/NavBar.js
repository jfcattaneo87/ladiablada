import './NavBar.css';
// external components
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom'




const NavBar = () => {

  return (
    <AppBar position="static" className="main-NavBar">
      <Toolbar>
        <Link to="/inicio">
          <div className="container-logo">
            <Typography variant="h5">La Diablada</Typography>
          </div>
        </Link>
        <div className="container-icono-login">
          <Link to="/inicio">
            Inicio
          </Link>
          <Link to="/combos/">
            Combos
          </Link>
          <Link to="/bebidas/">
            Bebidas
          </Link>
          <Link to="/complementos/">
            Complementos
          </Link>
        
          {/* <Button color="inherit">about</Button>
                    <Button color="inherit">products</Button>
                    <Button color="inherit">Login</Button> */}
        </div>
        <div className="shopping-car">
          <CartWidget />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
