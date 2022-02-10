import React from 'react'

export default function Schedule(){
    return(
        <div className='flexbox-item flexbox-item-3'>

            <div className='inline-sunday'>
                <h1>Sunday</h1>
                <p>July 15, 2018</p>
            </div>

            <hr/>

            <table className='schedule'>
                <tr className='no-border'>
                    <th>07:00 AM</th>
                    <td className='divider'>|</td>
                    <td>Find Sessions.</td>
                </tr>
                <tr>
                    <th>08:00 AM</th>
                    <td className='divider'>|</td>
                    <td className='inline'>
                        <p>BR1058</p>
                        <div className='schedule-icons'>
                            <i class="fas fa-pen"></i>
                            <i class="fas fa-trash"></i>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>09:00 AM</th>
                    <td className='divider'>|</td>
                    <td>Find Sessions</td>
                </tr>
                <tr>
                    <th>10:00 AM</th>
                    <td className='divider'>|</td>
                    <td className='inline'>
                        <p>BR1063</p>
                        <div className='schedule-icons'>
                            <i class="fas fa-pen"></i>
                            <i class="fas fa-trash"></i>
                        </div>
                    </td>
                </tr>
                <tr>
                    <th>11:00 AM</th>
                    <td className='divider'>|</td>
                    <td>Find Sessions.</td>
                </tr>
            </table>

        </div>
    )
}

