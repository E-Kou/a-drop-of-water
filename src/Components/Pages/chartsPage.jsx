import React from 'react'
import {Chart as ChartJS} from 'chart.js/auto';
import {Bar, Doughnut, Line} from 'react-chartjs-2';

export default function ChartsPage() {
  return (
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
  )
}
