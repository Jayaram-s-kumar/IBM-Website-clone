import React from 'react'
import learndata from '../Database/Learn'
import { useState } from 'react'


function Learn(props) {
const [set, setSet] = useState(1)
const [learnclassName, setlearnclassName] = useState(props.className)



  return (
    <div className={learnclassName} onMouseLeave={()=>{
        setlearnclassName("products leave")
        props.changelearnShow(false)
    }}>
       <div className="left">
        <ul>
           {
            learndata.map((val)=>{
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
                learndata.map((val)=>{
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

export default Learn