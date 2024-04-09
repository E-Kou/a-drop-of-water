import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
import bannerImg from '../../assets/flood.jpg';
import owl from '../../assets/ehl.webp';
import {motion} from "framer-motion";

function Home(){
    return(
        <>
        <div id="Hero">
<motion.div initial={{translateY:100,opacity:0}} whileInView={{translateY:0,opacity:1}} transition={{duration:1, ease:'anticipate', delay:1}} id="left">
            <h1>Μια σταγόνα, μια ζωή</h1>
            <p>Εδω, στην Θεσσαλία, πριν μερικούς μήνες μια τεράστρια πλυμμήρα προκάλεσε απίστευτες καταστροφές σε καλλιεργήσιμες εκτάσεις, οικίες...</p>
{/* <img id="TextLogo" src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEihLykdCiUgOTDOdKihwIkRizjwFHqB2VUDMgRv_zXeXHTVyI8C2DpZd_Y1f5kPSC9rexyxF_fIHoVonZTo1Jyu_WYJfxJY1UxiL3xV0Lbly1Wk_TjyR4PpwXd9YNu4l4fhM_2Kxdo9TeK_2qYHAMUTgcm2h-Vuq6SZWqU00zvXFpw84FsBQE4SG8m9pUGS/s1600/%CE%A4%CE%A1%CE%91%CE%A0%CE%95%CE%96%CE%91%CE%91%CE%A0%CE%9F%CE%A4%CE%91%CE%9C%CE%99%CE%95%CE%A5%CE%A3%CE%97%CE%A3%20horizontal.png"/> */}
<div><Link className="blueButton">Σχετικά με το έργο</Link></div>
</motion.div>
        <div id="imgWrapper"><motion.img initial={{filter:'brightness(1.35)', opacity:0, scale:3}} animate={{scale:1, opacity:1, filter:'brightness(1)'}} transition={{duration:1, ease:'anticipate'}} id="HeroImg" alt="Η πλυμμηρισμένη εικόνα της Θεσσαλίας." src={bannerImg}/>
        </div>
        </div>
        <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:2.2, stiffness:150, type:'spring', damping: 9}} className="Banner row">
            <Link to="/about-us">
            <div>
            <h2>Αυτό το έργο δημιουργήθηκε από το:</h2>
            <div id="BannerInfo">
            <h3>1ο Πειραματικό Γυμνάσιο Λάρισας</h3>
            </div>
            </div>
            <img src={owl}/>
            </Link>
        </motion.div>
        <div className="row InfoCards">
<div>
    <h2>Ερευνητικό Ερώτημα</h2>
    <p>Δημιουρήσαμε την εργασία μας με το ακόλουθο ερώτημα στο κέντρο:...</p>
    <div><Link to='/pages/research-question' className="secondaryButton">Μάθετε Περισσότερα</Link></div>
</div>
<div>
    <h2>Πέριληψη Έργου</h2>
    <p>Στην εργασία μας αναλύσαμε τα μετεωρολογικά δεδομένα που συλλέξαμε απο τις σελίδες...</p>
    <div><Link to='/pages/summary' className="secondaryButton">Μάθετε Περισσότερα</Link></div>
</div>
<div>
    <h2>Κύρια αποτελέσματα και συμπεράσματα</h2>
    <p>Συμπεραίνοντας...</p>
    <div><Link to='/pages/results' className="secondaryButton">Μάθετε Περισσότερα</Link></div>
</div>
<div>
    <h2>Δράσεις για περιορισμό του προβλήματος</h2>
    <p>Σχετικές λύσεις που προτάθηκαν στην μελέτη των GIB και WWFᴳᴿ με χρηματοδότηση από την Ευρωπαϊκή Τράπεζα Επενδύσεων...</p>
    <div><Link to='/pages/actions' className="secondaryButton">Μάθετε Περισσότερα</Link></div>
</div>
        </div>
        </>
    )
}

export default Home