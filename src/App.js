import { HashRouter as Router, Route, Switch } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.css";
import Layout from "./components/Layout";
import "./App.css";
import data from "./static/data.json";
import About from "./pages/about/About";

function App() {
    return (
        <Router>
            <ScrollToTop />
            <Layout links={data.links}>
                <Switch>
                    <Route path="/" exact>
                        <Home />
                    </Route>
                    <Route path="/about" exact>
                        <About />
                    </Route>
                </Switch>
            </Layout>
        </Router>
    );
}

export default App;
