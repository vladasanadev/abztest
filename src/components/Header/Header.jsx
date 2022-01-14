import React from 'react';
import DesctopHeader from "../DesctopHeader/DesctopHeader";
import MobileHeader from "../MobileHeader/MobileHeader";

const Header = ({type}) => {
    return (
        <div>
            { //Check prop type
                (type==='mobile')
                    ? <MobileHeader/>
                    : <DesctopHeader/>
            }

        </div>
    );
};

export default Header;