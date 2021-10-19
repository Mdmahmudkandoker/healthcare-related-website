import './doctors.css';

import React, { useContext } from 'react'
import CardComp from '../../component/Card/Card';
import { DataContext } from '../../context/dataContext';

const DoctorsPage = () => {
    const [data, setDate] = useContext(DataContext);
    const doctors =   data.doctors.map((s, i)=>(<CardComp key={i} {...s} />));
    return (
        <div className='doctor-page'>
            <div className="cover">
                <h1>Our Doctors</h1>
            </div>
            <div className="container">
                {doctors}
            </div>
            
        </div>
    )
}

export default DoctorsPage
