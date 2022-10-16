import React from 'react'
import exploredata from '../Database/exploredata'
import { useState } from 'react'


function Explore(props) {
const [set, setSet] = useState(1)
const [exploreclassName, setexploreclassName] = useState(props.className)



  return (
    <div className={exploreclassName} onMouseLeave={()=>{
        setexploreclassName("products leave")
        props.changeexploreShow(false)
    }}>
       <div className="left">
        <ul>
           {
            exploredata.map((val)=>{
                return(
                    <li onClick={()=>{
                        setSet(val.id)
                    }} className='hov'>
                        {val.main.title}
                    </li>
                )
            })
           }
        </ul>
       </div>
     
            {
                exploredata.map((val)=>{
                    if(val.id==set){
                        return(
                            <div className="right">
                                <div className="main">
                                    <div className="maintitlediv hovunder">
                                        <p className='maintitle'>{val.main.title}</p>
                                    </div> 
                                    <p className='maindesc'>{val.main.desc}</p>
                                </div>
                                <div className="sub">
                                    {
                                        val.sub.map((val)=>{
                                            return(
                                                <div className="subdiv hov">
                                                    <p className='subtitle'>{val.subtitle}</p>
                                                    <p className='subdesc'>{val.desc}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        )
                    
                    }
                })
            }
    
    </div>
    )
}

export default Explore