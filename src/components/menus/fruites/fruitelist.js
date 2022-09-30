import "./fruitelist.css";

import { useState, useEffect } from "react";
import FruitsItems from "./fruites";
import { useParams } from "react-router-dom";

function Fruitslist() {
    const [fruitsList,setFruitslist]=useState([]);
    const fetchlist=useParams();
    
    useEffect(() => {
        fetch('https://6315e15733e540a6d386e913.mockapi.io/'+fetchlist.lists).then((response) => {
            // console.log(response.json());
            if (response.ok) {
                return response.json()
            }
            return false
        })
            .then((data) => {
                setFruitslist(data)
            })
            
    }, []);
   
    

    return (<>
        <div className="fruits">
            <div className="fcontainer">
                <div className="fruitsWrapper">
                    {
                        fruitsList.map((items)=>{
                            return <FruitsItems key={items.id} items={items} name={items.name} event={items.event} image={items.image} price={items.price} offer={items.offer} qty={items.qty}></FruitsItems>
                        })
                    }
                </div>
            </div>
        </div>
    </>)
};
export default Fruitslist;
