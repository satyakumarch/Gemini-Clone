import React from 'react';
import "./Sidebar.css";
import {assets} from "../../assets/assets";

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className='top'>
            <img className='menu' src={assets.menu_icon}/>
            <div>
                 <img   src={assets.plus_icon}/>
                <p>New Chat</p>
            </div>
            <div className="recent">
                <p className='recent-title'>Recent</p>
                <div className="recent-entry">
                    <img src={assets.message_icon}/>
                    <p>What is react...?</p>

                </div>
            </div>
        </div>
        <div className='buttom'>
            

        </div>
    </div>
  )
};

export default Sidebar;