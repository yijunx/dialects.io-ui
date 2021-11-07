import "./App.css";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./views/Home";
import EmailVerification from "./views/EmailVerification";
import UserProfile from "./views/UserProfile";
import { getCurrentUser } from "./utils/LoginUtils";
import { UserContext } from "./UserContext";

function App() {
  // get the CRSF token
  // CSRF();
  // get current user
  const current_user = getCurrentUser();
  console.log("cuurent user is");
  console.log(current_user);

  // use state..
  const [user, setUser] = useState(current_user);
  return (
    <div className="relative pb-10 min-h-screen">
      <UserContext.Provider value={{ user, setUser }}>
        <Router>
          <Header />
          <div className="p-3">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/email_verification">
                <EmailVerification />
              </Route>
              <Route path="/users/:user_id">
                <UserProfile />
              </Route>
            </Switch>
          </div>
          <Footer />
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
