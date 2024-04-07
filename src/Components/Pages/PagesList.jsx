export const PublicPageList = [
    {no: 1, name:<><i className="fa-solid fa-clipboard-question" /> Ερευνητικό ερώτημα</>, path: '/research-question',},
    {no: 2, name:<><i className="fa-solid fa-file" /> Περίληψη έργου</>, path: '/summary',},
    {no: 3, name:<><i className="fa-solid fa-square-poll-vertical" /> Κύρια αποτελέσματα και συμπεράσματα</>, path: '/results',},
    {no: 4, name:<><i className="fa-solid fa-list" /> Δράσεις για περιορισμό του προβλήματος</>, path: '/actions',}
]

import {Chart as ChartJS} from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2';

export const PagesContent = [
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