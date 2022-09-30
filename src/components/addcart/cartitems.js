import { useState } from "react"
import './cartitem.css';
function CartItems(props) {
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)
    const [count,setCount] = useState(1)
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])

return(<><div className="addcart">
    <div className="ofer">
                <span><b>{props.offer}</b><span> %
                offer</span></span>
                </div>
                <div className="carts">
            <div className="dealImage">
                <img src={props.image}></img>
            </div>

            <div className="abtitem">
                <h3>{props.name}</h3><span>{props.qty}</span>
                <h3>₹. {save}</h3>
                <div className="saveamount">
                <p className="strike">M.R.P: ₹{props.price}</p>
                <p className="amt">Save ₹{originalPrice}</p></div>
                <p className="qty">Qty:</p>
            </div>
            </div>
        
                  <div className="quantity">
                    <button onClick={()=>{
                    //  if(count==1){
                        setCount(count+1)
                    // }
                        // setCount(count+1)
                        
                     }}>+</button> <p className="count">{count}</p>
                     <button onClick={()=>{
                        //  if(count>1){
                             setCount(count-1)
                        //  }
                     }
                      
                     }>-</button>
                     </div>
                     
          
          
            </div>
    </>)
};
export default CartItems;