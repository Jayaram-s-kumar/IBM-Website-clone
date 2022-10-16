import React from 'react'
import { useState ,useEffect} from 'react'

const Togglesidebar = (props) => {
    const [dropdown1, setdropdown1] = useState(false)
    const [dropdown2, setdropdown2] = useState(false)
    const [dropdown3, setdropdown3] = useState(false)
    const [dropdown4, setdropdown4] = useState(false)
    return (
        <div className={props.className}>
            <div className="close-button" onClick={()=>{
               props.changeClassName("togglesidebar close-sidebar")
            }}>
                <img src="images/close.png" alt="" />
            </div>
            <div className="sidebarletscreate">
                <p>Let's Create</p>
            </div>
            <ul>

                <li>
                    <div className="container">
                        <div className="heading" onClick={()=>{
                            setdropdown1(!dropdown1)
                        }}>
                            <p><b>Products & Solutions</b></p>
                           {!dropdown1 &&   <p className='symbolminus'>_</p>}
                           {dropdown1 &&  <p className='symbolplus'>+</p>}
                        </div>

                        <div className={dropdown1 ? 'sub-items up-anim1' : 'sub-items dwn-anim1'}>
                            <ul>
                                <li>The essentials</li>
                                <li>Top products and platforms</li>
                                <li>Imdustries</li>
                                <li>Artificial intelligence</li>
                                <li>Automation</li>
                                <li>Blockchain</li>
                                <li>Business operations</li>
                                <li>Cloud computing</li>
                                <li>Data Analysis</li>
                                <li>IT infrastructure</li>
                                <li>Security</li>
                                <li>Supply chain</li>
                                <li>Flexible payement plans</li>
                                <li>View all produts</li>
                            </ul>
                        </div>
                    </div>
                </li>


                <li>
                    <div className="container">
                        <div className="heading"  onClick={()=>{
                            setdropdown2(!dropdown2)
                        }}>
                            <p><b>Consulting & Services</b></p>
                         {!dropdown2 &&   <p className='symbolminus'>_</p>}
                           {dropdown2 &&  <p className='symbolplus'>+</p>}
                        </div>

                        <div className={dropdown2 ? 'sub-items up-anim2' : 'sub-items dwn-anim2'}>
                            <ul>
                              
                                <li>IBM Consulting</li>
                                <li>Business process services</li>
                                <li>Design and business strategy</li>
                                <li>Hybrid multicoloured services</li>
                                <li>Talent and transformation</li>
                                <li>Applicatoin services</li>
                                <li>IBM Garage</li>
                                <li>Security services</li>
                                <li>Technology Support Services</li>
                                <li>Flexible payement plans</li>
                                <li>View all servieces</li>
                                
                            </ul>
                        </div>
                    </div>
                </li>



                <li>
                    <div className="container">
                        <div className="heading"  onClick={()=>{
                            setdropdown3(!dropdown3)
                        }}>
                            <p><b>Learn & Support</b></p>
                            {!dropdown3 &&   <p className='symbolminus'>_</p>}
                           {dropdown3 &&  <p className='symbolplus'>+</p>}
                        </div>

                        <div className={dropdown3 ? 'sub-items up-anim3' : 'sub-items dwn-anim3'}>
                            <ul>
                                <li>Support</li>
                                <li>Documentation</li>
                                <li>Developer education</li>
                                <li>Training</li>
                                <li>Resources</li>
                                <li>What is...</li>
                            </ul>
                        </div>
                    </div>
                </li>



                <li>
                    <div className="container">
                        <div className="heading"  onClick={()=>{
                            setdropdown4(!dropdown4)
                        }}>
                            <p><b>Explore more</b></p>
                            {!dropdown4 &&   <p className='symbolminus'>_</p>}
                           {dropdown4 &&  <p className='symbolplus'>+</p>}
                        </div>

                        <div className={dropdown4 ? 'sub-items up-anim4' : 'sub-items dwn-anim4'}>
                            <ul>
                               <li>Partners</li>
                               <li>IBM Research</li>
                               <li>About IBM</li>
                               <li>COVID-19</li>
                            </ul>
                        </div>
                    </div>
                </li>








             

                
                



         
            </ul>


        </div>
    )
}

export default Togglesidebar