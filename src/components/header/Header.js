import React from "react";
import "./Header.scss";

function Header() {
 return (
     <header className={"header"}>
       <ul className={"menu"}>
         <li>
           <a className="logo" href="/"><span className="very-grey-color"> &lt; Home Page</span></a>
         </li>
       </ul>
     </header>
 );
}
export default Header;