import React from 'react'
import elips from '../src/images/icon-ellipsis.svg';

export default function Titles(props) {


 
  return (
    <div className={`title ${props.background}`}>
        <img src={props.icon} alt="" className='icon'/>
            <div className='card'> 
                <div className='name'> 
                <span> {props.title} </span>
                <img src={elips} alt=""/> 
                </div>
                <div className="bottom">
                  <div className='hours'>
                  <p> {props.current}hrs</p>
                  </div>
                  <div className='lastweek'>
                  <span>Last Week - {props.previous}hrs </span>
                  </div>
                </div>
            </div>
      </div>
  )
}
