import './header.css';
import { useState } from "react";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AddContext from "../../context";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { selectUser } from '../../features/userslice';
import { useSelector } from 'react-redux';
import { logout } from '../../features/userslice';
import { useDispatch } from 'react-redux';



const Header = () => {
    const user = useSelector(selectUser);
        const dispatch = useDispatch();
        const handleLogout = (e) => {
            e.preventDefault();
            dispatch(logout());
        }
        

    const cartLength = useContext(AddContext).cart;
    const addCartto = useNavigate()
    const cartHandler = () => {
        if(user.loggedIn==true){
            addCartto("/addcart")
        }else{
            alert("Please Login to enter cart")
        }
        
    }
    const nav = useNavigate();
        
        return (
            <div className='header'>
                <div className='head_first'>
                    <p>Dwell</p>
                    <span>Mart</span>
                </div>
                <div className='head_scnd'>
                    <input type='text' placeholder='Search for grocery items and more...' />
                    <AiOutlineSearch />
                </div>
                <div className='head_third'>
                    {user.loggedIn ? <button className="logout_btn" onClick={(e)=>{
                handleLogout(e)
                console.log();
            }
                }>Logout</button> : <button onClick={()=>{
                    nav('/login')
                }}><AiOutlineUser color='#def2f1' fontSize={20} />Sign in</button>}


                </div>
                <div className='head_fourth'>
                    <AiOutlineShoppingCart fontSize={30} cursor='pointer' color='#def2f1' onClick={cartHandler} />
                    <span>{cartLength.length}</span>
                    {/* <p>cart</p> */}
                </div>
            </div>
        )
    }
    export default Header;