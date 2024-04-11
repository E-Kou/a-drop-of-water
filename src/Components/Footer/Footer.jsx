import './Footer.css'
import fullLogo from '../../assets/logo-full.webp';
import { PublicPageList} from '../Pages/PagesList';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

function Footer(props){
    return(
        <motion.footer layout>
            {/* <div>
            <div className="row warning-note"><h3></h3>
  <p></p></div>
  </div> */}
            <div className="row" id='sections'>
            <div> 
                <img id='logotype' loading='lazy' src={fullLogo} />
                <p>Καλωσήρθατε στην ιστοσελίδα της εργασίας «Μια στραγόνα, μια ζωή» του Ομίλου Μετεωρολογίας - Αστρονομίας του 1ου Πειραματικού Γυμνασίου Λάρισας στα πλαίσα του προγράμματος <a href='https://climatedetectives.esa.int/'>Climate Detectives</a>.</p>
            </div>
            <div>
      <h2>Σελίδες εργασίας</h2>
      <ul id='pageLinks'>
    {PublicPageList.map((page)=> <li key={page.no}><Link to={page.path}>{page.name}</Link></li>)}
    </ul>
            </div>
            </div>
            <div className="row" id='bottom'>
                <div id='CardMenu'>
                <div id='Tab1' className="CardContents">
                    <div className='CardArea'>
                    <h4>Θεσσαλία</h4>
                    <p>Η Θεσσαλία είναι ένα γεωγραφικό διαμέρισμα στην κεντρική περίπου Ελλάδα. Θυμίζεται για τον Θεσσαλικό Κάμπο, ο οποίος όντας γονιμότατος στηίζει την γεωργία από την αρχαιότητα μέχρι σήμερα. Όμως η κακοκαιρία "Daniel" προκάλεσε τεράστιες καταστροφές τις οποίες, μεταξύ άλλων, αποφασίσαμε να μελετήσουμε.</p>
                    <Link to='/pages/thessaly' style={{marginTop:10}} className='blueButton'>Μάθετε περισσότερα</Link >
                    </div>
                </div>

                <div id='Tab2' className="CardContents">
                    <div className='CardArea'>
                    <h4>Ποιοι είμαστε</h4>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed porro vel esse rerum qui ea numquam a quaerat asperiores exercitationem accusamus est laudantium, saepe error.</p>
                    </div>
                </div>

                <div id='Tab3' className="CardContents">
                    <div className='CardArea'>
                        <p style={{padding:10}}>
                            Το αρχαιότερο σχολείο Δευτεροβάθμιας εκπαίδευσης στην Λάρισα. Ένα σχολείο που διδάσκει στους μαθητές του την χαρά της Μάθησης.</p>
                    <ul>
                        <li><Link target='_blank' to='https://www.facebook.com/profile.php?id=100064293242239'><i className="fa-brands fa-facebook"></i> Facebook</Link></li>
                        <li><Link target='_blank' to='https://www.youtube.com/@1o_gym_larisas/videos'><i className="fab fa-youtube"></i> Youtube</Link></li>
                        <li><Link target='_blank' to='https://ehl.gr/'><i className="fa-solid fa-globe"></i> Website</Link></li>
                    </ul>
                    </div>
                </div>
                <div id='Tab4' className="CardContents">
                    <div className='CardArea'>
                        <div>
                        <h4>Μαθητές:</h4>
                    <ul>
                        <li>Άγγελος Γεωργίου</li>
                        <li>Ευάγγελος Κουτσογιάννης</li>
                    </ul>
                    </div>
                    <div>
                        <h4>Καθηγητής:</h4>
                    <ul>
                        <li>Βασίλειος Τουρναβίτης</li>
                    </ul>
                    </div>
                    <div>
                    <Link to='/pages/about' style={{marginTop:10}} className='blueButton'>Σχετικά με εμάς</Link >
                    </div>
                    </div>
                </div>

                </div>
                <div>
                    <ul>
                        <li><div><input type="checkbox" id="TabBTN1"/><label htmlFor="TabBTN1"><i className='back fa-solid fa-arrow-left'></i>Η Θεσσαλία μας</label>  </div>
                        </li>
                        <li><div><input type="checkbox" id="TabBTN2"/><label htmlFor="TabBTN2"><i className='back fa-solid fa-arrow-left'></i>Πηγές</label></div>
                        </li>
                        <li><div><input type="checkbox" id="TabBTN3"/><label htmlFor="TabBTN3"><i className='back fa-solid fa-arrow-left'></i>1ο Πειραματικό Γυμνάσιο Λάρισας</label> </div>
                        </li>
                        <li><div><input type="checkbox" id="TabBTN4"/><label htmlFor="TabBTN4" id='FooterDisclaimer'><i className='back fa-solid fa-arrow-left'></i>Μέλη εργασίας</label></div>
                        </li>
                    </ul>
                </div>
            </div>
        </motion.footer>
    )
}

export default Footer