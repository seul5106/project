import React from 'react';

import {NavLink } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <div id="content">
                <h2>편안한 보금자리를 약속드립니다. 한강빌리지</h2>
                <nav>
                <NavLink className="normalLink" to="/Info1" id="icon1">
                    분양안내
                </NavLink>
                <NavLink className="normalLink" to="#" id="icon2">
                    프리미엄
                </NavLink>
                <NavLink className="normalLink" to="/info2" id="icon3">
                    단지안내
                </NavLink>
                <NavLink className="normalLink" to="#" id="icon4">
                    인테리어
                </NavLink>
                </nav>
            </div>
            <hr />
        </div>
    );
};

export default Home;