import React, { useEffect, useState } from 'react'
import Nav from '../components/nav'
import { Bar } from "react-chartjs-2";


function BarChartRepos () {
    const [labelsState, setLabelsState] = useState(['repo1', 'repo2', 'repo3', 'repo4', 'repo5', 'repo6'])
    const [starsCountState, setStarsCountState] = useState([12, 19, 3, 5, 2, 3])

    const getRespos = (language) => {
        let url
        if(language) url = `https://api.github.com/search/repositories?q=stars:>=100000&q=language:${language}`
        else url = `https://api.github.com/search/repositories?q=stars:>=100000`
        return fetch(url)
            .then(response => response.json())
    }

    const actionBtn = (e) => {
        let arrLabels = []
        let arrStars = []
        getRespos(e.target.name).then(resp => {
            resp.items.forEach((item, i) => {
                if(i<20) {
                    arrLabels.push(item.name) 
                    arrStars.push(item.stargazers_count)
                }
            })
        })
        setLabelsState(arrLabels)
        setStarsCountState(arrStars)
    }
 
    useEffect(() => {
        let arrLabels = []
        let arrStars = []
        getRespos('').then(resp => {
            resp.items.forEach((item, i) => {
                if(i<20) {
                    arrLabels.push(item.name) 
                    arrStars.push(item.stargazers_count)
                }
            })
        })
        setLabelsState(arrLabels)
        setStarsCountState(arrStars)
    },[]);

    const data = {
        labels: labelsState,
        datasets: [
            {
                label: "# de estrellas",
                data: starsCountState,
                backgroundColor: [
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(75, 192, 192, 0.2)",
                "rgba(153, 102, 255, 0.2)",
                "rgba(255, 159, 64, 0.2)",
                ],
                borderColor: [
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(75, 192, 192, 1)",
                "rgba(153, 102, 255, 1)",
                "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
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
                    <h2>PRINCIPALES 12 REPOSITORIOS</h2>
                    <h3>Gráfica de barras</h3>
                    <h4>*Por estrellas</h4>
                </div>
                <div className='d-flex justify-content-center pt-2'>
                    <h5>Filtro por lenguajes</h5>
                </div>
                <div className='filter-btns d-flex justify-content-around py-4'>
                    <button type="button" className="btn btn-outline-light" onClick={actionBtn} name="">Todos</button>
                    <button type="button" className="btn btn-outline-light" onClick={actionBtn} name="javascript">Javascript</button>
                    <button type="button" className="btn btn-outline-light" onClick={actionBtn} name="go">Go</button>
                    <button type="button" className="btn btn-outline-light" onClick={actionBtn} name="ruby">Ruby</button>
                    <button type="button" className="btn btn-outline-light" onClick={actionBtn} name="python">Python</button>
                </div>
                <div className='chart'>
                    <Bar data={data} options={options} />
                </div>
            </div>
        </>
    )
}

export default BarChartRepos