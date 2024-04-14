import React from "react";
import {Link} from "react-router-dom";
import './Home.css';
import bannerImg from '../../assets/flood.jpg';
import owl from '../../assets/ehl.webp';
import {motion} from "framer-motion";

function Home(){
    document.title = 'Μια σταγόνα μια ζωή';
    window.scrollTo(0, 0);
    return(
        <>
        <div id="Hero">
<motion.div initial={{translateY:100,opacity:0}} whileInView={{translateY:0,opacity:1}} transition={{duration:1, ease:'anticipate', delay:1}} id="left">
            <h1>Μια σταγόνα, μια ζωή</h1>
            <p>Η κακοκαιρία Daniel προκάλεσε άνευ προηγουμένου φυσικές καταστροφές στην Θεσσαλία. Σε αυτή την εργασία αναλύουμε τις συνέπειές αυτού του φυσικού φανομένου και συγκεντρώνουμε γενικότερες πληροφορίες πάνω σε αυτό.</p>
<div><Link to='#aboutUs' className="blueButton">Σχετικά με το έργο</Link></div>
</motion.div>
        <div id="imgWrapper"><motion.img initial={{filter:'brightness(1.35)', opacity:0, scale:3}} animate={{scale:1, opacity:1, filter:'brightness(1)'}} transition={{duration:1, ease:'anticipate'}} id="HeroImg" alt="Η πλυμμηρισμένη εικόνα της Θεσσαλίας." src={bannerImg}/>
        </div>
        </div>
        <div style={{padding: '25px 12px', overflow: 'hidden', maxWidth: '100%'}}>
        <motion.div initial={{scaleY:0}} animate={{scaleY:1}} transition={{delay:2.2, stiffness:150, type:'spring', damping: 9}} className="Banner row">
            <Link to="/pages/about">
            <div>
            <h2>Αυτό το έργο δημιουργήθηκε από το:</h2>
            <div id="BannerInfo">
            <h3>1ο Πειραματικό Γυμνάσιο Λάρισας</h3>
            </div>
            </div>
            <img src={owl}/>
            </Link>
        </motion.div>
        </div>
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