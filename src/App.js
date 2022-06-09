import Budget from "./Budget";
import "./MyApp.css"
import {Provider} from 'react-redux'
import Authentication from "./Authentication";
import store from "./redux/store";
import {useState} from "react";
import { BrowserRouter as Router,
        Switch,
        Route} from 'react-router-dom'

function App() {
  // const [isSubmitted, setIsSubmitted] = useState(false)
  //   const [customerName, setCustomerName] = useState("")
  return (
    <Provider store={store}>
      {/* //{" "} */}
      <div className="app-container">
        {/*<Budget/>*/}
        {/*  <Authentication/>*/}
        {/*  {isSubmitted ? <Budget/> : <Authentication setIsSubmitted = {setIsSubmitted}/>}*/}
        {/* //{" "} */}
        <Router>
          <Switch>
            {/* //{" "} */}
            <Route exact path="/">
              {/*<Authentication setCustomerName = {setCustomerName}/>*/}
               <Authentication />
              {/* //{" "} */}
            </Route>
            {/*{isSubmitted ? <Budget/> : <Authentication setIsSubmitted = {setIsSubmitted}/>}*/}

            <Route path="/dashboard/:identity">
              {/*<Budget customerName = {customerName}/>*/}
              <Budget />
            </Route>
          </Switch>
        </Router>
      </div>
    </Provider>
  )
  }

export default App;
