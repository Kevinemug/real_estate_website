import {AiOutlineCalendar} from 'react-icons/ai'

import React, { Component } from 'react';
import { BsPlayCircle } from 'react-icons/bs'
import { HiOutlineHome } from 'react-icons/hi'
import { AiOutlineHeart} from 'react-icons/ai'
import { AiOutlinePlusSquare } from 'react-icons/ai'
const Card = ({label,bed,bath,sq,image,calendar}) => {
    return ( 
      
        <div className="card" style={{width: "21rem"}}>
            <div 
        style={{
        background:`url(${image})`,backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        height: '200px'
        }}>
       
        <div className='salesIcon'>
          <p className='sale'>FOR SALE</p>
          <div className='virtual'> < BsPlayCircle/>
          <p>virtual tour</p>
          </div>
        </div>
<div class="downIcons">
  <div className='home'> <HiOutlineHome/></div>
  <div className='clo'>
    <div className='both'>
      < AiOutlineHeart/>
    </div>
      <div className="both">< AiOutlinePlusSquare/>
      </div>
  </div>
</div>
        </div>
         <div className="card-body">
          <h5 className="card-title">{label}</h5>
          <p className="card-text" >Bed {bed} Bath {bath} Sq Ft {sq} </p>
          <p className="card-text">5528 La Crescenta</p>
          <p className="card-text fonts">Rancho santa Fe,CA 92067</p>
        </div>
        <ul className="list-group list-group-flush">
          <div className='iconCalendar'>
            <li className="list-group-item"><AiOutlineCalendar/></li>
            <p>{calendar}</p>
          </div>
          <div className="iconCalendar">
            <li className="list-group-item fonts">Blair Owens</li>
            <p></p>
          </div>
    <div className="iconCalendar">
      <li className="list-group-item fonts">Listing Office</li>
      <p className='fonts'>Pacific Sotheby's int's lRealty</p>
    </div>
        </ul>
      </div> 
     );
}
 
export default Card;