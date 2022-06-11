import React from 'react';

import {NavLink} from "react-router-dom";

// 외부 css파일 참조 --> 참조변수 이름을 지정하지 않는다.
import "../assets/css/reset.css";
import "../assets/css/common.css";
import "../assets/css/tab.css";
import "../assets/css/info1.css";

// 이미지파일 참조
import pic_ca1_img01 from '../assets/img/pic_ca1_img01.jpg';
import ico_a from '../assets/img/ico_a.gif';
import ico_o from '../assets/img/ico_o.gif';

/**
 * 외부 CSS 파일을 참조하는 컴포넌트
 */
const Info1 = () => {
    return (
        <div>
            <nav className="tab">
                <div className="active">
                    <NavLink className="tabLink active" to='/info1'>분양안내</NavLink>
                </div>
                <div> 
                    <NavLink className="tabLink" to='/info2'>단지안내</NavLink>
                </div>
            </nav>

            <hr />
                
            <div className="content">
                <h2>1,439세대 대단지. 스케일부터 다릅니다.</h2>
                <div className="img">
                    <img src={pic_ca1_img01} alt="조감도"/>
                </div>
                <h3>주택공급현황</h3>
                <p className="right">
                    <img src={ico_a} alt="아파트"/>아파트
                    <img src={ico_o} alt="오피스텔"/>오피스텔
                </p>
                
                <table>
                    <caption>주택공급현황</caption>
                    <thead>
                    <tr>
                        <th scope="col">면적</th>
                        <th scope="col">구분</th>
                        <th scope="col">일반분양</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td><img src={ico_a} alt="아파트"/>전용면적</td>
                        <td>84.469cm</td>
                        <td>167</td>
                    </tr>
                    <tr>
                        <td><img src={ico_o} alt="오피스텔"/>전용면적</td>
                        <td>84.469cm</td>
                        <td>167</td>
                    </tr>         
                    </tbody>
                    <tfoot>
                    <tr>
                        <th colSpan='2'>합계</th>
                        <th>1,234세대</th>
                    </tr>
                    </tfoot>
                </table>
            </div>
            <hr /> 
        </div>
    );
};

export default Info1;