import React from 'react'
//require("../css/products.css")
import "../css/products.css"
import productdata from '../Database/productdata'
import { useState } from 'react'


function Products(props) {
const [set, setSet] = useState(1)
const [productsclassName, setProductsclassName] = useState(props.className)



  return (
    <div className={productsclassName} onMouseLeave={()=>{
        setProductsclassName("products leave")
        props.changeproductsShow(false)
    }}>
       <div className="left">
        <ul>
           {
            productdata.map((val)=>{
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
                productdata.map((val)=>{
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

export default Products