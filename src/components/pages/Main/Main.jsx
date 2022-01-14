import React from 'react';
import Button from "../../Button/Button";
import bgimg from '../../../assets/img/bg.png'

const Main = () => {
    return (
        <div className={'main-container'}>

            <div style={{ backgroundImage:`url(${bgimg})`}} className={'main-bg-img'}>
                <div className={'main-sec-container'}>
                <div className={'main-text-container'}>
                    <h1 className={'main-header'}>Test assignment for front-end developers</h1>
                    <p className={"main-subtitle"}>Front-end developers make sure the user sees and interacts with all the necessary elements to ensure conversion. Therefore, responsive design, programming languages and specific frameworks are the must-have skillsets to look for when assessing your front-end developers.</p>

                </div>
                <Button text={'Sign Up'}/>
                </div>
            </div>
        </div>
    );
};

export default Main;