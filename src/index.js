import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/styles.scss';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import * as serviceWorker from './serviceWorker';
import Main from'./Component/Main';
import NotFoundPage from'./Component/NotFoundPage';

const App=()=>{

  return(
<div>


 <BrowserRouter>
        <Switch>
          <Route path='/'  component={Main} exact/>
          <Route  component={NotFoundPage} />
        </Switch>
      
    </BrowserRouter>




</div>


  )

}


ReactDOM.render(<App/>,document.getElementById('root')
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
