import React, { useContext } from 'react'
import CardComp from '../../component/Card/Card';
import { DataContext } from '../../context/dataContext';
import { LoaderContext } from '../../context/loaderContext';
import './Homepage.css';
const Homepage =  () => {
    const [data, setData] = useContext(DataContext);
    const [loader, setLoader] = useContext(LoaderContext)
   
   
    const services =   data.services.filter((s,i)=> i<=5).map((s, i)=>(<CardComp key={i} {...s} desc={s.desc.slice(0, 100)+'...'}/>));
    const doctors =   data.doctors.filter((s,i)=> i<=2).map((s, i)=>(<CardComp key={i} {...s} desc={s.desc.slice(0, 100)+'...'}/>));
    const diagnosis =   data.diagnosis.map((s, i)=>(<CardComp key={i} {...s} desc={null}/>));
    
  
   
    return (
        <div className='homepage'>
            <div className="cover">
                <h1>We are Here To care</h1>
                <p>We have one goal in mind to make life of people better. We dont just look to cure
                    diseases but also to make sure you dont get sick again. We wanna ensure health 
                    lifestyle of our patients
                </p>
            </div>
            <div className="service-preview">
                <h2>Our Services</h2>
                <div className="container">
                {services}
                </div>
            </div>
            <div className="docs">
                <h2>Our Doctors</h2>
                <div className="container">
                {doctors}
                </div>
            </div>
            <div className="diagnosis">
                <h2>Our Diagnosis Services</h2>
                <div className="container">
        {diagnosis}
                </div>
            </div>
        </div>
    )
}

export default Homepage
