import { useContext, useEffect, useState } from "react";
import AddContext from "../../context";
import TopItems from "./topdealsitem";
import styles from "./topdeals.module.css"

function TopDeals() {

    const details = useContext(AddContext);
    const arr = details.total;

    function srt(a,b){
        return b.offer-a.offer
    }
    const s = arr.sort(srt);

    return (

        <div className={styles.flex}>
            <h1>TopDeals</h1>
        <div className={styles.container}>
            {
                s.map((items,i)=>{
                    if(i<10){
                        return(
                            <TopItems key={items.name} items={items} name={items.name}  image={items.image} price={items.price} offer={items.offer} qty={items.qty}></TopItems>
                        )
                    }
                    
                })
            }
        </div>
        </div>
    )
}
export default TopDeals;