import jeremy from '../src/images/image-jeremy.png';
import './App.css';
import Titles from './Titles';
import workicon from '../src/images/icon-work.svg';
import playicon from '../src/images/icon-play.svg';
import studyicon from '../src/images/icon-study.svg';
import exerciseicon from '../src/images/icon-exercise.svg';
import socialicon from '../src/images/icon-social.svg';
import selfcareicon from '../src/images/icon-self-care.svg';
import data from '../src/data.json';
import { useState } from 'react';

function App() {

  const [time, setTime] = useState("weekly");
 
  var current = [];
  var previous = [];

if (time === "daily") {
 current.push(
    data[0].timeframes.daily.current, 
    data[1].timeframes.daily.current,
    data[2].timeframes.daily.current,
    data[3].timeframes.daily.current,
    data[4].timeframes.daily.current,
    data[5].timeframes.daily.current
    )
previous.push(
    data[0].timeframes.daily.previous, 
    data[1].timeframes.daily.previous,
    data[2].timeframes.daily.previous,
    data[3].timeframes.daily.previous,
    data[4].timeframes.daily.previous,
    data[5].timeframes.daily.previous
    )
 
} else if(time === "weekly") {
    current.push(
        data[0].timeframes.weekly.current, 
        data[1].timeframes.weekly.current,
        data[2].timeframes.weekly.current,
        data[3].timeframes.weekly.current,
        data[4].timeframes.weekly.current,
        data[5].timeframes.weekly.current
        )
    previous.push(
        data[0].timeframes.weekly.previous, 
        data[1].timeframes.weekly.previous,
        data[2].timeframes.weekly.previous,
        data[3].timeframes.weekly.previous,
        data[4].timeframes.weekly.previous,
        data[5].timeframes.weekly.previous
        )
}
else if(time === "monthly") {
    current.push(
        data[0].timeframes.monthly.current, 
        data[1].timeframes.monthly.current,
        data[2].timeframes.monthly.current,
        data[3].timeframes.monthly.current,
        data[4].timeframes.monthly.current,
        data[5].timeframes.monthly.current
        )
    previous.push(
        data[0].timeframes.monthly.previous, 
        data[1].timeframes.monthly.previous,
        data[2].timeframes.monthly.previous,
        data[3].timeframes.monthly.previous,
        data[4].timeframes.monthly.previous,
        data[5].timeframes.monthly.previous
        )
    }
  return (
    <div className="container">
         <div className='boxes'>
              <div className='profile'> 
                  <div className='name'> 
                        <div className='img'> <img src={jeremy} alt=""/> </div> 
                        <div className='text'>
                          <span> Report for</span>
                          <h1> Jeremy Robson</h1>
                        </div>
                  </div>
                  <div className='time'> 
                      <p className={`${time === "daily" ? "active" : ""}`} onClick={() => {setTime("daily")}}> Daily </p>
                      <p className={`${time === "weekly" ? "active" : ""}`} onClick={() => {setTime("weekly")}}> Weekly </p>
                      <p className={`${time === "monthly" ? "active" : ""}`} onClick={() => {setTime("monthly")}}> Monthly </p>
                  </div>
             </div>
              <div className='titles'> 
                  <div className='up'> 
                      <Titles 
                      icon={workicon}
                      background="work"
                      title={data[0].title}
                      current={current[0]}
                      previous={previous[0]}
                      />

                      <Titles
                       icon={playicon}
                       background="play"
                       title={data[1].title}
                       current={current[1]}
                       previous={previous[1]}
                       />

                      <Titles
                       icon={studyicon}
                       background="study"
                       title={data[2].title}
                       current={current[2]}
                       previous={previous[2]}
                       />
                  </div>
                  <div className='down'>
                     <Titles
                      icon={exerciseicon}
                      background="exercise"
                      title={data[3].title}
                      current={current[3]}
                      previous={previous[3]}
                     />
                      <Titles
                       icon={socialicon}
                       background="social"
                       title={data[4].title}
                       current={current[4]}
                       previous={previous[4]}
                      />
                      <Titles
                       icon={selfcareicon}
                       background="selfcare"
                       title={data[5].title}
                       current={current[5]}
                       previous={previous[5]}
                      />
                   </div>
                </div>
              </div>
          </div>
  );
}

export default App;
