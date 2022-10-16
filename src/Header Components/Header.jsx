import React from 'react'
import '../App.css'
import { useState } from 'react'
import Togglesidebar from './Togglesidebar'
import { useEffect } from 'react'
import Products from './Products'
import Consulting from './Consulting'
import "../css/products.css"
import Learn from './Learn'
import Explore from './Explore'


const Header = () => {

    const [className, setclassName] = useState("togglesidebar")
    const [style, setStyle] = useState(false)
    const [showMobSearch, setShowMobSearch] = useState(false)
    const [showContainer, setShowContainer] = useState(true)
    const [account_cred, setAccount_cred] = useState(false)
    const [showheaderpages, setShowheaderpages] = useState(true)

    const [productsclassName, setProductsclassName] = useState("products enter")
    const [productsShow, setProductsShow] = useState(false)
    const changeproductsclassName = (val)=>{
        setProductsclassName(val)
    }
    const changeproductsShow = (val)=>{
        setProductsShow(val)
    }


    const [consultingclassName, setconsultingclassName] = useState("products enter")
    const [consultingShow, setconsultingShow] = useState(false)
    const changeconsultingclassName = (val)=>{
        setconsultingclassName(val)
    }
    const changeconsultingShow = (val)=>{
        setconsultingShow(val)
    }

    
    const [learnclassName, setlearnclassName] = useState("products enter")
    const [learnShow, setlearnShow] = useState(false)
    const changelearnclassName = (val)=>{
        setlearnclassName(val)
    }
    const changelearnShow = (val)=>{
        setconsultingShow(val)
    }


    const [exploreclassName, setexploreclassName] = useState("products enter")
    const [exploreShow, setexploreShow] = useState(false)
    const changeexploreclassName = (val)=>{
        setexploreclassName(val)
    }
    const changeexploreShow = (val)=>{
        setexploreShow(val)
    }

    const iconStyle = {
        borderLeft:"2px solid blueviolet"
    }
    const [show, setShow] = useState(false)
    const [width, setWidth] = useState(window.innerWidth)
    window.addEventListener('resize',handelResize)
    function handelResize(){
        setWidth(window.innerWidth)
      //  console.log("width:",width)
        if(width<=1200){
            setShowheaderpages(false)
        }else{
            setShowheaderpages(true)
        }      
    }
    const changeclass = (val)=>{
        setclassName(val)
        setTimeout(() => {
            setShow(false)
        }, 400);
       
    }

    const changeclass1 = (val)=>{
        setclassName(val)
    }
    return (
       <div>

        {showContainer &&  <div className="container">
            <div className="logo">
                <div className="ibm">
                    <img src="/images/ibm.png" alt="" />
                </div>
                <div className="letscreate">
                        <p>Let's create</p>
                </div>          
            </div>
            <div className="headerpages">
                <ul>
                    <li onMouseOver={()=>{
                       setProductsShow(true)
                       setconsultingShow(false)
                       setlearnShow(false)
                       setexploreShow(false)
                    }}>
                        <p>Products & Solutions</p>
                        <img src="images/down.png" alt="" />                     
                    </li>
                    <li  onMouseOver={()=>{
                       setconsultingShow(true)
                       setProductsShow(false)
                       setlearnShow(false)
                       setexploreShow(false)
                    }}>
                        <p>Consulting & Services</p>
                        <img src="images/down.png" alt="" />
                    </li>
                    <li>
                        <p onMouseOver={()=>{
                       setconsultingShow(false)
                       setProductsShow(false)
                       setlearnShow(true)
                       setexploreShow(false)
                    }}>Learn and Support</p>
                        <img src="images/down.png" alt="" />
                    </li>
                    <li>
                        <p onMouseOver={()=>{
                       setconsultingShow(false)
                       setProductsShow(false)
                       setlearnShow(false)
                       setexploreShow(true)
                    }}>Explore More</p>
                        <img src="images/down.png" alt="" />
                    </li>
                </ul>
            </div>

            <div className="rightside">
                <div className="search">
                    <input type="text" placeholder='Search' />
                    <div className="search-div" onClick={()=>{
                              if(width<=600){
                              //  console.log("width less than 600")
                                setShowMobSearch(true)
                                setShowContainer(false)
                              }                          
                        }}>
                        <img src="images/search-interface-symbol.png" alt="" />
                    </div>
                </div>
                <div className="account">
                    <div className="nav-user" onClick={()=>{
                        setAccount_cred(!account_cred)
                    }}>
                        <img src="images/user-profile.png" alt="" />
                    </div>
                    <div className="hamburger" onClick={()=>{
                        changeclass1('togglesidebar')
                        setShow(true)
                    }}>
                        <img src="images/hamburger.png" alt="" />
                    </div>
                   
                </div>
                
            </div>
                
          
            
          
            {showheaderpages && productsShow && <Products className={productsclassName}  changeproductsclassName={changeproductsclassName} changeproductsShow={changeproductsShow}/>}
            {showheaderpages &&  consultingShow && <Consulting className={consultingclassName}  changeconsultingclassName={changeconsultingclassName} changeconsultingShow={changeconsultingShow}/>}
            {showheaderpages &&  learnShow && <Learn className={learnclassName}  changelearnclassName={changelearnclassName} changelearnShow={changelearnShow}/>}
            {showheaderpages &&  exploreShow && <Explore className={exploreclassName}  changeexploreclassName={changeexploreclassName} changeexploreShow={changeexploreShow}/>}
            
            
        </div>
        
}

        {show && <Togglesidebar className={className} changeClassName={changeclass} />}
      
       {/* //First the class is set to togglesidebar and component
       //is not Mounted.Then the component is mounted with 
       //no class change.When the close button is clicked
       //child wii call props.changeclassname and pass the
       //name of classes as togglesidebar close-sidebar.
       //This will call the changeclass function of parent
       //and pass the same parametres into it.Then the classname
       //is changed.Whenever the hamburger button is clicked 
       //it will call the changeclass(togglesidebar) so that
       //the classname got replaced as old */}

    
       {showMobSearch && 
       <div className="mobile-search">
            <div className="mobile-search-close" onClick={()=>{
                    setShowMobSearch(false)
                    setShowContainer(true)
                }}  >
                <img src="images/close (1).png" alt="" />
            </div>
            <div className="mobile-search-input">
            <input type="text" placeholder='Search'onClick={()=>{
                    setStyle(false)
                }}  />
                <div className="mobile-search-icon" onClick={()=>{
                    setStyle(true)
                }} style={style ? iconStyle : {}}>
                    <img src="images/search-interface-symbol (1).png" alt="" />
                </div>
            </div>
       </div>}

      {account_cred &&  <div className="account_cred">
            <div className="myibm">
                <p>My IBM</p>
            </div>
            <div className="login">
               <p>Log in</p>
            </div>          
        </div>}
       </div>

       

    
    )
}

export default Header
