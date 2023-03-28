
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Header from './components/header/Header';
import HomePages from './home/HomePages';
import Footer from './components/footer/Footer';
import SinglePage from './components/watch/SinglePage';

function App() {
  return (
    <div>
      <Router>
        <Header/>
        <Switch>
          <Route exact path='/'component={HomePages}/>         
          <Route   exact path = '/singlepage/:id' component={SinglePage} />         
        </Switch>
        <Footer/>
      </Router>
    </div>
    
  );
}

export default App;
