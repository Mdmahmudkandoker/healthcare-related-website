import './details.css';

import React from 'react'
import { DataContext } from '../../context/dataContext';
import { useParams } from 'react-router';


const DetailsPage = () => {
    let {name} = useParams();
    const [data, setData] = React.useContext(DataContext);

  
   
    const item = data.services.filter((s, i)=> s.name === name)[0];
    console.log(item)
    return (
        <div className='details'>
           <h1>details page</h1> 
            <h2>{item.name}</h2>
            <img src={item.image} alt={item.name} />
            <p>Description : {item.desc}</p>
        </div>
    )
}

export default DetailsPage
