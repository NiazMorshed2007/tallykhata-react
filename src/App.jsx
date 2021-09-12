import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cash from "./components/Cash";
import Home from "./components/Home";
import Password from "./components/Password";
import SignUp from "./components/SignUp";
import CusSup from "./components/CusSup";
import "./style/style.scss";

function App() {
  const parseHomeLists = () => {
    const homeLists = localStorage.getItem("home-lists");
    if (homeLists) {
      return JSON.parse(localStorage.getItem("home-lists"));
    } else {
      return [];
    }
  };

  const [passedFirstStep, setPassedFirstStep] = useState(false);
  let [authorized, setAuthorized] = useState(true);
  const [lists, setLists] = useState(parseHomeLists());

  const authorizedData = () => {
    localStorage.getItem("authorized") === null
      ? setAuthorized(false)
      : setAuthorized(true);
  };

  useEffect(() => {
    authorizedData();
  }, []);

  useEffect(() => {
    localStorage.setItem("home-lists", JSON.stringify(lists));
  }, [lists]);

  return (
    <Router>
      <div className="app">
        <Switch>
          <Route
            exact
            path="/sign_up"
            component={() => (
              <SignUp
                setPassedFirstStep={(passedFirstStep) =>
                  setPassedFirstStep(passedFirstStep)
                }
              />
            )}
          />
          <Route
            path="/"
            exact
            component={() => <Home lists={lists} authorized={authorized} />}
          />
          <Route
            path="/password"
            component={() => (
              <Password
                passedFirstStep={passedFirstStep}
                authorized={(authorized) => setAuthorized(authorized)}
              />
            )}
          />
          <Route
            path="/home"
            exact
            component={() => <Home lists={lists} authorized={authorized} />}
          />
          <Route path="/cash" exact component={() => <Cash />} />
          <Route
            path="/cus-sup"
            exact
            component={() => <CusSup lists={lists} setLists={setLists} />}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
