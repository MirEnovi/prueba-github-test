import React from 'react';
import Nav from '../components/nav'
import VerticalBar from '../components/BarChar'

function BarChartRepos () {
    const getRespos = () => {
        return fetch('https://api.github.com/search/repositories&q=stars:>=500')
    }

    return (
        <div className="container-fluid style-container">
            <Nav/>
            <div className= "container px-0 " >
                <div className="title">
                    <h1>PRINCIPALES 20 REPOSITORIOS</h1>
                    <h2>Gráfica de Barras</h2>
                    <h3>*Por estrellas</h3>
                </div>
                <div className='chart'>
                    <VerticalBar/>
                </div>
            </div>
        </div>
    )
}

export default BarChartRepos