import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch ,Route} from 'react-router-dom'
import Login from './Components/login'
import Signup from './Components/signup'
import Forgotpassword from './Components/forgotpass';
import Resetpassword from './Components/resetpass';

function App() {
 

  return (
    <><Switch>
      <Route exact path="/">
        <Login/>

      </Route>
      <Route path="/signup">
        <Signup/>
      </Route>
      <Route path="/forgot">
        <Forgotpassword/>

      </Route>

      <Route path="/reset/password/:token">
        <Resetpassword/>
      </Route>
    </Switch>
     
    </>
  )
}


export default App
