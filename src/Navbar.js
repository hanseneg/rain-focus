import React, { useState } from 'react'
import { ReactComponent as RFLogo } from './rainfocus logo icon.svg'

export default function Navbar(){

    const [click, setClick] = useState(false)
    function handleClick(){
        setClick(!click)
    }

    function closeMenu(){
        setClick(false)
    }

    return(
        <div>
            <nav className='nav flexbox-item-1'>
                <i> <RFLogo className='logo'/> </i>

                <div className='menu' onClick={handleClick}>
                    {click ? (
                        <i class="fas fa-times"></i>
                    ) : (
                        <i class="fas fa-bars"></i>
                    )}
                </div>

                <div className='list'>
                    <ul onClick={closeMenu} className= {click ? 'options active' : 'options'} >
                        <li><i class="fas fa-search"></i></li>
                        <li><i class="fas fa-history"></i></li>
                        <hr/>
                        <li><i class="fas fa-home"></i></li>
                        <li><i class="far fa-compass"></i></li>
                        <li><i class="far fa-address-card"></i></li>
                        <li><i class="fas fa-desktop"></i></li>
                        <li><i class="fas fa-user-friends"></i></li>
                        <li><i class="far fa-folder"></i></li>
                        <li><i class="fab fa-elementor"></i></li>
                        <li><i class="fas fa-book-open"></i></li>
                        <li><i class="far fa-building"></i></li>
                        <li><i class="far fa-chart-bar"></i></li>
                        <div className='arrow'>
                            <hr/>
                            <li><i class="fas fa-angle-double-right"></i></li>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}