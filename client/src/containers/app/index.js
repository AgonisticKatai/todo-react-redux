import React from "react";
import { Route, Link } from "react-router-dom";
import Home from "../home";
import Login from "../../login/login";
import InputForm from '../../InputForm/InputForm';

const App = () => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
    </header>
    <section>
      <Route exact path="/" component={InputForm} />
    </section>
    <main>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
    </main>
  </div>
);

export default App
