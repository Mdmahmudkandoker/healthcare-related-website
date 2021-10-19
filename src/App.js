import { useContext } from 'react';
import {Switch, Route} from 'react-router-dom'
import './App.css';
import Footer from './component/footer/Footer';
import Header from './component/Header/Header';
import Loader from './component/Loader/Loader';
import { PrivateRoute } from './component/PrivateRoute/PrivateRoute';
import { LoaderContext } from './context/loaderContext';
import NotFound from './pages/404/notFound';
import DetailsPage from './pages/detailsPage/DetailsPage';
import DiagnosisPage from './pages/diagnosis/DiagnosisPage';
import DoctorsPage from './pages/doctorsPage/DoctorsPage';
import Homepage from './pages/homepage/Homepage';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Services from './pages/Services/Services';

function App() {
  const [loader, setLoader] = useContext(LoaderContext);
  return (
    <div className="App">
     <Header/> 
     
      {loader?<Loader/> : null }
      
   <Switch>
   <Route exact path='/'>
    <Homepage/>
    </Route>
     <Route exact path='/login'>
     <Login/>
     </Route>
     <Route exact path='/register'>
     <Register/>
     </Route>
     <Route exact path='/services'>
     <Services/>
     </Route>
     <PrivateRoute exact path='/doctors'>
     <DoctorsPage/>
     </PrivateRoute>
     <PrivateRoute exact path='/diagnosis'>
     <DiagnosisPage/>
     </PrivateRoute>
     <PrivateRoute exact path='/:name/details'>
     {loader? 'loading' : <DetailsPage/>}
     </PrivateRoute>
    <Route exact path='*'>
    <NotFound/>
    </Route>
   </Switch>
   <Footer/>
    </div>
  );
}

export default App;
