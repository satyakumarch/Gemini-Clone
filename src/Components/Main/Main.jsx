import React from 'react'
import "./Main.css";
import {assets} from '../../assets/assets';
const Main = () => {
  return (
    <div className='main'>
        <div className='nav'>
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            <div className="greet">
                <p><span>Hello, Dev</span></p>
                <p>How can i help today?</p>
            </div>
            <div className="cards">
                <div className="card">
                    <p>Suggest beautiful places to see on an upcoming road trip</p>
                    <img src={assets.compass_icon} alt="" />
                </div>
                <div className="card">
                    <p>Briefly summarize this concept:urban planning</p>
                    <img src={assets.bulb_icon} alt="" />
                </div>
                <div className="card">
                    <p>Brainstrome team bonding for a our work retrat.</p>
                    <img src={assets.message_icon} alt="" />
                </div>
                <div className="card">
                    <p>improve the readability of the following code</p>
                    <img src={assets.code_icon} alt="" />
                </div>
            </div>
            <div className="main-buttom">
                <div className="search-box">
                    <input type="text"  placeholder='Enter the prompt here' className="text" />
                    <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img src={assets.send_icon} alt="" />
                </div>

                </div>
               
            </div>
            <p className='bottom-info'></p>
        </div>
    </div>
  )
}

export default Main;