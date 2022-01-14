import React, {useEffect, useState} from 'react';

import {BurgerLines, Logo} from '../Icons';
import {useHistory, useLocation} from "react-router-dom";
import Footer from "../Footer/Footer";


export default function MobileHeader({classesBtn}) {

    const [active, setActive] = useState(false);
    const location = useLocation()

    const handleBurger = () => {
        setActive(!active);
    }

    return (
        <div>
            <button onClick={handleBurger} className={'burger-wrapper'}>
                <BurgerLines/>
            </button>
            <div onClick={handleBurger} className={`burger__overlay ${active ? 'active' : ''}`}></div>
            <div className={`aside ${active ? 'active' : ''}`}>
                <div className="sidebar__wrapper">
                <div  className="aside__header"><Logo/></div>

                <ul className="aside__list">
                    <li className={'list-item'}>About me</li>
                    <li className={'list-item'}>Relationship</li>
                    <li className={'list-item'}>Users</li>
                    <li className={'list-item'}>Sign Up</li>
                    <li className={'list-item'}>Terms and Conditions</li>
                    <span className={'line'}></span>
                    <li className={'list-item'}>How it works</li>
                    <li className={'list-item'}>Partnership</li>
                    <li className={'list-item'}>Contact Us</li>
                    <li className={'list-item'}>Help</li>
                    <li className={'list-item'}>Level testimonial</li>
                    <li className={'list-item'}>Contact Us</li>
                    <span className={'line'}></span>
                    <li className={'list-item'}>Articles</li>
                    <li className={'list-item'}>Our News</li>
                    <li className={'list-item'}>Testimonials</li>
                    <li className={'list-item'}>Licenses</li>
                    <li className={'list-item'}>Privacy Policy</li>
                </ul>

                </div>
                {/*{active && <div className={'footer-wrapper footer-transition'}>*/}

                {/*</div>}*/}
               {/* {active &&*/}
               {/*     <Footer active={active}/>*/}
               {/*}*/}
                <Footer active={active}/>
                {/*<Footer/>*/}

            </div>

        </div>
    );
}
