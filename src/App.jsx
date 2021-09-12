import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Cash from "./components/Cash";
import Home from "./components/Home";
import Password from "./components/Password";
import SignUp from "./components/SignUp";
import CusSup from "./components/CusSup";
import "./style/style.scss";

function App() {
  const [passedFirstStep, setPassedFirstStep] = useState(false);
  let [authorized, setAuthorized] = useState(true);

  const [lists, setLists] = useState([[]]);
  console.log(lists.length);

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
          <Route path="/cus-sup" exact component={() => <CusSup />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
