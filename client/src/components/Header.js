import React from "react";
import '../styles/Styles.css'
import {useNavigate} from 'react-router-dom';


function Header() {
    const navigate = useNavigate();

    return(
        <div onClick={() => navigate('/home')} className="Header_Parent_Container">
            <h1>Vastum</h1>
        </div>
    )
}

export default Header

