import React, { useRef } from 'react'
import './1_Page.css'
import { Outlet, useLocation, Link } from "react-router-dom";
import { PublicPageList, PagesContent} from './PagesList';
import NotFoundModern from '../NotFoundModern/NotFound';
import logo from '../../assets/logo.webp';

export default function Pages() {
    if (useLocation().pathname != '/pages' && useLocation().pathname != '/parts-of-study'){
      let pagefound = false;
      return <>{PagesContent.map((article) => {
        if ('/pages/' + article.path == useLocation().pathname){
          pagefound = true;
        return(
       <> <title>{article.title + ' | Μια σταγόνα μια ζωή'}</title>  <h1>{article.title}</h1> {article.content} </>)
        }
      } 
        )}{pagefound == false && <NotFoundModern />}
        </>
    }
    else {
      return(
      <div className='pageList row'>
      <img src={logo} />
      <h1>Σελίδες εργασίας</h1>
      <ul>
    {PublicPageList.map((page)=> <li key={page.no}><Link to={page.path}>{page.name}</Link></li>)}
    </ul>
    </div>
    )
    }
}
