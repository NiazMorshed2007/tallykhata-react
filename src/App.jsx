import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Password from "./components/Password";
import SignUp from "./components/SignUp";
import "./style/style.scss";

function App() {
  const [passedFirstStep, setPassedFirstStep] = useState(false);
  let [authorized, setAuthorized] = useState(true);

  const authorizedData = () => {
    localStorage.getItem("authorized") === null
      ? setAuthorized(false)
      : setAuthorized(true);
  };

  useEffect(() => {
    authorizedData();
  }, []);

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
            component={() => <Home authorized={authorized} />}
          />
          <Route
            path="/home"
            exact
            component={() => (
              <Home setAuthorized={setAuthorized} authorized={authorized} />
            )}
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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
