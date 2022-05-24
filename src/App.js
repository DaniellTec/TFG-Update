import Layout from "./components/Layout";
//import Footer from "./components/footer";

import { Switch, Route } from "react-router-dom";
import CookieConsent from "react-cookie-consent";
import Swal from 'sweetalert2';

import Home from "./pages/home";
import Paint from "./pages/paint";
import Photo from "./pages/photo";
import PaintRoot from "./pages/paintRoot";
import PhotoRoot from "./pages/photoRoot";
import Museum from "./pages/museum";
import MuseumRoot from "./pages/museumRoot";
import Login from './pages/login';
import Register from './pages/register';

import Users from './pages/users';

import Cart from './pages/shoppingCart';

import Payment from './pages/payment';

function App() {
    return (
        <Layout>
            <Switch>
                <Route path="/" exact>
                    <Home/>
                </Route>
                <Route path="/paint">
                    <Paint/>
                </Route>
                <Route path="/photo">
                    <Photo/>
                </Route>
                <Route path="/museum">
                    <Museum/>
                </Route>
                <Route path="/paintRoot">
                    <PaintRoot/>
                </Route>
                <Route path="/photoRoot">
                    <PhotoRoot/>
                </Route>
                <Route path="/museumRoot">
                    <MuseumRoot/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/shoppingCart">
                    <Cart/>
                </Route>
                <Route path="/users">
                    <Users/>
                </Route>
                <Route path="/payment">
                    <Payment/>
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

                onAccept={(acceptedByScrolling) => {
                    Swal.fire({
                        icon: 'success',
                        title: 'Cookies aceptadas',
                        showConfirmButton: false,
                        timer: 1500
                      })
                  }}
                
                enableDeclineButton
                declineButtonText="Denegar Cookies"
                declineButtonStyle={{color: "#000", background: "#f7a2cb",  fontSize: "15px", fontFamily: "inherit", borderRadius: "5px"}}
             
                onDecline={() => {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...ha habido un error',
                        text: 'Tienes que aceptar las cookies.',
                        heightAuto: false,
                        timer: 2000
                      }).then((result) => {
                         if(result){
                           // Do Stuff here for success
                           window.location.reload();
                         }
                      })
                }}
                >Esta web usa cookies para mejorar la experiencia de usuario.<br/>
                <a href=""> Para saber más</a>
            </CookieConsent>
          </Layout>
       
    );
}

export default App;
