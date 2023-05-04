
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/header/Header';
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';
import Login from './components/login/Login';

function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          
          <Route path='/home'component={HomePages}/>         
          <Route path = '/singlepage/:id' component={SinglePage} />   
           
        </Switch>
        
        <Route exact path= '/login' component={Login}/> 
      </Router>
    </div>
    
  );
}

export default App;
