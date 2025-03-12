import "./index.scss";
import LogoA from "../../../assets/images/logo-a.png";
import { useEffect, useRef } from "react";
// import DrawSVGPlugin from "gsap-trial/DrawSVGPlugin";
// import gsap from "gsap-trial";

const Logo = () => {
   

    return (
        <>
        

        <div className="logo-container">
            <img className="solid-logo" src={LogoA} alt="A"/>

            
        </div>
        </>

        
    )
}

export default Logo