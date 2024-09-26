import React, { useEffect, useRef, useState } from 'react'
import './editorbody.css'
import Button from './Button.jsx'
import './button.css'


const EditorBody = () => {
    const [getdata, setdata] = useState('');
    const[word,setword]=useState(0)
    const ta = useRef();
useEffect(()=>{
    getword()
},[getdata])
let dt =new Date();
let re=dt.getMinutes();
    const getword=()=>{
        setword(getdata.trim().split(' ').length)
        
    }
    const uppercase = () => {
        setdata((text) => text.toUpperCase());
    }
    const lowercase = () => {
        setdata((text) => text.toLowerCase());
    }
    const clear = () => {
        setdata('');
    }
    const copy = () => {
        ta.current?.select();
        window.navigator.clipboard.writeText(getdata)
    }
    const clearspace = () => {
        setdata((text) => text.trim())
    }
    const paste = () => {
        ta.current?.select();
        window.navigator.clipboard.readText(getdata)
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-10 ">
                        <div className="text-box ">
                            <span>Enter Text Below To Customize</span>
                            <textarea name="" value={getdata} ref={ta} onChange={(e) => { setdata(e.target.value) }} rows="3" id=""></textarea>
                        </div>
                    </div>
                    <div className="col-md-10 col-lg-10 ">
                        <Button name="UPPERCASE" id="id" fn={uppercase} />
                        <Button name="LOWERCASE" id="id" fn={lowercase} />
                        <Button name="CLEAR" id="id" fn={clear} />
                        <Button name="COPY TEXT" id="id" fn={copy} />
                        <Button name="CLEAR SPACES" id="id" fn={clearspace} />
                        <Button name="PASTE" id="id" fn={paste} />
                        <div className="text-summary-container">
                            <span className='first'>Your Text Summary</span>
                            <span className='second'>{word} Words and {getdata.length} Characters  </span>
                            <span className='third'>{re} Minuts To Read</span>
                        </div>
                        <div className="text-preview-container">
                            <span className='first'>Preview</span>
                            <input type="text" value={getdata}  placeholder='Nothing To Preview' readOnly/>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}

export default EditorBody
