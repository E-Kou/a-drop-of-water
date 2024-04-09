export const PublicPageList = [
    {no: 1, name:<><i className="fa-solid fa-clipboard-question" /> Ερευνητικό ερώτημα</>, path: '/pages/research-question',},
    {no: 2, name:<><i className="fa-solid fa-file" /> Περίληψη έργου</>, path: '/pages/summary',},
    {no: 3, name:<><i className="fa-solid fa-square-poll-vertical" /> Κύρια αποτελέσματα και συμπεράσματα</>, path: '/pages/results',},
    {no: 4, name:<><i className="fa-solid fa-list" /> Δράσεις για περιορισμό του προβλήματος</>, path: '/pages/actions',}
]

export const OtherPageList = [
    {no: 1, name:<><i className="fa-solid fa-clipboard-question" /> Ερευνητικό ερώτημα</>, path: '/pages/research-question',},
    {no: 2, name:<><i className="fa-solid fa-file" /> Περίληψη έργου</>, path: '/pages/summary',},
    {no: 3, name:<><i className="fa-solid fa-square-poll-vertical" /> Κύρια αποτελέσματα και συμπεράσματα</>, path: '/pages/results',},
    {no: 4, name:<><i className="fa-solid fa-list" /> Δράσεις για περιορισμό του προβλήματος</>, path: '/pages/actions',}
]

import {Chart as ChartJS} from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2';

import boukefalas from "../../assets/boukefalas.webp"
import agalmaBoukefalas from "../../assets/agalma_boukefalas.webp"
import schFront from "../../assets/sch.webp"
import tc1 from "../../assets/tc1.webp"
import tc2 from "../../assets/tc2.webp"
import swir1 from "../../assets/swir1.webp"
import swir2 from "../../assets/swir2.webp"
import ndsi1 from "../../assets/ndsi1.webp"
import ndsi2 from "../../assets/ndsi2.webp"
import thessaly from "../../assets/thessaly.webp"

import { ImgComparisonSlider } from '@img-comparison-slider/react';
import { useState } from 'react';



function ResultsPanel(){
    const [toggleTab, setToggleTab] = useState('tc');
    return(
<><div><ImgComparisonSlider className={toggleTab == 'tc' ? 'open_tab':''} hover='hover'>
<div slot="first">
    <div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>10 Αυγούστου 2023</h4></div>
<img src={tc2} />
</div>
  <div slot="second">
    <div id="afterFlooding"><h5>Θεσσαλία</h5><h4>10 Αυγούστου 2023</h4></div>
  <img src={tc1} />
  </div>
</ImgComparisonSlider>
<ImgComparisonSlider className={toggleTab == 'swir' ? 'open_tab':''} hover='hover'>
<div slot="first">
    <div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>10 Αυγούστου 2023</h4></div>
<img src={swir2} />
</div>
  <div slot="second">
    <div id="afterFlooding"><h5>Θεσσαλία</h5><h4>10 Αυγούστου 2023</h4></div>
  <img src={swir1} />
  </div>
</ImgComparisonSlider>
<ImgComparisonSlider className={toggleTab == 'ndsi' ? 'open_tab':''} hover='hover'>
<div slot="first">
    <div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>10 Αυγούστου 2023</h4></div>
<img src={ndsi2} />
</div>
  <div slot="second">
    <div id="afterFlooding"><h5>Θεσσαλία</h5><h4>10 Αυγούστου 2023</h4></div>
  <img src={ndsi1} />
  </div>
</ImgComparisonSlider>
<div className={toggleTab == 'drone' ? 'open_tab droneIMG' : 'droneIMG'} ><div id='beforeFlooding'><h5>Θεσσαλία</h5><h4>Πλημμύρα λόγω κακοκαιρίας Daniel</h4></div><img src={thessaly}/></div>
</div>
<div className='Controller row'>
<div className={toggleTab == 'tc' ? 'open_btn' : ''} onClick={() => setToggleTab('tc')}><button>True color</button>
    <span>True color composite</span>
    </div>
    <div className={toggleTab == 'swir' ? 'open_btn' : ''} onClick={() => setToggleTab('swir')}><button>SWIR</button>
    <span>Short wave infrared composite</span>
    </div>
    <div className={toggleTab == 'ndsi' ? 'open_btn' : ''} onClick={() => setToggleTab('ndsi')}><button>NDSI</button>
    <span>Normalised Difference Snow Index</span>
    </div>
    <div className={toggleTab == 'drone' ? 'open_btn' : ''} onClick={() => setToggleTab('drone')}><button>Εικόνα Drone</button>
    </div>
</div>
</>
    )
}

export const PagesContent = [
    {title:"Κύρια αποτελέσματα και συμπεράσματα",
path:"results",
panel: <ResultsPanel />
},
    {title:"Θεσσαλία",
path:"thessaly",
panel:<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2677558.1248216!2d21.4079969819568!3d39.57546826838777!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14a7792f814128a5%3A0x100bd2ce2b9c5e0!2zzpjOtc-Dz4POsc67zq_OsQ!5e1!3m2!1sel!2sgr!4v1712518422705!5m2!1sel!2sgr" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>,
content:
<><p>Η Θεσσαλία είναι ένα γεωγραφικό διαμέρισμα στην κεντρική περίπου Ελλάδα, βόρεια της οποίας βρίσκεται η Μακεδονία, νότια της η Στερεά Ελλάδα και δυτικά της η Ήπειρος ενώ στα ανατολικά της βρέχεται από το Αιγαίο Πέλαγος. Οι κύριες πόλεις της Θεσσαλίας είναι η Λάρισα, ο Βόλος, τα Τρίκαλα και η Καρδίτσα. Σύμφωνα με την απογραφή του 2011 η Θεσσαλία αριθμεί 732.762 κατοίκους. Η έκτασή της ανέρχεται στα 14.036 χλμ². Η Θεσσαλία επίσης είναι γνωστή για την μεγάλη πεδιάδα της, τον Θεσσαλικό Κάμπο, από τον οποίο περνά ο Πηνειός ποταμός, ο τρίτος μεγαλύτερος ποταμός της Ελλάδας (μήκος: 205 χλμ.) καθώς και για το βουνό Όλυμπο το οποίο βρίσκεται στα όρια της με την Μακεδονία. </p>
<h3>Η Ιστορία της Θεσσαλίας</h3>
<p>
Η Θεσσαλία αποτελούσε ένα σημαντικό μέρος της αρχαίας Ελλάδας το οποίο ήταν ιδιαίτερα συνδεδεμένο με τον υπόλοιπο ελληνικό χώρο. Μάλιστα, οι Θεσσαλοί είχαν ήδη συνειδητοποιήσει από τους αρχαίους χρόνους ότι αποτελούσαν κάτι κοινό οπότε ήταν σε στενή επαφή μεταξύ τους μέσω του Κοινού των Θεσσαλών. Αργότερα, η Θεσσαλία πέρασε στον έλεγχο των Μακεδόνων και μετά των Ρωμαίων. Ύστερα, ακολούθησε η Βυζαντινή περίοδος και μετέπειτα η οθωμανική. Η Θεσσαλία παραχωρήθηκε τελικά στο ελληνικό κράτος το 1881 και από τότε αποτελεί αναπόσπαστο κομμάτι της Ελλάδας. Ο Θεσσαλικός κάμπος μέχρι τις αρχές του 20ού αιώνα ήταν σιτοβολώνας για την Ελλάδα. Η ύπαρξη του έκανε τη Θεσσαλία μια από τις λίγες περιοχές στην Αρχαία Ελλάδα που μπορούσαν να στεγάσουν μεγάλο αριθμό ιππικού. Το θεσσαλικό ιππικό ήταν σημαντικό μέρος του αρχαίου Μακεδονικού στρατού του Φιλίππου Β' και του Μεγάλου Αλεξάνδρου. 
</p>
<div><div className='imgBox'><img src={boukefalas} /><p>Ο Μέγας Αλέξανδρος δαμάζει τον βουκεφάλα, άλογο θεσσαλικής καταγωγής, από μικρή ηλικία.</p></div><div className='imgBox'><img src={agalmaBoukefalas} /><p>Ο Μέγας Αλέξανδρος δαμάζει τον βουκεφάλα, άλογο θεσσαλικής καταγωγής, από μικρή ηλικία</p></div></div>
</>
},
    {title:"Ερευνητικό ερώτημα",
    path:"research-question",
    panel:<img className='imgHero' src={schFront}/>,
content:<div><p style={{fontSize: '1.25rem', marginBottom: 15}}>Η ομάδα μας, αποτελούμενη από τον Αγγελο Γεωργίου και Ευάγγελο Κουτσογιάννη, μαθητές του 1ου Πειραματικού Γυμνασίου Λάρισας, επέλεξε ως κεντρικό ερευνητικό ερώτημα της εγασίας μας είναι το εξής:</p>
<div id='theQuestion'>Πώς επηρέασε τη Θεσσαλία η κακοκαιρία Daniel;</div>
</div>
},
  {title:"Γραφήματα", 
  path: "charts",
  content:
  <div className='pageContent'>
  <div className='graph'>
<Bar
data={{
  labels:[2020, 2021, 2022, 2024],
  datasets:[
      {
          label: 'Θερμοκρασία',
          data: [20,21, 21.5, 23],
          backgroundColor:[
              'grey',
              'red',
              'blue',
              'black'
          ]
      },
  ]
}}
/>
<Doughnut
data={{
  labels:[2020, 2021, 2022, 2024],
  datasets:[
      {
          label: 'Θερμοκρασία',
          data: [20,21, 21.5, 23],
          backgroundColor:[
              'grey',
              'red',
              'blue',
              'black'
          ]
      },
  ]
}}
/>
<Line
data={{
  background: 'blue',
  labels:[2020, 2021, 2022, 2024],
  datasets:[
      {
          label: 'Θερμοκρασία',
          borderColor: 'pink',
          data: [20,21, 21.5, 23],
          backgroundColor: 'purple',
      },
  ]
}}
/>
</div>
</div>
},
{
    title: 'Mario',
    content:' A lot of content',
    path:'check'
}
]