import Layout from "./components/Layout";
import Footer from "./components/footer";

import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";

import Artists from "./pages/artists";
import Art from "./pages/art";
import Designs from "./pages/designs";
import Events from "./pages/events";
import About from "./pages/about";
import Login from './pages/login';
import Sign from './pages/sign';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/artists">
                    <Artists />
                </Route>
                <Route path="/art">
                    <Art/>
                </Route>
                <Route path="/designs">
                    <Designs/>
                </Route>
                <Route path="/events">
                    <Events/>
                </Route>
                <Route path="/about">
                    <About/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/sign">
                    <Sign/>
                </Route>
            </Switch>
            <Footer/>
        </Layout>
        
    );
}

export default App;
