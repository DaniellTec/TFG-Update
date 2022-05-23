import React, { Component } from 'react'
//import style from './style.css'; //Importar archivo css 
import '../css/styles.css';

import { FaGoogle } from "react-icons/fa";

import "bootstrap/dist/css/bootstrap.min.css";
//import VisibilityIcon from '@mui/icons-material/Visibility';
//import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default class Button extends Component {

  constructor(){
      //Maneja el ciclo, verdadero o 
      super();
      //Inicaliza la funcion
      this.state = {

          showPassword: false

      }

  }

  //Comparte cÃ³digo con otros componentes
  render() {

  return (
  <section class="vh-100 gradient-custom">
    <br/>
      <div class="col-md-6 col-lg-4 offset-lg-4 offset-md-3 mt-5">
          <div class="bg-light p-5 border shadow">

              <form>                
                  <div class="mb-4">
                      <input type="email" class="form-control form-control-lg" placeholder="Username/Email" required="Username/Email"/>
                      {/*<p class="form-text text-end">Enter Valid Username/Email</p>*/}
                  </div>

                  <div class="mb-4">
                    <div class="buttonIn">
                      <input  type="password" id="typePasswordX" class="form-control form-control-lg"  placeholder="Enter password" required="Password" type= {this.state.showPassword ? "text" : "password" } />
                      <br/>
                      <input type="checkbox" class="form-check-input" onClick = { () => this.setState ( {showPassword: !this.state.showPassword })}/> Show Password
                      {/*<p class= "form-text text-end">Reset Password</p>*/}
                      <a href="#" class="float-end">Reset Password</a>
                    </div>
                  </div>
                {/* 
                  <div class="mb-4 form-check w-100">        
                      <label class="form-check-label">
                      <input type="checkbox" class="form-check-input"/> Remember Me*
                      </label>
                      <a href="#" class="float-end">Reset Password</a>
                  </div>
                */}
                  <button type="submit" class="btn btn-primary w-100 my-3 shadow">{/*<img src={google}/>*/} <FaGoogle/> Sign In With Google</button>
                  <hr/>
                  <button type="submit" class="btn btn-dark w-100 my-3 shadow">Sign In</button>
                  <p class="text-center m-0">No tienes cuenta? <a href="/register">Please Sign Up</a></p>
              </form>
          </div>
      </div>

  </section>
    )

  }

}