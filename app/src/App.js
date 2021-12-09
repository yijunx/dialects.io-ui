import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import Words from "./views/Words";
import EmailVerification from "./views/EmailVerification";
import ResetPassword from "./views/ResetPassword";
import UserProfile from "./views/UserProfile";
import { getCurrentUser } from "./utils/LoginUtils";
import { UserContext } from "./UserContext";

function App() {
  // get the CRSF token
  // CSRF();
  // get current user
  const current_user = getCurrentUser();
  console.log("curent user is shown below");
  console.log(current_user);

  // use state..
  const [user, setUser] = useState(current_user);
  return (
    <div className="flex flex-col h-screen">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Header className=""></Header>
          <div className="flex-1 overflow-y-auto p-3">
            <Switch>
              <Route exact path="/words?page=1&size=5">
                <Words />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/email_verification">
                <EmailVerification />
              </Route>
              <Route path="/reset_password">
                <ResetPassword />
              </Route>
              <Route path="/users/:user_id">
                <UserProfile />
              </Route>
            </Switch>
          </div>
          <Footer className=""></Footer>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
