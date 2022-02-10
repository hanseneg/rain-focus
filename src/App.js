import React from 'react'
import './style.css'
import Navbar from './Navbar'
import Badge from './Badge'
import Schedule from './Schedule'
import Table from './Table'

export default function App() {

    return (
        <div className='flexbox-container'>
            <Navbar/>
            <div className='box-1'>
                <div className='box-2'>
                    <Badge/>
                    <Schedule/>
                </div>
                <Table/>
            </div>
        </div>
    )
}
