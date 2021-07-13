import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
// import LineChart from '../components/LineChart'

import { Line } from 'react-chartjs-2';

function LinearChartCommits () {
    const [labelsState, setLabelsState] = useState(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'])
    const [commitsCountState, setCommitsCountState] = useState([1369526400, 1370131200, 1370736000, 1371340800, 1371945600, 1372550400, 1373155200, 1373760000, 1374364800, 1374969600])

    const getCommitsData = () => {
        let url = 'https://api.github.com/repos/facebook/react/stats/code_frequency'
        return fetch(url)
            .then(response => response.json())
    }

    useEffect(() => {
        let arrLabels = []
        let arrCommits = []
        getCommitsData().then(resp => {
            resp.forEach((item, i) => {
                if(i<10) {
                    arrLabels.push(`${i + 1}`) 
                    arrCommits.push(item[0])
                }
            })
        })
        setLabelsState(arrLabels)
        setCommitsCountState(arrCommits)
       
    },[]);

    const data = {
        labels: labelsState,
        datasets: [
          {
            label: '# of Commits',
            data: commitsCountState,
            fill: false,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgba(255, 99, 132, 0.2)',
          },
        ],
      };
      
      const options = {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      };
    return (
        <>
            <Nav/>
            <div className= "container px-0 " >
                <div className="title py-4">
                    <h2> ACTIVIDAD DE COMMITS </h2>
                    <h3>Gráfica lineal de commits</h3>
                    <h4>*Ultimas 10 semanas</h4>
                </div>
                <div className='chart'>
                    <Line data={data} options={options} />
                </div>
            </div>
        </>
        
    )
}

export default LinearChartCommits