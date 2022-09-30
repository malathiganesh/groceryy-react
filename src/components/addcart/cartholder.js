import { useContext } from "react";
import AddContext from "../../context";
import CartItems from "./cartitems";
// import './cartholder.css';
function Cartholder() {
    const cartHolder = useContext(AddContext);
    const count = cartHolder.qty;
    return(<><div className="cartHolder">
        <div className="cortContainer">
            <div className="cartWrapper">
            {
                cartHolder.cart.map((items)=>{
                    return <CartItems count={count} key={items.id} name={items.name} image={items.image} price={items.price} offer={items.offer} qty={items.qty}/>
                })
            }
            </div>
        </div>
    </div>

    </>)
}
export default Cartholder;