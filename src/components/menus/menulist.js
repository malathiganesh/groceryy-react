import "./menulist.css";
import { useNavigate } from "react-router-dom";

function Menulist(props) {
    const menuTo=useNavigate();
    const menuHandler=()=>{
        menuTo('/item/'+props.name);
    }
    return (<>
        <div className="menulist" onClick={menuHandler}>
            <div><img src={props.image}></img></div>
            <div><p>{props.name}</p></div>
        </div>
        </>)
}
export default Menulist;
