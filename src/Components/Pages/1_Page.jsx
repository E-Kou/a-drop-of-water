import React, { useRef } from 'react'
import './1_Page.css'
import { Outlet, useLocation, Link } from "react-router-dom";
import { PublicPageList, PagesContent} from './PagesList';
import NotFoundModern from '../NotFoundModern/NotFound';
import logo from '../../assets/logo.webp';
import {motion} from "framer-motion";

export default function Pages() {
  window.scrollTo(0, 0);
    if (useLocation().pathname != '/pages' && useLocation().pathname != '/parts-of-study'){
      let pagefound = false;
      return <>{PagesContent.map((article) => {
        if ('/pages/' + article.path == useLocation().pathname){
          pagefound = true;
        return(

       <> 
       <title>{article.title + ' | Μια σταγόνα μια ζωή'}</title> 
       <div className='pageTop'>
       <div className='pagePanel'>{article.panel}</div>
       <div className='pageInfo'><h1>{article.title}</h1></div>
       </div>
        <div className='pageArticle row'>
          {article.content}
          </div>
        </>
        )
        }
      } 
        )}{pagefound == false && <NotFoundModern />}
        </>
    }
    else {
      return(
      <div className='pageList row'>
      <motion.img initial={{rotate:-100, opacity:0}} animate={{rotate:0, opacity:1}} src={logo} />
      <motion.h1
      initial={{opacity:0}}
      animate={{opacity:1}}
      transition={{duration:1, delay:0.1}}
      >Σελίδες εργασίας</motion.h1>
      <ul>
    {PublicPageList.map((page)=> <motion.li initial={{opacity:0,translateY: -10}} animate={{opacity:1,translateY:0}} transition={{delay: (page.no /10), duration: 0.5}} key={page.no}><Link to={page.path}>{page.name}</Link></motion.li>)}
    </ul>

    </div>
    )
    }
}
