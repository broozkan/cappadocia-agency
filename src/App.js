
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect

} from 'react-router-dom'
import RouterMain from './routers/RouterMain';

function App() {

  useEffect(()=>{

    const currentLanguage = localStorage.getItem('language')

    if(currentLanguage){
        setLanguage(currentLanguage)
    }else{
        setLanguage('tr')
        window.location.reload()
    }
    
    
  },[])

  return (
    <div className="body-inner">
      <Router>
        <Switch>
          <Route path="/">
            <RouterMain />
          </Route>
        </Switch>
      </Router>


    </div>
  );
}

export default App;
