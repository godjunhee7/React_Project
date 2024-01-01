import { Link } from "react-router-dom";
import React from "react";
import './Nav.css';

function Nav(){
    return(
        <div>
            <div className="navbar">
                <Link className="navbarMenu" to={'/Brief'}>간략 검색</Link>
                <Link className="navbarMenu" to={'/Detail'}>상세 검색</Link>
                <Link className="navbarMenu" to={'/Topic'}>주제별 검색</Link>
            </div>
        </div>

    );
}

export default Nav;