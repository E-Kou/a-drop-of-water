import './Footer.css'
import fullLogo from '../../assets/logo-full.webp';
import { PublicPageList} from '../Pages/PagesList';
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion';

const creditLinks = [
    {name:'Ιστορία της Θεσσαλίας',
pageName:'Greek Paradise',
link:'https://greeceparadise.gr/12-istoria-tis-thessalias/',
no:1,
        codeNo:'credit1',
 },
{name:'Γεωγραφία',
pageName:'enjoy thessaly',
link:'https://enjoythessaly.com/geografia/'
,
no:2,
        codeNo:'credit2',
 },
{name:'UK heat and floods in south-east Europe blamed on ‘omega’ weather system',
pageName:'The Guardian',
link:'https://www.theguardian.com/world/2023/sep/06/uk-heatwave-floods-south-east-europe-omega-weather-system'
,
no:3,
        codeNo:'credit3',
 },
{name:'Θεσσαλία',
pageName:'EO Browser',
link:'https://sentinelshare.page.link/CMzf'
,
no:4,
        codeNo:'credit4',
 },
{name:'Κλιματικά δεδομένα Λάρισας',
pageName:'ΕΜΥ',
link:'http://www.emy.gr/emy/el/climatology/climatology_city?perifereia=Thessaly&poli=Larisa'
,
no:5,
        codeNo:'credit5',
 },
{name:'Κλιματικά δεδομένα Αγχίαλου',
pageName:'ΕΜΥ',
link:'http://www.emy.gr/emy/el/climatology/climatology_city?perifereia=Thessaly&poli=Volos_Aghialos'
,
no:6,
        codeNo:'credit6',
 },
{name:'Μηνιαίο Δελτίο Μετεωρολογικών Παραμέτρων Ελλάδα Σεπτέμβριος 2023',
pageName:'Meteo',
link:'https://stratus.meteo.noa.gr/data/bulletins/deltio_noa092023.pdf'
,
no:7,
        codeNo:'credit7',
 },
{name:'Από τις φωτιές στον Daniel: Η καταστροφή σε αριθμούς (infographic)',
pageName:'CNNᴳᴿ',
link:'https://www.cnn.gr/ellada/longform/382874'
,
no:8,
        codeNo:'credit8',
 },
{name:'Κακοκαιρία Daniel: Καταρρίφθηκε το ρεκόρ ημερήσιου ύψους βροχής στη χώρα μας',
pageName:'Meteo',
link:'https://www.meteo.gr/article_view.cfm?entryID=2913'
,
no:9,
        codeNo:'credit9',
 },
{name:'Τα ύψη βροχόπτωσης της κακοκαιρίας DANIEL στη Θεσσαλία',
pageName:'Meteo',
link:'https://meteo.gr/article_view.cfm?entryID=2930'
,
no:10,
        codeNo:'credit10',
 },
{name:'Ανάρτηση σχετικά με το αίτιο της κακοκαιρίας Daniel',
pageName:'𝕏',
link:'https://twitter.com/WeatherProf/status/1699278684283159017?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1699278684283159017%7Ctwgr%5E3dd243a3de547b34e233767fea2cbb5117e13826%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.theguardian.com%2Fworld%2F2023%2Fsep%2F06%2Fuk-heatwave-floods-south-east-europe-omega-weather-system'
,
no:11,
        codeNo:'credit11',
 },
{name:'Λύσεις βασιζόμενες στην φύση για τον περιορισμό των πλημμυρών στην Ελλάδα',
pageName:'Ευρωπαϊκή Τράπεζα Επενδύσεων',
link:'https://www.eib.org/en/stories/nature-based-solutions-flood-greece'
,
no:12,
        codeNo:'credit12',
 },
{name:'Μελέτη χρήσης λύσεων βασισμένων στην φύση για τις πλημμύρες στην Θεσσαλία',
pageName:' Global Infastructure Basel & WWFᴳᴿ',
link:'https://gib-foundation.org/wp-content/uploads/2022/05/2022_NbS_Thessaly_Pre-feasibility-study.pdf'
,
no:13,
        codeNo:'credit13',
 },
{name:'Βιώσιμη εκτίμηση κεφαλάιου αποκατάστασης ποταμών στην Ελλάδα',
pageName:'Global Resource Centre',
link:'https://nbi.iisd.org/report/savi-river-restoration-in-greece/'
,
no:14,
        codeNo:'credit14',
 }
]

function Footer(props){
    return(
        <motion.footer layout>

            <div className="row" id='sections'>
            <div id='aboutUs'> 
                <img id='logotype' loading='lazy' src={fullLogo} />
                <p>Καλώς ήρθατε στην ιστοσελίδα της εργασίας «Μια σταγόνα, μια ζωή» του Ομίλου Μετεωρολογίας - Αστρονομίας του 1ου Πειραματικού Γυμνασίου Λάρισας στα πλαίσια του προγράμματος <a href='https://climatedetectives.esa.int/'>Climate Detectives</a>. Θεσσαλία. Σε αυτή την εργασία αναλύουμε τις συνέπειές αυτού της κακοκαιρίας Daniel και συγκεντρώνουμε γενικότερες πληροφορίες σχετικά με αυτήν.</p>
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
                    <p>Η Θεσσαλία είναι ένα γεωγραφικό διαμέρισμα στην κεντρική περίπου Ελλάδα. Θυμίζεται για τον Θεσσαλικό Κάμπο, ο οποίος όντας γονιμότατος στηρίζει την γεωργία από την αρχαιότητα μέχρι σήμερα. Όμως η κακοκαιρία "Daniel" προκάλεσε τεράστιες καταστροφές τις οποίες, μεταξύ άλλων, αποφασίσαμε να μελετήσουμε.</p>
                    <Link to='/pages/thessaly' style={{marginTop:10}} className='blueButton'>Μάθετε περισσότερα</Link >
                    </div>
                </div>

                <div id='Tab2' className="CardContents">
                    <div className='CardArea'>
                    <h4>Πηγές εργασίας</h4>
                    <div>
                    {creditLinks.map((credit)=><>
                    <p className='credit' key={credit.no} id={credit.codeNo} ><Link to={credit.link}>{credit.name} | {credit.pageName}</Link></p>
                    </>)}
                    </div>
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