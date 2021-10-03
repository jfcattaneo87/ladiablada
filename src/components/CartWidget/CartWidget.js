// import './CartWidget.css';
// external components
import Button from '@material-ui/core/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
// import {faCartPlus, faShoppingCart} from '@fortawesome/free-solid-svg-icons';


const CartWidget = () => {

    
    return (      
      <div className="cart-buttonNav">
        <Button variant="text">
            <FontAwesomeIcon icon={faShoppingCart} />
            <p>1</p>
        </Button>
      </div>         
    );
  }
  
  export default CartWidget;