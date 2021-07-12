import React from 'react';
import Nav from '../components/nav'
import LineChart from '../components/LineChart'

function LinearChartCommits () {
    return (
        <div className="container-fluid style-container">
            <Nav/>
            <div className= "container px-0 " >
                <div className="title">
                    <h1> ACTIVIDAD DE COMMITS </h1>
                    <h2>Grafica lineal de commits</h2>
                    <h3>*Ultimas 10 semanas</h3>
                </div>
                <div className='chart'>
                    <LineChart/>
                </div>
            </div>
        </div>
        
    )
}

export default LinearChartCommits