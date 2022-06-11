import React from 'react';

import {NavLink} from "react-router-dom";

import "../assets/css/reset.css";
import "../assets/css/common.css";
import "../assets/css/tab.css";
import "../assets/css/info2.css";

import pic_ca1_img02 from '../assets/img/pic_ca1_img02.jpg';
import pic_ca1_img03 from '../assets/img/pic_ca1_img03.jpg';
import pic_ca1_img04 from '../assets/img/pic_ca1_img04.jpg';
import pic_ca1_img05 from '../assets/img/pic_ca1_img05.jpg';
import pic_ca1_img06 from '../assets/img/pic_ca1_img06.jpg';
import pic_ca1_img07 from '../assets/img/pic_ca1_img07.jpg';

/**
 * 외부 CSS 파일을 참조하는 컴포넌트
 */
const Info2 = () => {
    return (
        <div>
            <nav className="tab">
                <div>
                    <NavLink className="tabLink active" to='/info1'>분양안내</NavLink>
                </div>
                <div className="active"> 
                    <NavLink className="tabLink" to='/info2'>단지안내</NavLink>
                </div>
            </nav>

            <hr />

            <div className="content">
                <h2>친환경 주거단지, 사람도 자연도 행복합니다.</h2>
                <nav>
                    <NavLink className="imgLink" to='#'><img src={pic_ca1_img02} alt="조감도1"/></NavLink>
                    <NavLink className="imgLink" to='#'><img src={pic_ca1_img03} alt="조감도2"/></NavLink>
                    <NavLink className="imgLink" to='#'><img src={pic_ca1_img04} alt="조감도3"/></NavLink>
                    <NavLink className="imgLink" to='#'><img src={pic_ca1_img05} alt="조감도4"/></NavLink>
                    <NavLink className="imgLink" to='#'><img src={pic_ca1_img06} alt="조감도5"/></NavLink>
                    <NavLink className="imgLink" to='#'><img src={pic_ca1_img07} alt="조감도6"/></NavLink>
                </nav>

                </div>
                <hr />
        </div>
    );
};

export default Info2;