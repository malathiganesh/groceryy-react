import './menu.css';
import Menulist from './menulist';
import fruits from '../images/fruite.jpg';
import veg from '../images/veg.jpg';
import grocery from '../images/grocery.png';
import snack from '../images/snack.jpg'; 
import TopDeals from '../topdeals/topdeals';

function Menus(){
    const menus=[
        {
            id:1,
            name:'fruits',
            images:fruits
        },
        {
            id:2,
            name:'vegetables',
            images:veg
        },
        {
            id:3,
            name:"groceries",
            images:grocery
        },
        {
            id:4,
            name:'snacks',
            images:snack
        }
    ];
    return(
        <div className='menus'>
        <div className='mcontainer'>
        {/* <h2>Explore your Joy</h2> */}
        <div className='mWrapper'>
      
                          {
                                      menus.map((items)=>{
                              return <Menulist key={items.id} image={items.images} name={items.name}></Menulist>
                          })
                          }
                      
                      </div>
         <TopDeals></TopDeals>
          </div>
          
          </div>)

};
export default Menus;