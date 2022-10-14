

import React, { useState, useEffect } from 'react';


import {App} from './App';
import User from './App';







export default function Home(){
  const [count,setCount] = useState(3);  
  const handleClick = event => {

    
    event.currentTarget.classList.toggle('read-notification');
   // event.currentTarget.classList.remove("umread-notifications")
   setCount(count -1)
   if(count<=0){
    setCount(0)
  }
    
  };
  const handleButton =event=>{
    let element = document.getElementById("unread");
    let  element1 = document.getElementById("unread1");
    let element2 = document.getElementById("unread2");
  
  
    element.classList.remove("unread-notification");
    element1.classList.remove("unread-notification");
    element2.classList.remove("unread-notification");
    setCount(count-3)
    if(count<=0){
      setCount(0)
    }
      
   
  
  };
   
  
     
      return(
            <div>
                <div class="mainfile">
    <div>
      <h1><b>Notifications {count}</b></h1>
      <button onClick={handleButton} class="button1">Mark all as read</button>

    </div>

    <div id="unread" onClick={handleClick} class="unread-notification" >
      
      <span
        ><img
          class="Images"
          src="/Images/avatar-mark-webber.webp"
          alt="mark"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Mark Webber </strong><span class="text">
            to your recent post<strong> My first tournament today</strong></span
          >
          <br />

          <span class="text">1m ago</span>
          <br/>
          
        </p>
      </div>
      
    </div>
    <div id="unread1" onClick={handleClick} class="unread-notification" >
      <span
        ><img
          class="Images"
          src="/Images/avatar-angela-gray.webp"
          alt="angela"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Angela Grey</strong><span class="text"> followed you</span>
          <br />

          <span class="text">5m ago</span>
          <br/>
          
        </p>

      </div>
    </div>
    <div id="unread2" onClick={handleClick} class="unread-notification">
      <span
        ><img
          class="Images"
          src="/Images/avatar-jacob-thompson.webp"
          alt="jacob"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Jacob Thompson</strong
          ><span class="text"> has joined your group </span>
          <span class="group">Chess Club</span>
          <br />

          <span class="text">1 day ago</span>
          <br/>
         
        </p>
      </div>
    </div>
    <div class="notification">
      <span
        ><img
          class="Images"
          src="/Images/avatar-rizky-hasanuddin.webp"
          alt="rizky"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Rizky Hasanuddin</strong
          ><span class="text"> sent you a privte message</span>

          <br />

          <span class="text">5 days ago</span>
          <br/>
          <span><p class="message">Hello thanks for setting up the Chess Club.I have been a member for a few weeks now i'm already having lots of fun and improving my game.</p></span>
          <br/>
          
        </p>
      </div>
    </div>
    <div class="notification">
      <span
        ><img
          class="Images"
          src="/Images/avatar-kimberly-smith.webp"
          alt="kimberly"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Kimberly Smith</strong
          ><span class="text"> commented on your photo</span>
          
            

          <br />

          <span class="text">1 week ago</span>
          <br/>
          
        </p>
      </div>
    </div>
    <img
            class="image2"
              src="/Images/image-chess.webp"
              alt="Picture"
            />
          
    
    <div class="notification">
      <span
        ><img
          class="Images"
          src="/Images/avatar-nathan-peterson.webp"
          alt="Nathon"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Nathon Peterson</strong
          ><span class="text"> reacted to your recent post<strong> 5 end-game strategies to increase your win rate</strong></span>
          
          <br />

          <span class="text">2 weeks ago</span>
          <br/>
          
        </p>
      </div>
    </div>
    <div class="notification">
      <span
        ><img
          class="Images"
          src="/Images/avatar-anna-kim.webp"
          alt="Anna"
      /></span>
      <div class="textAfterImage">
        <p>
          <strong>Anna Kim</strong><span class="text"> left the group</span>
          <span class="group">Chess Club</span>
          <br />

          <span class="text">2 weeks ago</span>
          <br/>
          
        </p>
      </div>
    </div>
    </div>

            </div>
        )
    }



