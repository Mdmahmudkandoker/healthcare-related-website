import './diagnosis.css';

import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext';
import CardComp from '../../component/Card/Card';

const DiagnosisPage = () => {
    const [data, setData] = useContext(DataContext);
    const diagnosis =   data.diagnosis.map((s, i)=>(<CardComp key={i} {...s} />));
    return (
        <div className='diagnosis-page'>
            <div className="cover">
                <h2>Our Diagnosis We PRovide</h2>
            </div>
            <div className="container">
                {diagnosis}
            </div>
        </div>
    )
}

export default DiagnosisPage
