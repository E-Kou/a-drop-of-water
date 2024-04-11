import { NavLink, Route, useLocation, Link} from "react-router-dom"

import logo from '../../assets/logo.webp';
import ehl from '../../assets/ehl.webp';
import fullLogo from '../../assets/logo-full.webp';

import "./NavBar.css"
import { useState, useEffect } from "react";

const AllLinks = [
  {no: 1, name:'Τμήματα εργασίας', to:"/pages"},
  {no: 2, name:<i class="fa-solid fa-clipboard-question" aria-hidden="true"/>,size:'small', fullName:'Ερευνητικό ερώτημα', to:"/pages/research-question"},
  {no: 3, name:<i class="fa-solid fa-file" aria-hidden="true"/>,size:'small', fullName:'Περίληψη έργου', to:"/pages/summary"},
  {no: 4, name:<i class="fa-solid fa-square-poll-vertical" aria-hidden="true"/>,size:'small',fullName:'Κύρια αποτελέσματα και συμπεράσματα', to:"/pages/results"},
  {no: 5, name:<i class="fa-solid fa-list" aria-hidden="true"/>,size:'small',fullName:'Δράσεις για περιορισμό του προβλήματος', to:"/pages/actions"},

];


function NavItem(props){
  return <li>{props.noNav ? <Link to={props.to}>{props.name}</Link > : <NavLink end onClick={props.on_click} to={props.to}>{props.name}</NavLink >}</li>
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
          <NavItem  to={link.to} name={<span className={link.size == 'small'? 'smallLink' :''}>{link.name} {link.fullName}</span>} key={link.no} noNav={link.noNav}/>
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
      <div id="right">{useLocation().pathname != '/pages' && (<NavLink className="blueButton" to="/pages">Εργασία</NavLink >)}</div>
    </nav>
    <MobileSideBar setButton={setNavBarRevealBTN} Width={screenWidth} />
</>
    )
    }

    export default NavBar;