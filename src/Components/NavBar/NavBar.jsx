import { NavLink, Route, useLocation, Link} from "react-router-dom"

import logo from '../../assets/logo.webp';
import ehl from '../../assets/ehl.webp';
import fullLogo from '../../assets/logo-full.webp';

import "./NavBar.css"
import { useState, useEffect } from "react";

const AllLinks = [
  {no: 1, name:'Τμήματα εργασίας', to:"/pages"},
  {no: 2, name:'Σχετικά με εμάς', to:"/about-us"},
];


function NavItem(props){
  return <li>{props.noNav ? <Link to={props.to}>{props.name}</Link > : <NavLink onClick={props.on_click} to={props.to}>{props.name}</NavLink >}</li>
};

function NavBar(){
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  window.addEventListener('resize', () =>{
    setScreenWidth(window.innerWidth);
  });

  const [NavBarRevealBTN, setNavBarRevealBTN] = useState(false);

  function MobileSideBar(props){

    return(
      <>
      {props.Width < 650 && (
       <aside id="NavSidebar">
        <nav>
        <img src={fullLogo}/>
          <ul id="LinkBar">
          <NavItem to="/" name="Αρχική" />
                {AllLinks.map((link) =>
          <NavItem to={link.to} name={link.name} key={link.no} noNav={link.noNav}/>
          )}
          </ul>
        </nav>
        <div className="socialLinks">
          <img src={ehl}/>
        <span>1ο Πειραματικό Γυμνάσιο Λάρισας</span>
        </div>
       </aside>
      )
      }
      </>
    )
    };
  function MobileDesktopNavBar(props){
    return(
      <>
      {props.Width > 650 ? ( 
      <ul className="mainNav" >
        
      <li className='logotype'><NavLink to="/"><img src={logo} alt="Εικονίδιο ομάδας Climate Detectives" /></NavLink ></li>
      
        <>
        {props.Width >= 800 && <NavItem to="/" name="Αρχική" />}
        {AllLinks.map((link) =>
          <NavItem to={link.to} name={link.name} key={link.no} noNav={link.noNav}/>
          )}
        </>
        
      </ul>) : (
        <>
        <label htmlFor="NavBarRevealBTN" className="MobileSideBar">
         <input type="checkbox" id="NavBarRevealBTN" />
        </label>
        <NavLink className='logotype mobile' to="/"><img src={logo} alt="Εικονίδιο ομάδας Climate Detectives" /></NavLink >
      </>
      )
    }
    </>
    )
  };

    return(
      <>
<nav className="mainNav">
      <MobileDesktopNavBar Width={screenWidth} setButton={setNavBarRevealBTN} Button={NavBarRevealBTN} />
      <div id="right">{useLocation().pathname == '/sign-in' ? (<NavLink className="blueButton" to="/sign-up">Εγγραφή</NavLink >) : (<NavLink className="blueButton" to="/sign-in">Σύνδεση</NavLink >)}</div>
    </nav>
    <MobileSideBar setButton={setNavBarRevealBTN} Width={screenWidth} />
</>
    )
    }

    export default NavBar;