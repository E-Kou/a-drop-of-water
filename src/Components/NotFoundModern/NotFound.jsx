import React, { useRef } from 'react';
import{Link} from "react-router-dom"
import styles from './NotFound.module.css';

export default function NotFoundModern() {
  const backRef = useRef();
  let backing = false;
  const back = () => {
    if(!backing){
    window.history.back();
    backing = true;
    backRef.current.remove();
  } else{
    window.location.replace("/");
  }

  };
  return (
    <div className={styles.WindowBox}>
    <div className={styles.window}>
      <i className='fas fa-triangle-exclamation'></i>
  <h1>Η σελίδα δεν βρέθηκε</h1>
    <p>Η σελίδα που προσπαθήσατε να ανοίξετε δεν υπαρχει.</p>
    <Link className='blueButton full' to="/">Αρχική Σελίδα</Link>
    <a href='#' onClick={back} ref={backRef} className='secondaryButton full'>Προηγούμενη Σελίδα</a>
</div>
</div>
  )
}
