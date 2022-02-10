import React from 'react'

export default function Badge(){
    return(
        <div className='flexbox-item flexbox-item-2'>

            <div className='inline'>
                <h1>Badge Output</h1>
                <i class="fas fa-pen"></i>
            </div>

            <hr/>

            <div className='badge-items'>

                <p>First Name: <span className='badge-details'>Allison</span></p>
                <p>Preferred First Name for Badge: <span className='badge-details'>Al</span></p>
                <p>Last Name: <span className='badge-details'>Profitt</span></p>
                <p>Company: <span className='badge-details'>Bio-IT World</span></p>
                <p>Onsite - Badge Holders: <span className='badge-details'>JVA</span></p>
                <p>Onsite - Aux: <span className='badge-details'>1</span></p>

                <div className='inline check-in'>
                    <p>Check-in: 09/16/16 7:51 AM</p>
                    <div>
                        <i class="fas fa-trash"></i>
                        <i class="fas fa-print"></i>
                    </div>
                </div>

            </div>

        </div>
    )
}