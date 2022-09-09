import {Link} from 'react-router-dom'
import logo from "./images/logo.png"
const Navbar = () => {
    return (
        <div className="Navbar">
            <img src={logo} alt="" />
           <div>
           <input type="search"  />
            <button className='btn btn-success'>Search</button>
           </div>
          <Link to="/wishlist">Wishlist</Link>
        </div>
      );
}
 
export default Navbar;