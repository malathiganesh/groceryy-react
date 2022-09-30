import { useState } from "react";
import "./fruites.css";
import { useContext } from "react";
import AddContext from "../../../context";

function FruitsItems(props) {
    const [cartBtn,setCartbtn]=useState(false);
    const cart = useContext(AddContext);
    const [qty, setQty] = useState(1);
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)

    const cartHandler = (event) => {
        event.preventDefault()

        cart.addCart(props.items)

        setCartbtn(true)
    }
    return (<>
        <div className="fruitsItems">

            <div className='offer'>
                <span>{props.offer}<span>%</span></span><br />
                <span>off</span>
            </div>
            <div className="detail">
                <div className="dealsImage">
                    <img src={props.image}></img>
                </div>

                <div className="abouts">
                    <h4>{props.name}</h4><span>{props.qty}</span>
                    <div className="rate">
                    <p className="mrp">M.R.P: ₹{props.price}</p>
                    <p className="original_rate">₹.{save}</p></div>
                    <p>Save ₹.{originalPrice}</p>
                  {cartBtn ? <p><b>Added to the cart</b></p> :<button onClick={cartHandler}>Add to Cart</button>}
                    {/* <div className="qty">
                    <p>Qty:{qty}</p>
                    <button onClick={() => {
                        setQty(qty + 1)
                    }}>+</button>
                    <button onClick={() => {
                        if (qty > 1) {
                            setQty(qty - 1)
                        }
                    }

                    }>-</button>
                    </div> */}
                </div>
            </div>
        </div>

    </>)
}
export default FruitsItems;