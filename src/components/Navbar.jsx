import React, { useRef } from 'react'
import './navbar.css'
const Navbar = () => {

   const reference= useRef()
   const condition= useRef()

   let a=0;
    const enabledarkmode = () => {
        a++;
        if(a===1){
            reference.current.style.backgroundColor="black";
            reference.current.style.color="white"
            document.getElementById('root').style.backgroundColor="rgb(58, 57, 57)";
            document.getElementById('root').style.color="white";
        }
        else{
            document.getElementById('root').style.backgroundColor="white";
            document.getElementById('root').style.color="black";
            reference.current.style.backgroundColor="white";
            reference.current.style.color="black"
             a=a-2;

        }

    }
    return (
        <>
            <div className="container-fluid  " ref={reference}>
                <div className="row">
                    <nav className="nav">
                        <div className="col-md-6 nav-left">
                            <div className="logo">
                                <h2>TextEditor<span>.com</span></h2>
                            </div>
                            <div className="home">
                                <span>Home</span>
                            </div>
                        </div>
                        <div className="col-7 col-sm-6 nav-right">
                            <div className="form-check form-switch form-check-inline ">
                                <input className="form-check-input " ref={condition} onClick={enabledarkmode} type="checkbox" id="flexSwitchCheckReverse"/>
                                <label className="form-check-label" for="flexSwitchCheckReverse">Enable Dark Mode</label>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </>
    )
}

export default Navbar
