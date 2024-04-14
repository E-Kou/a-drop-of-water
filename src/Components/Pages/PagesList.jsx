export const PublicPageList = [
  { no: 1, name: <><i className="fa-solid fa-clipboard-question" /> Ερευνητικό ερώτημα</>, path: '/pages/research-question', },
  { no: 2, name: <><i className="fa-solid fa-file" /> Περίληψη έργου</>, path: '/pages/summary', },
  { no: 3, name: <><i className="fa-solid fa-square-poll-vertical" /> Κύρια αποτελέσματα και συμπεράσματα</>, path: '/pages/results', },
  { no: 4, name: <><i className="fa-solid fa-list" /> Δράσεις για περιορισμό του προβλήματος</>, path: '/pages/actions', }
]

export const OtherPageList = [
  { no: 1, name: <><i className="fa-solid fa-clipboard-question" /> Ερευνητικό ερώτημα</>, path: '/pages/research-question', },
  { no: 2, name: <><i className="fa-solid fa-file" /> Περίληψη έργου</>, path: '/pages/summary', },
  { no: 3, name: <><i className="fa-solid fa-square-poll-vertical" /> Κύρια αποτελέσματα και συμπεράσματα</>, path: '/pages/results', },
  { no: 4, name: <><i className="fa-solid fa-list" /> Δράσεις για περιορισμό του προβλήματος</>, path: '/pages/actions', }
]

import { Chart as ChartJS } from 'chart.js/auto';
import { Bar, Doughnut, Line } from 'react-chartjs-2';

import boukefalas from "../../assets/boukefalas.webp"
import agalmaBoukefalas from "../../assets/agalma_boukefalas.webp"
import Daniel from "../../assets/daniel.webp"
import tc1 from "../../assets/tc1.webp"
import tc2 from "../../assets/tc2.webp"
import swir1 from "../../assets/swir1.webp"
import swir2 from "../../assets/swir2.webp"
import ndsi1 from "../../assets/ndsi1.webp"
import ndsi2 from "../../assets/ndsi2.webp"
import thessaly from "../../assets/thessaly.webp"
import excel from '../../assets/excel.svg'
import piniosTH from '../../assets/pinios-thessalias.webp'
import solutions from '../../assets/solutions.webp'


import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';



function ResultsPanel() {
  const [toggleTab, setToggleTab] = useState('tc');
  return (
    <><div><ImgComparisonSlider className={toggleTab == 'tc' ? 'open_tab' : ''} hover='hover'>
      <div slot="first">
        <div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>10 Σεπτεμβρίου 2023</h4></div>
        <img src={tc2} />
      </div>
      <div slot="second">
        <div id="afterFlooding"><h5>Θεσσαλία</h5><h4>10 Σεπτεμβρίου 2022</h4></div>
        <img src={tc1} />
      </div>
    </ImgComparisonSlider>
      <ImgComparisonSlider className={toggleTab == 'swir' ? 'open_tab' : ''} hover='hover'>
        <div slot="first">
          <div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>10 Σεπτεμβρίου 2023</h4></div>
          <img src={swir2} />
        </div>
        <div slot="second">
          <div id="afterFlooding"><h5>Θεσσαλία</h5><h4>10 Σεπτεμβρίου 2022</h4></div>
          <img src={swir1} />
        </div>
      </ImgComparisonSlider>
      <ImgComparisonSlider className={toggleTab == 'ndsi' ? 'open_tab' : ''} hover='hover'>
        <div slot="first">
          <div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>10 Σεπτεμβρίου 2023</h4></div>
          <img src={ndsi2} />
        </div>
        <div slot="second">
          <div id="afterFlooding"><h5>Θεσσαλία</h5><h4>10 Σεπτεμβρίου 2022</h4></div>
          <img src={ndsi1} />
        </div>
      </ImgComparisonSlider>
      <div className={toggleTab == 'drone' ? 'open_tab droneIMG' : 'droneIMG'} ><div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>Πλημμύρα λόγω κακοκαιρίας Daniel</h4></div><img src={thessaly} /></div>
    </div>
      <div className='Controller row'>
        <div title='True color composite' className={toggleTab == 'tc' ? 'open_btn' : ''} onClick={() => setToggleTab('tc')}><button>True color</button>
        </div>
        <div title='Short wave infrared composite' className={toggleTab == 'swir' ? 'open_btn' : ''} onClick={() => setToggleTab('swir')}><button>SWIR</button>
        </div>
        <div title='Normalised Difference Snow Index' className={toggleTab == 'ndsi' ? 'open_btn' : ''} onClick={() => setToggleTab('ndsi')}><button>NDSI</button>
        </div>
        <div className={toggleTab == 'drone' ? 'open_btn' : ''} onClick={() => setToggleTab('drone')}><button>Εικόνα Drone</button>
        </div>
      </div>
    </>
  )
}

export const PagesContent = [
  {title: 'Περίληψη έργου',
    path: 'summary',
    panel: <video autoPlay muted>
      <source src='https://gpm.nasa.gov/sites/default/files/2023-09/Daniel_20230907_2330UTC.mp4' type='video/mp4' />
      Το πρόγρααμμα περιήγησης σας δεν υποστηρίζει την προβολή βίντεο.
    </video>,
    panelSrc: <p>Πηγή βίντεο: <a target='_blank' href='https://gpm.nasa.gov/applications/weather/news/imerg-captures-flooding-rainfall-greece'>NASA</a></p>,
    content:
      <>
        <p className='default'>
          Η Κακοκαιρία Daniel ήταν μία μεγάλη φυσική καταστροφή η οποία έλαβε χώρα περίπου στο πρώτο μισό του Σεπτεμβρίου του 2023 (3-12 Σεπτεμβρίου). Η κακοκαιρία αυτή εκδηλώθηκε μέσω ισχυρών βροχοπτώσεων οι οποίες με τη σειρά τους προκάλεσαν πλημμύρες μεγάλης κλίμακας. Οι πλημμύρες αυτές αποτέλεσαν κάτι πολύ σοβαρό για την περιοχή της Θεσσαλίας καθώς προκλήθηκαν υλικές ζημιές και απώλειες κτηνοτροφικών ζώων και ακόμη και ανθρώπων λόγω της υπερχείλισης του ποταμού Πηνειού και των παραποτάμων του.
        </p>
        <p className='default'>
          Οι μαθητές της Γ’ Γυμνασίου του 1ου Πειραματικού Γυμνασίου Λάρισας έσπευσαν να αναλύσουν πως εκδηλώθηκαν οι πλημμύρες αλλά και τον αντίκτυπο του στην περιοχή. Χρησιμοποιήθηκαν στοιχεία διασταυρωμένα από ποικίλες πηγές όπως: η Meteo και η ΕΜΥ για την εξέλιξη των πλημμυρών, άρθρο των Financial Times για τις συνέπειές τους και άλλα.
        </p>
        <h3>Σχετικά με την Θεσσαλία </h3>
        <p style={{ marginBottom: 50 }} className='default'>
          Η Θεσσαλία είναι ένα γεωγραφικό διαμέρισμα στην κεντρική περίπου Ελλάδα, βόρεια της οποίας βρίσκεται η Μακεδονία, νότια της η Στερεά Ελλάδα και δυτικά της η Ήπειρος ενώ στα ανατολικά της βρέχεται από το Αιγαίο Πέλαγος. Οι κύριες πόλεις της Θεσσαλίας είναι η Λάρισα, ο Βόλος, τα Τρίκαλα και η Καρδίτσα. Σύμφωνα με την απογραφή του 2011 η Θεσσαλία αριθμεί 732.762 κατοίκους. Η έκτασή της ανέρχεται στα 14.036 χλμ². Η Θεσσαλία επίσης είναι γνωστή για την μεγάλη πεδιάδα της, τον Θεσσαλικό Κάμπο, από τον οποίο περνά ο Πηνειός ποταμός, ο τρίτος μεγαλύτερος ποταμός της Ελλάδας (μήκος: 205 χλμ.) καθώς και για το διάσημο βουνό Όλυμπο το οποίο βρίσκεται στα όρια της με την Μακεδονία.
          <Link to='/pages/thessaly' style={{ display: 'inline-block', float: 'right' }} className='blueButton'>Περισσότερα για την Θεσσαλία</Link >
        </p>


        <div className='warning-note asterisc'>
          <p>Αυτή η εργασία έχει σκοπό να αναλύσει τον άμεσο αντίκτιπο και το μέγεθος της κακοκαιρίας Daniel στη Θεσσαλία και όχι να αναλύσει θεωρίες κλιματικής αλλαγής. Για κάτι τέτοιο απαιτούνται δεδομένα το ελάχιστο 16 ετών κατόπιν συμβάντος.</p></div>
      </>
  },
  {title: "Κύρια αποτελέσματα και συμπεράσματα",
    path: "results",
    panel: <ResultsPanel />,
    panelSrc: <p>Πηγή χαρτών: <a target='_blank' href='https://apps.sentinel-hub.com/eo-browser/?zoom=10&lat=39.57606&lng=22.22122&themeId=DEFAULT-THEME&visualizationUrl=https%3A%2F%2Fservices.sentinel-hub.com%2Fogc%2Fwms%2Fbd86bcc0-f318-402b-a145-015f85b9427e&datasetId=S2L2A&fromTime=2023-09-10T00%3A00%3A00.000Z&toTime=2023-09-10T23%3A59%3A59.999Z&layerId=6-SWIR&demSource3D=%22MAPZEN%22'>EO Browser</a></p>,
    content: <>
      <p>
        Οι επιπτώσεις των πλημμυρών λόγω της κακοκαιρίας Daniel στον Θεσσαλικό χώρο, η οποία διήρκησε περίπου 5 ημέρες (4-8/9/2023), ήταν πάρα πολύ σοβαρές και επιζήμιες τόσο για την τοπική όσο και για την εθνική οικονομία της χώρας. Το μέγεθος της κακοκαιρίας ήταν τόσο μεγάλο, που σύμφωνα με το <a href="https://www.cnn.gr/ellada/longform/382874/apo-tis-foties-ston-daniel-i-katastrofi-se-arithmoys-infographic" target='_blank'>CNNᴳᴿ</a> καταστράφηκαν 750.000 στρέμματα καλλιεργειών, ενώ συντρίφτηκε «ρεκόρ» βροχόπτωσης με <a href='https://www.meteo.gr/article_view.cfm?entryID=2913' target='_blank'>754mm μέσα σε μόλις 21 ώρες</a> στην Ζαγορά Πήλιου. Πρόκειται για ένα νούμερο εξωφρενικό ειδικότερα όταν το συγκρίνουμε με τη μέση ετήσια βροχόπτωση της Αθήνας, η οποία είναι 400mm.
      </p>
      <h4>Ορισμένες από τις επιπτώσεις της πλημμύρας είναι:</h4>
      <ul>
        <li>απώλεια 80.000 αιγοπροβάτων.</li>
        <li>δυσκολία επιβίωσης των ζώων λόγω πλημμυρισμένων εκτάσεων και αδυναμίας εύρεσης ζωοτροφής.</li>
        <li>πλημμύρα και μακροχρόνια αχρήστευση του ¼ του καλλιεργήσιμου εδάφους της Θεσσαλίας καθώς και καταστροφή αρκετών υποδομών.</li>
        <li>συνολική ζημιά που ανέρχεται στα εκατομμύρια και είναι τριπλάσια από την κακοκαιρία «Ιανό».</li>
      </ul>
      <p>Όπως είναι προφανές και από χάρτες στο πάνω μέρος της σελίδας, η απερίγραπτη ποσότητα νερού που <Link target='_blank' to='https://el.wiktionary.org/wiki/%E1%BD%95%CF%89#%CE%91%CF%81%CF%87%CE%B1%CE%AF%CE%B1_%CE%B5%CE%BB%CE%BB%CE%B7%CE%BD%CE%B9%CE%BA%CE%AC_(grc)'>ὕσθη</Link> μέχρι τις 10/09/23 (ημερομηνία χάρτη από EO Browser) κατέστεψε οικίες, χωράφια και γενικότερα ό,τι βρέθηκε στον δρόμο της.</p>
      <div className='twoCharts'>
        <div><Bar
          data={{
            labels: ['Μέσο ύψος υετού μήνα Σεπτεμβρίου', 'Σεπτεμβριος 2023'],
            datasets: [
              {
                label: 'Υετός (mm)',
                data: [53.7, 200],
                backgroundColor: [
                  '#1a45d0',
                  '#d01a1a',
                ]
              },
            ]
          }} options={{
            indexAxis: 'y', responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Υετός (mm)'
                }
              }
            },
            plugins: {
              legend: false,
              title: {
                display: true,
                text: 'Yψος βροχόπτωσης λόγω κακοκαιρίας daniel στην Λάρισα',
                font: {
                  size: 15
                }
              }
            }
          }}
        /></div>
        <div><Bar
          data={{
            labels: ['Μέσο ύψος υετού μήνα Σεπτεμβρίου', 'Σεπτεμβριος 2023'],
            datasets: [
              {
                label: 'Θερμοκρασία',
                data: [38.5, 448],
                backgroundColor: [
                  '#1a45d0',
                  '#d01a1a',
                ]
              },
            ]
          }} options={{
            indexAxis: 'y', responsive: true,
            scales: {
              x: {
                display: true,
                title: {
                  display: true,
                  text: 'Υετός (mm)'
                }
              }
            },
            plugins: {
              legend: false,
              title: {
                display: true,
                text: 'Yψος βροχόπτωσης λόγω κακοκαιρίας daniel στην Αγχίαλο',
                font: {
                  size: 15
                }
              }
            }
          }}
        /></div>
      </div>
      <div className='row' style={{ margin: '0 auto', width: 'fit-content' }}>
        <h3 style={{ width: 'fit-content' }}>Σχετικό ρεπορτάζ από Sky news</h3>
        <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/8lPl7FJBzZI?si=yNFsEyI8hyNIHf41&amp;start=26" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <iframe style={{ borderRadius: 10 }} width="100%" height="900" frameborder="0" src="https://onedrive.live.com/embed?resid=9929E4ADFB90BE21%215459&authkey=%21AIBTK8VEnNMl7vU&em=2&wdAllowInteractivity=False&ActiveCell='%CE%A6%CF%8D%CE%BB%CE%BB%CE%BF1'!A117&Item='%CE%A6%CF%8D%CE%BB%CE%BB%CE%BF1'!A1%3AN181&wdHideGridlines=True&wdDownloadButton=True&wdInConfigurator=True&wdInConfigurator=True"></iframe>
      <a style={{ textDecoration: 'none' }} href='https://www.mediafire.com/file/m2xqatbzqmpmmhh' target='_blank'><div className='imgBox download'><img src={excel} /><p>excel-A-drop-of-water-a-life.xlsx</p>Λήψη</div></a>
    </>
  },
  {title: "Θεσσαλία",
    path: "thessaly",
    panel: <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677558.1248216!2d21.4079969819568!3d39.57546826838777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a7792f814128a5%3A0x100bd2ce2b9c5e0!2zzpjOtc-Dz4POsc67zq_OsQ!5e1!3m2!1sel!2sgr!4v1712518422705!5m2!1sel!2sgr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
    content:
      <><p>Η Θεσσαλία είναι ένα γεωγραφικό διαμέρισμα στην κεντρική περίπου Ελλάδα, βόρεια της οποίας βρίσκεται η Μακεδονία, νότια της η Στερεά Ελλάδα και δυτικά της η Ήπειρος ενώ στα ανατολικά της βρέχεται από το Αιγαίο Πέλαγος. Οι κύριες πόλεις της Θεσσαλίας είναι η Λάρισα, ο Βόλος, τα Τρίκαλα και η Καρδίτσα. Σύμφωνα με την απογραφή του 2011 η Θεσσαλία αριθμεί 732.762 κατοίκους. Η έκτασή της ανέρχεται στα 14.036 χλμ². Η Θεσσαλία επίσης είναι γνωστή για την μεγάλη πεδιάδα της, τον Θεσσαλικό Κάμπο, από τον οποίο περνά ο Πηνειός ποταμός, ο τρίτος μεγαλύτερος ποταμός της Ελλάδας (μήκος: 205 χλμ.) καθώς και για το βουνό Όλυμπο το οποίο βρίσκεται στα όρια της με την Μακεδονία. </p>
        <h3>Η Ιστορία της Θεσσαλίας</h3>
        <p>
          Η Θεσσαλία αποτελούσε ένα σημαντικό μέρος της αρχαίας Ελλάδας το οποίο ήταν ιδιαίτερα συνδεδεμένο με τον υπόλοιπο ελληνικό χώρο. Μάλιστα, οι Θεσσαλοί είχαν ήδη συνειδητοποιήσει από τους αρχαίους χρόνους ότι αποτελούσαν κάτι κοινό οπότε ήταν σε στενή επαφή μεταξύ τους μέσω του Κοινού των Θεσσαλών. Αργότερα, η Θεσσαλία πέρασε στον έλεγχο των Μακεδόνων και μετά των Ρωμαίων. Ύστερα, ακολούθησε η Βυζαντινή περίοδος και μετέπειτα η οθωμανική. Η Θεσσαλία παραχωρήθηκε τελικά στο ελληνικό κράτος το 1881 και από τότε αποτελεί αναπόσπαστο κομμάτι της Ελλάδας. Ο Θεσσαλικός κάμπος μέχρι τις αρχές του 20ού αιώνα ήταν σιτοβολώνας για την Ελλάδα. Η ύπαρξη του έκανε τη Θεσσαλία μια από τις λίγες περιοχές στην Αρχαία Ελλάδα που μπορούσαν να στεγάσουν μεγάλο αριθμό ιππικού. Το θεσσαλικό ιππικό ήταν σημαντικό μέρος του αρχαίου Μακεδονικού στρατού του Φιλίππου Β' και του Μεγάλου Αλεξάνδρου.
        </p>
        <div><div className='imgBox'><img src={boukefalas} /><p>Ο Μέγας Αλέξανδρος δαμάζει τον βουκεφάλα, άλογο θεσσαλικής καταγωγής, από μικρή ηλικία.</p></div><div className='imgBox'><img src={agalmaBoukefalas} /><p>Άγαμλα του Βουκεφάλα μπροσά από την εκκλησία Αγίου Αχιλλίου, Λάρισα.</p></div></div>
      </>
  },
  {title: "Ερευνητικό ερώτημα",
    path: "research-question",
    panel: <img className='imgHero' src={Daniel} />,
    content: <div><p style={{ fontSize: '1.25rem', marginBottom: 15 }}>Η ομάδα μας, αποτελούμενη από τον Άγγελο Γεωργίου και Ευάγγελο Κουτσογιάννη, μαθητές του 1ου Πειραματικού Γυμνασίου Λάρισας, επέλεξε ως κεντρικό ερευνητικό ερώτημα της εγασίας μας είναι το εξής:</p>
      <div id='theQuestion'>Πώς επηρέασε τη Θεσσαλία η κακοκαιρία Daniel;</div>
    </div>
  },
  {title: "Δράσεις για περιορισμό του προβλήματος",
    path: "actions",
    panel:<img className='imgHero' src={piniosTH}  />,
    content: <>
    <p>Είναι προφανές πως τέτοιου είδους πλημμύρες αποτελούν κρίσιμο πρόβλημα τόσο για την τοπική οικονομία όσο και για την ζωή των κατοίκων. </p>
    <p>Σχετικές λύσεις που προτάθηκαν στην μελέτη των GIB και WWFᴳᴿ με χρηματοδότηση από την Ευρωπαϊκή Τράπεζα Επενδύσεων συστήνουν χρήση φυσικών λύσεων. «Δουλεύοντας με τη φύση, όχι εναντίον της» αναφέρεται χαρακτηριστικά.</p>
    <p>Πιο συγκεκριμένα, λύσεις στηριζόμενες στην φύση όπως ¹·εκπλάτυνση ποταμών, ²·επανασύνδεση τους με πλημμυρικές πεδιάδες, οι οποίες μέχρι και σήμερα χρησιμοποιούνται για οικοδόμηση και γεωργία λόγω της υψηλής γονιμότητας του χώματός τους, ³·δημιουργία παρόχθιων δασών και ⁴·αφαίρεση ανθρώπινων κατασκευασμάτων με σκοπό τον έλεγχο της ροής του νερού τίθενται ως πιο δραστικές και πιο ωφελείς ως προς το κόστος τους συγκριτικά με υβριδικές ή συμβατικές “γκρίζες” λύσεις, συμφωνά με <Link target='_blank' to='https://nbi.iisd.org/report/savi-river-restoration-in-greece/'>μια άλλη έρευνα</Link>.</p>
    <div style={{margin: '15px auto 25px', width: 'fit-content'}}><img style={{width:'100%', maxWidth:700, display:'block'}} src={solutions} />
    <p style={{fontSize:'clamp(10px, 3vw, 1rem)', float: 'right'}} >Πηγή εικόνας: <Link to='https://www.researchgate.net/figure/A-possible-representation-of-the-spectrum-of-adaptation-solutions-for-coastal-protection_fig1_336016962' target='_blank'>ResearchGate</Link>
    </p>
    </div>
    <p>Αναμφισβήτητα όμως, ο <b>περιορισμός</b> της ανθρώπινης παρεμβολής στην φύση αποτελεί την καταλληλότερη, αν και δυσκολότερη απ’ όλες, λύση για την αποκατάσταση της ζημιάς που η κλιματική αλλαγή φαίνεται να έχει προκαλέσει στην Γη.</p>
    </>
  },
  ]