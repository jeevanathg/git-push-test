import React from "react";
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import "./App.css";

function Home() {
  return <h2>Home</h2>;
}

function AboutUs() {
  return <h2>About US</h2>;
}

function ContactUs() {
  return <h2>Contact Us</h2>;
}

function Topics() {
  let match = useRouteMatch();
  return (
    <div>
      <h2>Topics</h2>
      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>Props Vs State</Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();

  return <h3>Requested Topic ID: {topicId}</h3>;
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>React Router Dom</h1>
      </header>

      <BrowserRouter>
        <section>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/topics">Topics</Link>
              </li>
              <li>
                <Link to="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </nav>

          <aside>
            <Switch>
              <Route path="/about-us">
                <AboutUs />
              </Route>
              <Route path="/contact-us">
                <ContactUs />
              </Route>
              <Route path="/topics">
                <Topics />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </aside>
        </section>
      </BrowserRouter>

      <footer>Footer</footer>
    </div>
  );
}

export default App;
