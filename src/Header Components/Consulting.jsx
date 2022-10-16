import React from 'react'
//require("../css/products.css")
import consultingdata from '../Database/consultingdata'
import { useState } from 'react'


function Consulting(props) {
const [set, setSet] = useState(1)
const [consultingclassName, setconsultingclassName] = useState(props.className)



  return (
    <div className={consultingclassName} onMouseLeave={()=>{
        setconsultingclassName("products leave")
        props.changeconsultingShow(false)
    }}>
       <div className="left">
        <ul>
           {
            consultingdata.map((val)=>{
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
                consultingdata.map((val)=>{
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

export default Consulting