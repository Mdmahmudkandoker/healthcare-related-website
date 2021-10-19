import './services.css';

import React, { useContext } from 'react'
import { DataContext } from '../../context/dataContext';
import CardComp from '../../component/Card/Card';

const Services = () => {
    const [data, setData] = useContext(DataContext);
    const services = data.services.map((s, i)=>(<CardComp key={i} {...s} desc={s.desc.slice(0, 100)+'...'}/>));
    return (
        <div className='service-page'>
            <div className="cover">
                <h2>We Provide These kind of Facilities</h2>
            </div>
            <div className="container">
            {services} 
            </div>
          
        </div>
    )
}

export default Services
