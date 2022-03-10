import Layout from "./components/Layout";
//import Footer from "./components/footer";

import { Switch, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";

//import Home from "./pages/home";
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
                {/*<Route path="/home" exact>
                    <Home/>
    </Route>*/}
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
            {/*<Footer/>*/}
            <CookieConsent 
                debug={true}
                location="bottom"
                cookieName="annoyingCookie"
                buttonText="Aceptar Cookies"
                buttonStyle={{color: "#000", background: "#a3a2f7", fontSize: "15px", fontFamily: "inherit", borderRadius: "5px"}}
                style={{background: '#1c1d1c', textAlign: 'center'}}
                expires={180}
                
                enableDeclineButton
                declineButtonText="Denegar Cookies"
                declineButtonStyle={{color: "#000", background: "#f7a2cb", fontSize: "15px", fontFamily: "inherit", borderRadius: "5px"}}
                onDecline={() => {
                  alert("Acepta las cookies! Añadir Sweet Alert");
                }}
                >Esta web usa cookies para mejorar la experiencia de usuario.<br/>
                <a href=""> Para saber más</a>
            </CookieConsent>
          </Layout>
       
    );
}

export default App;
