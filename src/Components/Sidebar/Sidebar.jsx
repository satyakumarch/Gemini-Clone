import React from 'react';
import "./Sidebar.css";
import {assets} from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' src={assets.menu_icon}/>


        </div>
        <div className='buttom'>

        </div>
    </div>
  )
};

export default Sidebar;