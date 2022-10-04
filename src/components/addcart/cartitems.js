import { useState } from "react"
import { useContext } from "react";
import AddContext from "../../context";
import './cartitem.css';
function CartItems(props) {
    const remove = useContext(AddContext).remove;
    const originalPrice = (props.offer / 100) * (props.price)
    const save = (props.price) - (originalPrice)
    const [count,setCount] = useState(1)
    // useEffect(()=>{
    //     setCount(count+1)
    // },[count])
    // const decreaseHandler=()=>{
    //     console.log('malathi');
    //     alert("summa")
    // }

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
                  <div className="ad">
                  <div className="quantity">
                  <button onClick={()=>{
                    //  if(count==1){
                        setCount(count+1)
                    // }
                    // console.log('summa');
                        // setCount(count+1)
                        
                     }}>+</button><p className="count">{count}</p> </div>
                     <div className="decrease">
                  <button onClick={()=>{
                    if(count>0){
                        setCount(count-1)
                    }else{
                        remove(props.name)
                     }
                        // console.log('hi');
                    }}>-</button>  
                     </div>
                     </div>
                     
          
          
            </div>
    </>)
};
export default CartItems;