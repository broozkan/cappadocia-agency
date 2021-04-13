
import { useEffect } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import RouterMain from './routers/RouterMain';

function App() {


  useEffect(() => {
    const currentLanguage = localStorage.getItem('language')

    var userLang = navigator.language || navigator.userLanguage;


    if (!currentLanguage) {
      let userLang = navigator.language || navigator.userLanguage;
      userLang = userLang.split("-")

      localStorage.setItem('language', userLang[0])
      window.location.reload()
    }


  }, [])

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
