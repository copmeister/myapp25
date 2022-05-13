import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import BarChart from './BarChart';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import { Router, Switch, Route, } from "react-router-dom";

// import Create from "./Create";
// import BlogDetails from "./BlogDetails";
// import CalcApp from "./CalcApp";
// import FigmaSample from "./FigmaSample";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/* <Route path="/create">
              <Create />
            </Route>
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
            <Route path="/calculator">
              <CalcApp />
            </Route>
            <Route path="/figma">
              <FigmaSample />
            </Route> */}
            <Route path="/barchart">
              <BarChart />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
