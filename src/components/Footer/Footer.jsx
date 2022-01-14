import React from 'react';
import {FooterLogo} from "../Icons";

const Footer = ({active}) => {
    return (
        <div className={`footer-wrapper ${active ? "footer-transition" : ""}`}>
            <div className={'footer-black-section'}></div>
            <a className={'footer-links'} href={"https://abz.agency/?gclid=Cj0KCQiAuP-OBhDqARIsAD4XHpfSLAabJMq-y3cPnk8bcRgRJhoyz67yIZ9Cy2NAMDeeOhewjUevLlEaAgsFEALw_wcB"} target={"_blank"}>
                <FooterLogo/>
                <p className={'footer-last-section'}>0402 - Mobile-menu - 360</p>
            </a>
        </div>
    );
};

export default Footer;