import Header from './components/Header/header';
import Menus from './components/menus/menu';
import Login from './components/login/login';
import { useSelector} from 'react-redux';
import { selectUser } from './features/userslice';
import { Routes, Route, Link} from "react-router-dom";
import React,{useEffect, useState } from 'react';
import AddContext from './context';
import Fruitslist from './components/menus/fruites/fruitelist';
import Cartholder from  './components/addcart/cartholder';
import TopDeals from './components/topdeals/topdeals';
import Slider from './components/Slideshow';
// import './App.css';

function App() {
  const[cart,setCart]=useState([]);
  const[qty,setQty]=useState(0);
    const addCart=(item)=>{
      
    setCart((preitems)=>{
        return[item,...preitems]
      })
    }
    function remove(name){
      let newArr = []
      let index = 0
      for(let i = 0; i<cart.length;i++){
          if(cart[i].name != name){
              newArr[index] = cart[i]
              index++
          }
      }
      setCart(newArr)
     
  }
    const [veg, setVeg] = useState([]);
    const [fru, setFru] = useState([]);
    const [gro, setGro] = useState([]);
    const [total, setTotal] = useState([]);


    useEffect(() => {
        
        fetch("https://6315e15733e540a6d386e913.mockapi.io/vegetables").then(res=>res.json())
        .then(dat => setVeg(dat))

        fetch("https://6315e15733e540a6d386e913.mockapi.io/groceries").then(res=>res.json())
        .then(dat => setGro(dat))

        fetch("https://6315e15733e540a6d386e913.mockapi.io/fruits").then(res=>res.json())
        .then(dat => setFru(dat))
    }, [])
    

    useEffect(()=>{
      setTotal(()=>{
        return [...veg,...fru,...gro];
      })
    },[veg,fru,gro])


  const user=useSelector(selectUser);
  useEffect(()=>{
    console.log(user.loggedIn);
  },[user])
  return (
    <div className="App">
      <AddContext.Provider value={{addCart,remove,cart,setQty,qty,total}}>
      <Header/>
      <Slider/>
      <Routes>
        <Route  index element={<Menus/>}></Route>
        <Route path='/item/:lists' element={<Fruitslist/>}></Route>
        <Route path='addcart' element={<Cartholder/>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='t' element={<TopDeals></TopDeals>}></Route>
      </Routes>
      {/* <Menus/> */}
      
      </AddContext.Provider>
    </div>
  );
}

export default App;
