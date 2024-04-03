import React from 'react'
import './1_Page.css'
import { Outlet, useLocation } from "react-router-dom";
import { PublicPageList } from './PagesList';
import {Link} from "react-router-dom"
import logo from '../../assets/logo.webp';

export default function Pages() {
  const location = useLocation().pathname;
  return (
    <>
    {location != '/pages' && location != '/parts-of-study' ? <Outlet/> : <div className='pageList row'>
      <img src={logo} />
      <h1>Σελίδες εργασίας</h1>
      <ul>
    {PublicPageList.map((page)=> <li key={page.no}><Link to={page.path}>{page.name}</Link></li>)}
    </ul></div>}
    </>
  )
}
