import { Link } from "react-router-dom";

function Menu(){
    return(
        <>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/Product'>Product</Link>
            <Link to='/Login'>Login</Link>
        </div>
        </>
    )
}
export default Menu;