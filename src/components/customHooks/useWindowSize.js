import { useState, useEffect } from "react";

//hook for tracking resize of the screen
export default function useWindowSize() {

    const [type, setType] = useState('');
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });
    useEffect(() => {

        function handleResize() {

            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
            console.log(window.innerWidth, 'HOOK')
            if (window.innerWidth > 480)
            {
                setType('desctop')
            }
            else setType('mobile')
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return type;
}